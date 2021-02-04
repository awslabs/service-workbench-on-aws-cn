/* eslint-disable max-classes-per-file */
import React from 'react';
import { decorate, computed } from 'mobx';
import { observer, inject, Observer } from 'mobx-react';
import { withRouter } from 'react-router-dom';
import { Header, Label, Popup, TextArea, Tab, Form, Icon, Segment } from 'semantic-ui-react';
import TimeAgo from 'react-timeago';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import By from '@aws-ee/base-ui/dist/parts/helpers/By';
import { displaySuccess } from '@aws-ee/base-ui/dist/helpers/notification';
import KeyPairButtons from './parts/KeyPairButtons'; // This component is used with the TabPane to replace the default Segment wrapper since
// we don't want to display the border.
// eslint-disable-next-line react/prefer-stateless-function

class TabPaneWrapper extends React.Component {
  render() {
    return /*#__PURE__*/React.createElement(React.Fragment, null, this.props.children);
  }

} // expected props
// - keyPair (via prop)


class KeyPairCard extends React.Component {
  get keyPair() {
    return this.props.keyPair;
  }

  render() {
    const keyPair = this.keyPair;
    return /*#__PURE__*/React.createElement(React.Fragment, null, this.renderStatus(keyPair), this.renderTitle(keyPair), keyPair.desc || 'No description was provided.', this.renderTabs(keyPair));
  }

  renderButtons(keyPair) {
    return /*#__PURE__*/React.createElement(KeyPairButtons, {
      keyPair: keyPair
    });
  }

  renderTabs(keyPair) {
    const panes = [{
      menuItem: 'Public Key',
      render: () => /*#__PURE__*/React.createElement(Tab.Pane, {
        attached: false,
        key: "public-key",
        as: TabPaneWrapper
      }, /*#__PURE__*/React.createElement(Observer, null, () => this.renderPublicKey(keyPair)))
    }, {
      menuItem: 'Private Key',
      render: () => /*#__PURE__*/React.createElement(Tab.Pane, {
        attached: false,
        key: "private-key",
        as: TabPaneWrapper
      }, /*#__PURE__*/React.createElement(Observer, null, () => this.renderPrivateKey()))
    }];
    return /*#__PURE__*/React.createElement(Tab, {
      className: "mt2",
      menu: {
        secondary: true,
        pointing: true
      },
      renderActiveOnly: true,
      panes: panes
    });
  }

  renderDesc(keyPair) {
    return /*#__PURE__*/React.createElement("p", null, keyPair.desc || 'No description was provided.');
  }

  renderPublicKey(keyPair) {
    return /*#__PURE__*/React.createElement("div", {
      className: "mt2"
    }, /*#__PURE__*/React.createElement(Form, {
      className: "flex"
    }, /*#__PURE__*/React.createElement(TextArea, {
      className: "flex-auto",
      rows: 10,
      value: keyPair.publicKey
    }), /*#__PURE__*/React.createElement(Popup, {
      content: "Copy",
      trigger: /*#__PURE__*/React.createElement(CopyToClipboard, {
        className: "ml2 mr0 mt2",
        text: keyPair.publicKey,
        style: {
          cursor: 'pointer'
        },
        onCopy: () => displaySuccess('Copied to clipboard', 'Done')
      }, /*#__PURE__*/React.createElement(Icon, {
        name: "copy outline",
        size: "large"
      }))
    })));
  }

  renderPrivateKey() {
    return /*#__PURE__*/React.createElement(Segment, {
      placeholder: true
    }, /*#__PURE__*/React.createElement(Header, {
      icon: true,
      className: "color-grey"
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "key"
    }), "Not Available", /*#__PURE__*/React.createElement(Header.Subheader, null, "The private key is only available for download at the time of creating a key. This application does not store the private key.")));
  }

  renderStatus(keyPair) {
    const status = keyPair.statusInfo;
    return /*#__PURE__*/React.createElement("div", {
      style: {
        cursor: 'default'
      }
    }, /*#__PURE__*/React.createElement(Popup, {
      trigger: /*#__PURE__*/React.createElement(Label, {
        attached: "top left",
        size: "mini",
        color: status.color
      }, status.display)
    }, status.tip));
  }

  renderTitle(keyPair) {
    return /*#__PURE__*/React.createElement("div", {
      className: "clearfix flex"
    }, /*#__PURE__*/React.createElement(Header, {
      as: "h3",
      className: "mt1 flex-auto"
    }, keyPair.name, /*#__PURE__*/React.createElement(Header.Subheader, null, /*#__PURE__*/React.createElement("span", {
      className: "fs-8 color-grey"
    }, "Created ", /*#__PURE__*/React.createElement(TimeAgo, {
      date: keyPair.createdAt,
      className: "mr2"
    }), ' ', /*#__PURE__*/React.createElement(By, {
      uid: keyPair.createdBy,
      className: "mr2"
    })), /*#__PURE__*/React.createElement("span", {
      className: "fs-8 color-grey mr2"
    }, " ", keyPair.id))), /*#__PURE__*/React.createElement(KeyPairButtons, {
      keyPair: keyPair
    }));
  }

} // see https://medium.com/@mweststrate/mobx-4-better-simpler-faster-smaller-c1fbc08008da


decorate(KeyPairCard, {
  keyPair: computed
});
export default inject()(withRouter(observer(KeyPairCard)));
//# sourceMappingURL=KeyPairCard.js.map