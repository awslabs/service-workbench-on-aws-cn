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
import _ from 'lodash';
import React from 'react';
import { decorate, computed, action, runInAction, observable } from 'mobx';
import { observer, inject } from 'mobx-react';
import { withRouter } from 'react-router-dom';
import { Segment, Icon, Button, Header, Table } from 'semantic-ui-react';

import { displayError } from '@amzn/base-ui/dist/helpers/notification';
import i18next from 'i18next';
import { initReactI18next, withTranslation } from 'react-i18next';

i18next.use(initReactI18next);
const openWindow = (url, windowFeatures) => {
    return window.open(url, '_blank', windowFeatures);
};

class ScEnvironmentUbuntuDcvConnections extends React.Component {
    constructor(props) {
        super(props);
        runInAction(() => {
            this.processingId = '';
            this.timeout = 10;
        });
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
        const isUbuntuDcv = scheme => scheme === 'ubuntudcv';
        const connections = this.environment.getConnections(item => isUbuntuDcv(item.scheme));
        return connections;
    }

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
                    const urlObj = await store.createSSMConnectionUrl(id);
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

    handleDcvConnect = id =>
        action(async () => {
            const store = this.getConnectionStore();
            const connections = this.environment.connections;
            const connectInfo = _.find(connections, ['id', id]) || {};
            let dcvUrl = connectInfo.dcvUrl;

            runInAction(() => {
                this.processingId = id;
            });

            try {
                if (dcvUrl) {
                    openWindow(dcvUrl, 'noopener,noreferrer');
                } else {
                    const dcvUrlObj = await store.createUbuntuDcvConnectionUrl(id);
                    dcvUrl = dcvUrlObj.url;
                    if (dcvUrl) {
                        const newTab = openWindow('about:blank');
                        newTab.location = dcvUrl;
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

    render() {
        const env = this.environment;
        const state = env.state;
        const canConnect = state.canConnect;
        const connections = this.connections;
        if (!canConnect) return null;

        return (
            <div className="mt2 mb2">
                <Table celled>
                    <Table.Header>
                        <Table.Row key={env.id}>
                            <Table.HeaderCell colSpan="1">{i18next.t('connection.ssm', { ns: 'workspaces' })}</Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>
                    <Table.Body>{this.renderBody(connections)}</Table.Body>
                </Table>
                <Table celled>
                    <Table.Header>
                        <Table.Row key={env.id}>
                            <Table.HeaderCell colSpan="1">DCV to EC2 instance</Table.HeaderCell>
                        </Table.Row>
                        <Table.Row key={env.id}>
                            <Table.Cell className="p3">
                                <b>
                                    Your Ubuntu workspace can be accessed through DCV. \n
                                </b>
                                <b>
                                    Username: "ubuntu"
                                </b>
                                <b>
                                    Password: Please get password from Admin or Access to EC2 Instance to set password by yourself. Command: "sudo passwd ubuntu"
                                </b>
                            </Table.Cell>
                        </Table.Row>
                    </Table.Header>
                    <Table.Body>{this.renderDcvBody(connections)}</Table.Body>
                </Table>
            </div >
        );
    }

    renderBody(connections) {
        const processingId = this.processingId;
        const isDisabled = id => processingId !== id && !_.isEmpty(processingId);
        const isLoading = id => processingId === id;
        return (
            <>
                {_.map(connections, item => (
                    <>
                        <Table.Row key={item.id}>
                            <Table.Cell className="clearfix">
                                <Button
                                    floated="right"
                                    size="mini"
                                    primary
                                    disabled={isDisabled(item.id)}
                                    loading={isLoading(item.id)}
                                    onClick={this.handleConnect(item.id)}
                                    data-testid="connect-to-workspace-button"
                                >
                                    {i18next.t('connect')}
                                </Button>
                                <div className="mt1">{item.name || 'Connect'}</div>
                            </Table.Cell>
                        </Table.Row>
                    </>
                ))}
            </>
        );
    }

    renderDcvBody(connections) {
        const processingId = this.processingId;
        const isDisabled = id => processingId !== id && !_.isEmpty(processingId);
        const isLoading = id => processingId === id;
        return (
            <>
                {_.map(connections, item => (
                    <>
                        <Table.Row key={item.id}>
                            <Table.Cell className="clearfix">
                                <Button
                                    floated="right"
                                    size="mini"
                                    primary
                                    disabled={isDisabled(item.id)}
                                    loading={isLoading(item.id)}
                                    onClick={this.handleDcvConnect(item.id)}
                                    data-testid="connect-to-workspace-button"
                                >
                                    {i18next.t('connect')}
                                </Button>
                                <div className="mt1">{item.name || 'Connect'}</div>
                            </Table.Cell>
                        </Table.Row>
                    </>
                ))}
            </>
        );
    }

    renderEmpty() {
        return (
            <Segment placeholder className="mt2 mb2">
                <Header icon className="color-grey">
                    <Icon name="linkify" />
                    No SSM Connections
                    <Header.Subheader>This workspace does not have any defined SSM connections.</Header.Subheader>
                </Header>
            </Segment>
        );
    }
}

decorate(ScEnvironmentUbuntuDcvConnections, {
    envsStore: computed,
    environment: computed,
    connections: computed,
    processingId: observable,
});

export default withTranslation()(inject('scEnvironmentsStore')(withRouter(observer(ScEnvironmentUbuntuDcvConnections))));
