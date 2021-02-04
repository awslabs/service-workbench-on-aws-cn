import React from 'react';
import _ from 'lodash';
import { decorate, computed, action } from 'mobx';
import { observer, inject } from 'mobx-react';
import { withRouter } from 'react-router-dom';
import { Container, Segment, Header, Icon, Button, Label } from 'semantic-ui-react';
import { gotoFn } from '@aws-ee/base-ui/dist/helpers/routing';
import { swallowError } from '@aws-ee/base-ui/dist/helpers/utils';
import { isStoreLoading, isStoreEmpty, isStoreNotEmpty, isStoreError } from '@aws-ee/base-ui/dist/models/BaseStore';
import ErrorBox from '@aws-ee/base-ui/dist/parts/helpers/ErrorBox';
import ProgressPlaceHolder from '@aws-ee/base-ui/dist/parts/helpers/BasicProgressPlaceholder';
import KeyPairCard from './KeyPairCard'; // expected props
// keyPairsStore (via injection)

class KeyPairsList extends React.Component {
  constructor(...args) {
    super(...args);

    this.handleCreateKeyPair = event => {
      event.preventDefault();
      event.stopPropagation();
      const goto = gotoFn(this);
      goto(`/key-pair-management/create`);
    };
  }

  componentDidMount() {
    window.scrollTo(0, 0);
    const store = this.keyPairsStore;
    swallowError(store.load());
  }

  get keyPairsStore() {
    return this.props.keyPairsStore;
  }

  render() {
    const store = this.keyPairsStore;
    let content = null;

    if (isStoreError(store)) {
      content = /*#__PURE__*/React.createElement(ErrorBox, {
        error: store.error,
        className: "p0"
      });
    } else if (isStoreLoading(store)) {
      content = /*#__PURE__*/React.createElement(ProgressPlaceHolder, {
        segmentCount: 1
      });
    } else if (isStoreEmpty(store)) {
      content = this.renderEmpty();
    } else if (isStoreNotEmpty(store)) {
      content = this.renderMain();
    } else {
      content = null;
    }

    return /*#__PURE__*/React.createElement(Container, {
      className: "mt3 animated fadeIn"
    }, this.renderTitle(), content);
  }

  renderMain() {
    const store = this.keyPairsStore;
    const list = store.list;
    return /*#__PURE__*/React.createElement("div", null, _.map(list, item => /*#__PURE__*/React.createElement(Segment, {
      className: "p3 mb4",
      clearing: true,
      key: item.id
    }, /*#__PURE__*/React.createElement(KeyPairCard, {
      keyPair: item
    }))));
  }

  renderEmpty() {
    return /*#__PURE__*/React.createElement(Segment, {
      placeholder: true
    }, /*#__PURE__*/React.createElement(Header, {
      icon: true,
      className: "color-grey"
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "terminal"
    }), "No SSH Keys", /*#__PURE__*/React.createElement(Header.Subheader, null, "To create an SSH key, click Create Key.")));
  }

  renderTitle() {
    return /*#__PURE__*/React.createElement("div", {
      className: "mb3 flex"
    }, /*#__PURE__*/React.createElement(Header, {
      as: "h3",
      className: "color-grey mt1 mb0 flex-auto"
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "key",
      className: "align-top"
    }), /*#__PURE__*/React.createElement(Header.Content, {
      className: "left-align"
    }, "SSH Keys ", this.renderTotal())), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Button, {
      color: "blue",
      size: "medium",
      basic: true,
      onClick: this.handleCreateKeyPair
    }, "Create Key")));
  }

  renderTotal() {
    const store = this.keyPairsStore;
    if (isStoreError(store) || isStoreLoading(store)) return null;
    return /*#__PURE__*/React.createElement(Label, {
      circular: true
    }, store.total);
  }

} // see https://medium.com/@mweststrate/mobx-4-better-simpler-faster-smaller-c1fbc08008da


decorate(KeyPairsList, {
  keyPairsStore: computed,
  handleCreateKeyPair: action
});
export default inject('keyPairsStore')(withRouter(observer(KeyPairsList)));
//# sourceMappingURL=KeyPairsList.js.map