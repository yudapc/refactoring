"use strict";
const chai = require("chai");
const expect = chai.expect;
const operation = require("../src/render-second");

describe("#refactoring", () => {
  describe(".isActive", () => {
    it("should return active true", () => {
      const data = { isActive: true };
      expect(operation.isActive(data)).to.eql(true);
    });
    it("should return active false", () => {
      const data = { isActive: false };
      expect(operation.isActive(data)).to.eql(false);
    });
  });
  describe(".hasDiscount", () => {
    it("should return hasDiscount true", () => {
      const data = { discount: 12 };
      expect(operation.hasDiscount(data)).to.eql(true);
    });
    it("should return hasDiscount false", () => {
      const data = { discount: 0 };
      expect(operation.hasDiscount(data)).to.eql(false);
    });
  });
  describe(".productPublished", () => {
    it("should return productPublished true", () => {
      const data = { status: "published" };
      expect(operation.productPublished(data)).to.eql(true);
    });
    it("should return productPublished false", () => {
      const data = { status: "draf" };
      expect(operation.productPublished(data)).to.eql(false);
    });
  });
  describe(".priceNotZero", () => {
    it("should return priceNotZero true", () => {
      const data = { price: 12000 };
      expect(operation.priceNotZero(data)).to.eql(true);
    });
    it("should return priceNotZero false", () => {
      const data = { price: 0 };
      expect(operation.priceNotZero(data)).to.eql(false);
    });
  });
  describe(".showData", () => {
    it("should return showData true", () => {
      const data = {
        isActive: true,
        discount: 5,
        status: "published",
        price: 12000
      };
      expect(operation.showData(data)).to.eql(true);
    });
    it("should return showData false", () => {
      const data = {
        isActive: true,
        discount: 5,
        status: "published",
        price: 0
      };
      expect(operation.showData(data)).to.eql(false);
    });
  });
  describe(".render", () => {
    it("should return render name", () => {
      const data = {
        name: "HP samsung",
        isActive: true,
        discount: 5,
        status: "published",
        price: 12000
      };
      expect(operation.render(data)).to.contains("samsung");
    });
    it("should return note render name", () => {
      const data = {
        name: "HP samsung",
        isActive: true,
        discount: 5,
        status: "published",
        price: 0
      };
      expect(operation.render(data)).not.to.contains("samsung");
    });
  });
});
