/**
 * Copyright IBM Corp. 2014, 2020
 * SPDX-License-Identifier: MIT
 */

import { computed } from '@ember/object';

function requiredProperty(){
  return computed(function(key){
    throw new Error("Definition of property "+key+" by a subclass is required.");
  });
}

export default requiredProperty;
