/**
 * Copyright IBM Corp. 2014, 2020
 * SPDX-License-Identifier: MIT
 */

export default function lookup(app, key) {
  return app.__container__.lookup(key);
}
