/**
 * Copyright IBM Corp. 2014, 2020
 * SPDX-License-Identifier: MIT
 */

/**
 * This class emulates a failed authentication.
 */

import { reject } from 'rsvp';

import EmberObject from '@ember/object';

export default EmberObject.extend({

  open() {
    return reject("Dummy authentication failure");
  }

});
