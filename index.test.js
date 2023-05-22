// Copyright (c)2023 Quinn Michaels
// Solutions Deva test file

const {expect} = require('chai')
const SolutionsDeva = require('./index.js');

describe(SolutionsDeva.me.name, () => {
  beforeEach(() => {
    return SolutionsDeva.init()
  });
  it('Check the DEVA Object', () => {
    expect(SolutionsDeva).to.be.an('object');
    expect(SolutionsDeva).to.have.property('agent');
    expect(SolutionsDeva).to.have.property('vars');
    expect(SolutionsDeva).to.have.property('listeners');
    expect(SolutionsDeva).to.have.property('methods');
    expect(SolutionsDeva).to.have.property('modules');
  });
})
