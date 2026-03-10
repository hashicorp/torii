/**
 * Copyright IBM Corp. 2014, 2020
 * SPDX-License-Identifier: MIT
 */

/**
 * This class emulates a successful authentication, returning
 * a dummy authorization object.
 */

import { Promise as EmberPromise } from 'rsvp';

import EmberObject from '@ember/object';

export default EmberObject.extend({

  open(authorization) {
    return EmberPromise.resolve(authorization);
  }

});
