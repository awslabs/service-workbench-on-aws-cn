import React from 'react';
import { decorate } from 'mobx';
import { observer, inject } from 'mobx-react';
import { withRouter } from 'react-router-dom';
import { Container, Breadcrumb, Segment } from 'semantic-ui-react';
import { gotoFn } from '@aws-ee/base-ui/dist/helpers/routing';
import KeyPairCreateForm from './parts/KeyPairCreateForm'; // expected props

class KeyPairCreate extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return /*#__PURE__*/React.createElement(Container, {
      className: "mt3 animated fadeIn"
    }, this.renderBreadcrumb(), this.renderForm());
  }

  renderForm() {
    const goto = gotoFn(this);
    return /*#__PURE__*/React.createElement(Segment, {
      clearing: true,
      className: "p3 mb3"
    }, /*#__PURE__*/React.createElement(KeyPairCreateForm, {
      onCancel: () => goto('/key-pair-management')
    }));
  }

  renderBreadcrumb() {
    const goto = gotoFn(this);
    return /*#__PURE__*/React.createElement(Breadcrumb, {
      className: "block mb3"
    }, /*#__PURE__*/React.createElement(Breadcrumb.Section, {
      link: true,
      onClick: () => goto('/key-pair-management')
    }, "SSH Keys"), /*#__PURE__*/React.createElement(Breadcrumb.Divider, {
      icon: "right angle"
    }), /*#__PURE__*/React.createElement(Breadcrumb.Section, {
      active: true
    }, "Create Key"));
  }

} // see https://medium.com/@mweststrate/mobx-4-better-simpler-faster-smaller-c1fbc08008da


decorate(KeyPairCreate, {});
export default inject()(withRouter(observer(KeyPairCreate)));
//# sourceMappingURL=KeyPairCreate.js.map