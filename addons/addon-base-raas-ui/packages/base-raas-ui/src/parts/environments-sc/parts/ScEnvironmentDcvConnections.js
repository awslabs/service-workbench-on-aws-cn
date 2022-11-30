import _ from 'lodash';
import React from 'react';
import { decorate, computed } from 'mobx';
import { observer, inject } from 'mobx-react';
import { withRouter } from 'react-router-dom';
import { Segment, Icon, Header, Table, List } from 'semantic-ui-react';

import ScEnvironmentDcvConnectionRow from './ScEnvironmentDcvConnectionRow';

// expected props
// - environment (via prop)
class ScEnvironmentDcvConnections extends React.Component {
  get environment() {
    return this.props.scEnvironment;
  }

  get connections() {
    const connections = this.environment.getConnections(item => item.scheme === 'dcv');

    return connections;
  }

  render() {
    const env = this.environment;
    const state = env.state;
    const canConnect = state.canConnect;
    const empty = _.isEmpty(this.connections);

    if (!canConnect) return null;
    let content = null;

    if (empty) {
      content = this.renderEmpty();
    } else {
      content = this.renderConnections();
    }

    return <div className="fadeIn animated">{content}</div>;
  }

  renderConnections() {
    const env = this.environment;
    const connections = this.connections;

    return (
      <div className="mt2 mb2 fadeIn animated">
        <Table celled>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell colSpan="1">DCV Connections</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {_.map(connections, item => (
              <ScEnvironmentDcvConnectionRow key={item.id} scEnvironment={env} connectionId={item.id} />
            ))}
          </Table.Body>
        </Table>
      </div>
    );
  }

  renderEmpty() {
    return (
      <Segment placeholder className="mt2 mb2">
        <Header icon className="color-grey">
          <Icon name="linkify" />
          No DCV Connections
          <Header.Subheader>This workspace does not have any defined DCV connections.</Header.Subheader>
        </Header>
      </Segment>
    );
  }
}

decorate(ScEnvironmentDcvConnections, {
  environment: computed,
  connections: computed,
});

export default inject()(withRouter(observer(ScEnvironmentDcvConnections)));
