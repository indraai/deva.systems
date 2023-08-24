// Copyright (c)2023 Quinn Michaels
// The Systems Deva manages the various @SYSTEMS in deva.world


const fs = require('fs');
const path = require('path');

const package = require('./package.json');
const info = {
  id: package.id,
  name: package.name,
  describe: package.description,
  version: package.version,
  url: package.homepage,
  dir: __dirname,
  git: package.repository.url,
  bugs: package.bugs.url,
  author: package.author,
  license: package.license,
  copyright: package.copyright,
};

const data_path = path.join(__dirname, 'data.json');
const {agent,vars} = require(data_path).DATA;

const Deva = require('@indra.ai/deva');
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
  onDone(data) {
    this.listen('devacore:question', this.func.sys_question);
    this.listen('devacore:answer', this.func.sys_answer);
    return Promise.resolve(data);
  },
});
module.exports = SYSTEMS
