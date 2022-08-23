/*
 *  Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
 *
 *  Licensed under the Apache License, Version 2.0 (the "License").
 *  You may not use this file except in compliance with the License.
 *  A copy of the License is located at
 *
 *  http://aws.amazon.com/apache2.0
 *
 *  or in the "license" file accompanying this file. This file is distributed
 *  on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either
 *  express or implied. See the License for the specific language governing
 *  permissions and limitations under the License.
 */

import React from 'react';
import { decorate, computed } from 'mobx';
import { inject, observer } from 'mobx-react';
import { getEnv } from 'mobx-state-tree';
import { Switch, Redirect, withRouter } from 'react-router-dom';

import i18next from 'i18next';
import { initReactI18next, withTranslation } from 'react-i18next';
import withAuth from './withAuth';
import { getRoutes, getMenuItems, getDefaultRouteLocation } from './helpers/plugins-util';
import MainLayout from './parts/MainLayout';

i18next.use(initReactI18next);

// expected props
// - app model (via injection)
// - location (from react router)
class App extends React.Component {
  get appContext() {
    return getEnv(this.props.app) || {};
  }

  getRoutes() {
    const { location } = this.props;
    const appContext = this.appContext;
    return getRoutes({ location, appContext });
  }

  getMenuItems() {
    const { location } = this.props;
    const appContext = this.appContext;
    return getMenuItems({ location, appContext });
  }

  getDefaultRouteLocation() {
    // See https://reacttraining.com/react-router/web/api/withRouter
    const { location } = this.props;
    const appContext = this.appContext;

    return getDefaultRouteLocation({ location, appContext });
  }

  renderApp() {
    const defaultLocation = this.getDefaultRouteLocation();
    const menuItems = this.getMenuItems();
    Object.keys(menuItems).forEach(i => {
      const title = i18next.t(menuItems[i].title, { ns: 'sidebar' });
      const parts = title.split(' ');
      for (let j = parts.length - 1; j >= 1; j -= 1) {
        parts.splice(j, 0, <br />);
      }
      menuItems[i].title = <>{parts}</>;
    });
    return (
      <MainLayout menuItems={menuItems}>
        <Switch>
          <Redirect exact from="/" to={defaultLocation} />
          {this.getRoutes()}
        </Switch>
      </MainLayout>
    );
  }

  render() {
    return this.renderApp();
  }
}

// see https://medium.com/@mweststrate/mobx-4-better-simpler-faster-smaller-c1fbc08008da
decorate(App, {
  appContext: computed,
});

export default withTranslation()(withAuth(inject('app', 'userStore')(withRouter(observer(App)))));
