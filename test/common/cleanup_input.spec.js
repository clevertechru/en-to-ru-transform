/* global describe, it */
const { expect } = require('chai')
const cleanup = require('../../common/cleanup')

describe('Common', () => {
  describe('cleanup input', () => {
    it('should return empty string when parameters are empty', () => {
      expect(cleanup()).to.equal('')
      expect(cleanup(null)).to.equal('')
    })
    it('should return text w/o numbers', () => {
      expect(cleanup('Gkbnrf321321 323213 33432 Gkbnrf')).to.equal('Gkbnrf Gkbnrf')
    })
  })
})