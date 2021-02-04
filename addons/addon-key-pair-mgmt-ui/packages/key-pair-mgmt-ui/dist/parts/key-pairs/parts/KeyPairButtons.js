import React from 'react';
import { decorate, computed, action, observable, runInAction } from 'mobx';
import { observer, inject } from 'mobx-react';
import { withRouter } from 'react-router-dom';
import { Button, Modal } from 'semantic-ui-react';
import { displayError, displaySuccess } from '@aws-ee/base-ui/dist/helpers/notification'; // expected props
// - keyPair (via prop)
// - keyPairsStore (via injection)

class KeyPairButtons extends React.Component {
  constructor(props) {
    super(props);

    this.handleDelete = async () => {
      this.processingButton = 'delete';

      try {
        const name = this.keyPair.name;
        const store = this.keyPairsStore;
        await store.deleteKeyPair(this.keyPair.id);
        displaySuccess(`The key "${name}" was successfully deleted`);
      } catch (error) {
        displayError(error);
      } finally {
        runInAction(() => {
          this.processingButton = '';
        });
      }
    };

    runInAction(() => {
      // The name of the button that is clicked recently and resulted in triggering a processing task
      // The name can be: 'delete', 'activate' or 'deactivate'
      this.processingButton = '';
    });
  }

  get keyPair() {
    return this.props.keyPair;
  }

  get keyPairsStore() {
    return this.props.keyPairsStore;
  }

  render() {
    const processing = !!this.processingButton;
    return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Modal, {
      trigger: /*#__PURE__*/React.createElement(Button, {
        floated: "right",
        basic: true,
        color: "red",
        size: "mini",
        className: "mt1 mb1",
        loading: processing
      }, "Delete"),
      header: "Are you sure?",
      content: "This action can not be reverted.",
      actions: ['Cancel', {
        key: 'delete',
        content: 'Delete',
        negative: true,
        onClick: this.handleDelete
      }],
      size: "mini"
    }));
  }

} // see https://medium.com/@mweststrate/mobx-4-better-simpler-faster-smaller-c1fbc08008da


decorate(KeyPairButtons, {
  keyPair: computed,
  keyPairsStore: computed,
  processingButton: observable,
  handleDelete: action
});
export default inject('keyPairsStore')(withRouter(observer(KeyPairButtons)));
//# sourceMappingURL=KeyPairButtons.js.map