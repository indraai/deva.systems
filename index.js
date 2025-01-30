// Copyright (c)2025 Quinn Michaels
// The Systems Deva manages the various @SYSTEMS in deva.world

import Deva from '@indra.ai/deva';
import pkg from './package.json' with {type:'json'};

import data from './data.json' with {type:'json'};
const {agent,vars} = data.DATA;

// set the __dirname
import {dirname} from 'node:path';
import {fileURLToPath} from 'node:url';    
const __dirname = dirname(fileURLToPath(import.meta.url));

const info = {
  id: pkg.id,
  name: pkg.name,
  describe: pkg.description,
  version: pkg.version,
  url: pkg.homepage,
  dir: __dirname,
  git: pkg.repository.url,
  bugs: pkg.bugs.url,
  author: pkg.author,
  license: pkg.license,
  copyright: pkg.copyright,
};

const SYSTEMS = new Deva({
  info,
  agent,
  vars,
  utils: {
    translate(input) {return input.trim();},
    parse(input) {return input.trim();},
    process(input) {return input.trim();},
  },
  listeners: {},
  modules: {},
  deva: {},
  func: {
    sys_question(packet) {return;},
    sys_answer(packet) {return;},
  },
  methods: {},
  onReady(data, resolve) {
    this.prompt('ready');
    return resolve(data);
  },
  onError(err) {
    console.log('ERR', err);
  }
});
export default SYSTEMS
