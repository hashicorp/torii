/**
 * Copyright IBM Corp. 2014, 2020
 * SPDX-License-Identifier: MIT
 */

import Resolver from '../../resolver';
import config from '../../config/environment';

const resolver = Resolver.create();

resolver.namespace = {
  modulePrefix: config.modulePrefix,
  podModulePrefix: config.podModulePrefix
};

export default resolver;
