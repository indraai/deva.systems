"use strict";
// Copyright ©2025 Quinn A Michaels; All rights reserved. 
// Legal Signature Required For Lawful Use.
// Distributed under VLA:60252329136616836513 LICENSE.md

// Systems Deva test file

const {expect} = require('chai')
const SystemsDeva = require('./index.js');

describe(SystemsDeva.me.name, () => {
  beforeEach(() => {
    return SystemsDeva.init()
  });
  it('Check the DEVA Object', () => {
    expect(SystemsDeva).to.be.an('object');
    expect(SystemsDeva).to.have.property('agent');
    expect(SystemsDeva).to.have.property('vars');
    expect(SystemsDeva).to.have.property('listeners');
    expect(SystemsDeva).to.have.property('methods');
    expect(SystemsDeva).to.have.property('modules');
  });
})
