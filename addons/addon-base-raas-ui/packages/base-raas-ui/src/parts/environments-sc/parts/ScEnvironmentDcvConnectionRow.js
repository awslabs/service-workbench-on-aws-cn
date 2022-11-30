import _ from 'lodash';
import React from 'react';
import { decorate, computed, action, runInAction, observable } from 'mobx';
import { observer, inject } from 'mobx-react';
import { withRouter } from 'react-router-dom';
import { Button, Table, List, Label } from 'semantic-ui-react';

import { displayError } from '@amzn/base-ui/dist/helpers/notification';

import i18next from 'i18next';
import { initReactI18next, withTranslation } from 'react-i18next';
import CopyToClipboard from '../../helpers/CopyToClipboard';

i18next.use(initReactI18next);
const openWindow = (url, windowFeatures) => {
  return window.open(url, '_blank', windowFeatures);
};

class ScEnvironmentDcvConnectionRow extends React.Component {
  constructor(props) {
    super(props);
    runInAction(() => {

      this.windowsDcvInfo = undefined;
      this.processingGetInfo = false;
      this.processingGetConnection = false;
      this.showPassword = false;
      this.processingId = undefined;
    });
  }

  get isAppStreamEnabled() {
    return process.env.REACT_APP_IS_APP_STREAM_ENABLED === 'true';
  }

  get environment() {
    return this.props.scEnvironment;
  }

  get envsStore() {
    return this.props.scEnvironmentsStore;
  }

  getConnectionStore() {
    return this.envsStore.getScEnvConnectionStore(this.environment.id);
  }

  get connections() {
    const connections = this.environment.getConnections(item => item.scheme === 'dcv');

    return connections;
  }

  get connection() {
    const id = this.connectionId;
    const connections = this.connections;

    return _.find(connections, ['id', id]) || {};
  }

  get connectionId() {
    return this.props.connectionId;
  }

  get networkInterfaces() {
    const entries = _.get(this.windowsDcvInfo, 'networkInterfaces');
    if (_.isEmpty(entries)) return [];

    const result = [];
    _.forEach(entries, item => {
      if (item.publicDnsName) result.push({ value: item.publicDnsName, type: 'dns', scope: 'public', info: 'Public' });
      if (item.privateIp) result.push({ value: item.privateIp, type: 'ip', scope: 'private', info: 'Private' });
    });

    return result;
  }

  handleGetInfo = async () => {
    const store = this.getConnectionStore();
    const connectionId = this.connectionId;

    runInAction(() => {
      this.windowsDcvInfo = undefined;
      this.showPassword = false;
      this.processingGetInfo = true;
    });

    try {
      const result = await store.getWindowsDcvInfo(connectionId);
      runInAction(() => {
        this.windowsDcvInfo = result || {};
      });
    } catch (error) {
      displayError(error);
    } finally {
      runInAction(() => {
        this.processingGetInfo = false;
      });
    }
  };

  handleConnect = id =>
    action(async () => {
      const store = this.getConnectionStore();
      const connections = this.environment.connections;
      const connectInfo = _.find(connections, ['id', id]) || {};
      let url = connectInfo.url;

      runInAction(() => {
        this.processingId = id;
      });

      try {
        if (url) {
          openWindow(url, 'noopener,noreferrer');
        } else {
          const urlObj = await store.createDcvConnectionUrl(id);
          url = urlObj.url;

          if (url) {
            const newTab = openWindow('about:blank');
            newTab.location = url;
          }
        }
      } catch (error) {
        displayError(error);
      } finally {
        runInAction(() => {
          this.processingId = '';
        });
      }
    });

  toggleShowPassword = () => {
    this.showPassword = !this.showPassword;
  };

  render() {
    const item = this.connection;
    const windowsDcvInfo = this.windowsDcvInfo;
    const processing = this.processingGetInfo;

    const rows = [
      <Table.Row key={`{item.id}__1`}>
        <Table.Cell className="clearfix">
          <Button
            data-testid="get-password-button"
            floated="right"
            size="mini"
            primary
            loading={processing}
            onClick={this.handleGetInfo}
          >
            Get Password
          </Button>
        </Table.Cell>
      </Table.Row>,
    ];

    if (windowsDcvInfo) {
      rows.push(this.renderExpanded());
    }

    return rows;
  }

  renderExpanded() {
    const item = this.connection;
    const windowsDcvInfo = this.windowsDcvInfo;
    const interfaces = this.networkInterfaces;
    const username = 'Administrator';
    const password = windowsDcvInfo.password;
    const showPassword = this.showPassword;
    const connectionId = this.connectionId;
    const moreThanOne = _.size(interfaces) > 1;

    return (
      <>
        <Table.Row key={`${item.id}__3`}>
          <Table.Cell className="p3">
            <b>
              Your Windows workspace can be accessed via an DCV client by using the Password and Connect button below.
            </b>
            <List bulleted>
              <List.Item>
                The username and password:
                <List>
                  <List.Item className="flex">
                    {this.renderUsernameLabel(username)}
                    <CopyToClipboard text={username} />
                  </List.Item>
                  <List.Item className="flex">
                    {this.renderPasswordLabel(password)}
                    <Button className="ml2" basic size="mini" onClick={this.toggleShowPassword}>
                      {showPassword ? 'Hide' : 'Show'}
                    </Button>
                    <CopyToClipboard text={password} />
                  </List.Item>
                </List>
              </List.Item>
            </List>
          </Table.Cell>
        </Table.Row>

        {windowsDcvInfo && (
          <Table.Row>
            <Table.Cell>
              <Button
                primary
                size="mini"
                onClick={this.handleConnect(connectionId)}
                floated="right"
                disabled={this.processingId}
                loading={this.processingGetConnection}
                data-testid="connect-to-workspace-button"
              >
                Connect
              </Button>
            </Table.Cell>
          </Table.Row>
        )}
      </>
    );
  }

  renderPasswordLabel(password) {
    const showPassword = this.showPassword;
    return (
      <Label>
        Password
        <Label.Detail>{showPassword ? password : '****************'}</Label.Detail>
      </Label>
    );
  }

  renderUsernameLabel(username) {
    return (
      <Label>
        Username
        <Label.Detail>{username}</Label.Detail>
      </Label>
    );
  }
}

decorate(ScEnvironmentDcvConnectionRow, {
  envsStore: computed,
  environment: computed,
  connections: computed,
  connection: computed,
  connectionId: computed,
  networkInterfaces: computed,
  processingId: observable,
  windowsDcvInfo: observable,
  processingGetInfo: observable,
  processingGetConnection: observable,
  showPassword: observable,
  handleGetInfo: action,
  toggleShowPassword: action,
});

export default withTranslation()(inject('scEnvironmentsStore')(withRouter(observer(ScEnvironmentDcvConnectionRow))));
