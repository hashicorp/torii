/**
 * Copyright IBM Corp. 2014, 2020
 * SPDX-License-Identifier: MIT
 */

import { run } from '@ember/runloop';

export default function destroyApp(application) {
  run(application, 'destroy');
}
