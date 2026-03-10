/**
 * Copyright IBM Corp. 2014, 2020
 * SPDX-License-Identifier: MIT
 */

import { helper } from '@ember/component/helper';
import { htmlSafe } from '@ember/string';

export function inspectObject([obj]/*, hash*/) {
  return htmlSafe(JSON.stringify(obj));
}

export default helper(inspectObject);
