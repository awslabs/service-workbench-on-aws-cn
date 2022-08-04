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
import { decorate, computed, action, observable, runInAction } from 'mobx';
import { observer, inject } from 'mobx-react';
import { withRouter } from 'react-router-dom';
import { Button, Modal } from 'semantic-ui-react';

import { displayError, displaySuccess } from '@amzn/base-ui/dist/helpers/notification';
import i18next from 'i18next';
import { initReactI18next, withTranslation } from 'react-i18next';

i18next.use(initReactI18next);

// expected props
// - keyPair (via prop)
// - keyPairsStore (via injection)
class KeyPairButtons extends React.Component {
  constructor(props) {
    super(props);
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

  handleDelete = async () => {
    this.processingButton = 'delete';
    try {
      const name = this.keyPair.name;
      const store = this.keyPairsStore;
      await store.deleteKeyPair(this.keyPair.id);
      displaySuccess(i18next.t('deleted', { ns: 'ssh', name }), i18next.t('success'));
    } catch (error) {
      displayError(error);
    } finally {
      runInAction(() => {
        this.processingButton = '';
      });
    }
  };

  render() {
    const processing = !!this.processingButton;

    return (
      <div>
        <Modal
          trigger={
            <Button floated="right" basic color="red" size="mini" className="mt1 mb1" loading={processing}>
              {i18next.t('delete')}
            </Button>
          }
          header={i18next.t('delete.header', { ns: 'ssh' })}
          content={i18next.t('delete.subheader', { ns: 'ssh' })}
          actions={[
            i18next.t('cancel'),
            { key: 'delete', content: i18next.t('delete'), negative: true, onClick: this.handleDelete },
          ]}
          size="mini"
        />
      </div>
    );
  }
}

// see https://medium.com/@mweststrate/mobx-4-better-simpler-faster-smaller-c1fbc08008da
decorate(KeyPairButtons, {
  keyPair: computed,
  keyPairsStore: computed,
  processingButton: observable,
  handleDelete: action,
});

export default withTranslation()(inject('keyPairsStore')(withRouter(observer(KeyPairButtons))));
