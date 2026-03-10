/**
 * Copyright IBM Corp. 2014, 2020
 * SPDX-License-Identifier: MIT
 */

export default function getRouterInstance(appInstance) {
  // backwards compat for Ember < 2.0
  return appInstance.get('router') || appInstance.lookup('router:main');
}
