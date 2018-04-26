/* global describe, it */
const { expect } = require('chai')
const transform = require('../../common/transform')

describe('Common', () => {
  describe('translit to cyrillic', () => {
    it('should return empty string when parameters are empty', () => {
      expect(transform()).to.equal('')
      expect(transform(null)).to.equal('')
    })
    it('should return cyrillic when first parameter en', () => {
      expect(transform('gkbnrf')).to.equal('плитка')
    })
    it('should return cyrillic when first parameter en', () => {
      expect(transform('gkbnrf gkbnrf')).to.equal('плитка плитка')
    })
    it('should return cyrillic when first parameter en', () => {
      expect(transform('Gkbnrf')).to.equal('Плитка')
    })
    it('should return cyrillic when first parameter en', () => {
      expect(transform('Gkbnrf Gkbnrf')).to.equal('Плитка Плитка')
    })
  })

  describe('cyrillic to translit', () => {
    it('should return translit when first parameter cyrillic', () => {
      expect(transform('вучеук')).to.equal('dexter')
    })
    it('should return translit when first parameter cyrillic', () => {
      expect(transform('вучеук вучеук')).to.equal('dexter dexter')
    })
    it('should return translit when first parameter cyrillic', () => {
      expect(transform('Вучеук')).to.equal('Dexter')
    })
    it('should return translit when first parameter cyrillic', () => {
      expect(transform('Вучеук Вучеук')).to.equal('Dexter Dexter')
    })
  })
})