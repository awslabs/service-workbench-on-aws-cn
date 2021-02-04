import React from 'react';
import { decorate, runInAction, observable, action, computed } from 'mobx';
import { observer, inject } from 'mobx-react';
import { withRouter } from 'react-router-dom';
import { Button, Header, Message } from 'semantic-ui-react';
import { displayError } from '@aws-ee/base-ui/dist/helpers/notification';
import Form from '@aws-ee/base-ui/dist/parts/helpers/fields/Form';
import Input from '@aws-ee/base-ui/dist/parts/helpers/fields/Input';
import TextArea from '@aws-ee/base-ui/dist/parts/helpers/fields/TextArea';
import { getKeyPairCreateForm } from '../../../models/forms/KeyPairCreateForm'; // expected props
// - onCancel (via props) a function is called with the user clicks on cancel or done
// - keyPairsStore (via injection)

class KeyPairCreateForm extends React.Component {
  constructor(props) {
    super(props);

    this.handleCreate = async form => {
      const data = form.values();

      try {
        const keyPair = await this.keyPairsStore.createKetPair(data);
        runInAction(() => {
          this.keyPair = keyPair;
        });
      } catch (error) {
        displayError(error);
      }
    };

    this.handleCancel = () => {
      this.keyPair = undefined;
      const onCancel = this.props.onCancel;
      if (onCancel) return onCancel();
      return undefined;
    };

    this.handleDownload = () => {
      const keyPair = this.keyPair;
      const downloadLink = document.createElement('a');
      downloadLink.setAttribute('href', `data:application/octet-stream,${encodeURIComponent(keyPair.privateKey)}`);
      downloadLink.setAttribute('download', `${keyPair.name}.pem`);
      downloadLink.click();
    };

    runInAction(() => {
      this.form = getKeyPairCreateForm();
      this.keyPair = undefined;
    });
  }

  get keyPairsStore() {
    return this.props.keyPairsStore;
  }

  render() {
    const keyPair = this.keyPair;
    return keyPair ? this.renderPrivateKey() : this.renderForm();
  }

  renderForm() {
    const form = this.form;
    return /*#__PURE__*/React.createElement(Form, {
      form: form,
      onCancel: this.handleCancel,
      onSuccess: this.handleCreate
    }, ({
      processing,

      /* onSubmit, */
      onCancel
    }) => /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Input, {
      field: form.$('name'),
      className: "mb3"
    }), /*#__PURE__*/React.createElement(TextArea, {
      field: form.$('desc')
    }), /*#__PURE__*/React.createElement(Button, {
      floated: "right",
      className: "ml2",
      primary: true,
      content: "Create Key",
      disabled: processing,
      type: "submit"
    }), /*#__PURE__*/React.createElement(Button, {
      floated: "right",
      className: "ml2",
      content: "Cancel",
      disabled: processing,
      onClick: onCancel
    })));
  }

  renderPrivateKey() {
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Header, null, "Private Key"), /*#__PURE__*/React.createElement(Message, {
      warning: true
    }, /*#__PURE__*/React.createElement(Message.Header, null, "Warning!"), /*#__PURE__*/React.createElement("p", null, "This is your only chance to download the private key. The private key is secret information that should not be shared with others. It should be stored and handled carefully.", ' ')), /*#__PURE__*/React.createElement("div", {
      className: "clearfix"
    }, /*#__PURE__*/React.createElement(Button, {
      floated: "right",
      className: "ml2",
      content: "Done",
      onClick: this.handleCancel
    }), /*#__PURE__*/React.createElement(Button, {
      floated: "left",
      primary: true,
      className: "mr2",
      content: "Download",
      onClick: this.handleDownload
    })));
  }

} // see https://medium.com/@mweststrate/mobx-4-better-simpler-faster-smaller-c1fbc08008da


decorate(KeyPairCreateForm, {
  form: observable,
  keyPair: observable,
  keyPairsStore: computed,
  handleCreate: action,
  handleCancel: action,
  handleDownload: action
});
export default inject('keyPairsStore')(withRouter(observer(KeyPairCreateForm)));
//# sourceMappingURL=KeyPairCreateForm.js.map