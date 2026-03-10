/**
 * Copyright IBM Corp. 2014, 2020
 * SPDX-License-Identifier: MIT
 */

export default function assert(message, test) {
  if (!test) {
    console.error(message); // eslint-disable-line
  }
}
