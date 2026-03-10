/**
 * Copyright IBM Corp. 2014, 2020
 * SPDX-License-Identifier: MIT
 */

import { onLoad } from '@ember/application';

export default function(instanceInitializer) {
  onLoad('Ember.Application', function(Application){
    Application.instanceInitializer(instanceInitializer);
  });
}
