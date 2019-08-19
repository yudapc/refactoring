"use strict";
const chai = require("chai");
const expect = chai.expect;
const operation = require("../src/render-second");
const seed = require("./seeds/product");

describe("#refactoring", () => {
  describe(".isActive", () => {
    it("should return active true", () => {
      const data = { ...seed.product };
      expect(operation.isActive(data.isActive)).to.eql(true);
    });
    it("should return active false", () => {
      const data = { ...seed.product };
      data.isActive = false;
      expect(operation.isActive(data.isActive)).to.eql(false);
    });
  });
  describe(".hasDiscount", () => {
    it("should return hasDiscount true", () => {
      const data = { ...seed.product };
      expect(operation.hasDiscount(data.discount)).to.eql(true);
    });
    it("should return hasDiscount false", () => {
      const data = { ...seed.product };
      data.discount = 0;
      expect(operation.hasDiscount(data.discount)).to.eql(false);
    });
  });
  describe(".productPublished", () => {
    it("should return productPublished true", () => {
      const data = { ...seed.product };
      expect(operation.productPublished(data.status)).to.eql(true);
    });
    it("should return productPublished false", () => {
      const data = { ...seed.product };
      data.status = "draft";
      expect(operation.productPublished(data.status)).to.eql(false);
    });
  });
  describe(".productDraft", () => {
    it("should return productDraft true", () => {
      const data = { ...seed.product };
      data.status = "draft";
      expect(operation.productDraft(data.status)).to.eql(true);
    });
    it("should return productDraft false", () => {
      const data = { ...seed.product };
      data.status = "published";
      expect(operation.productDraft(data.status)).to.eql(false);
    });
  });
  describe(".productUnPublished", () => {
    it("should return productUnPublished true", () => {
      const data = { ...seed.product };
      data.status = "unpublished";
      expect(operation.productUnPublished(data.status)).to.eql(true);
    });
    it("should return productUnPublished false", () => {
      const data = { ...seed.product };
      data.status = "draft";
      expect(operation.productUnPublished(data.status)).to.eql(false);
    });
  });
  describe(".priceNotZero", () => {
    it("should return priceNotZero true", () => {
      const data = { ...seed.product };
      expect(operation.priceNotZero(data.price)).to.eql(true);
    });
    it("should return priceNotZero false", () => {
      const data = { ...seed.product };
      data.price = 0;
      expect(operation.priceNotZero(data.price)).to.eql(false);
    });
  });
  describe(".showData", () => {
    it("should return showData true", () => {
      const data = { ...seed.product };
      expect(operation.showData(data)).to.eql(true);
    });
    it("should return showData false", () => {
      const data = { ...seed.product };
      data.price = 0;
      expect(operation.showData(data)).to.eql(false);
    });
  });
  describe(".renderDefault", () => {
    it("should return empty string", () => {
      expect(operation.renderDefault()).to.eql("");
    });
  });
  describe(".render", () => {
    it("should return render name", () => {
      const data = { ...seed.product };
      expect(operation.render(data)).to.contains("samsung");
    });
    it("should return note render name", () => {
      const data = { ...seed.product };
      data.price = 0;
      expect(operation.render(data)).not.to.contains("samsung");
    });
  });
  describe(".renderDraftProduct", () => {
    it("should return renderDraftProduct name", () => {
      const data = { ...seed.product };
      data.status = "draft";
      expect(operation.renderDraftProduct(data)).to.contains("samsung");
    });
    it("should return note renderDraftProduct name", () => {
      const data = { ...seed.product };
      data.status = "published";
      data.price = 0;
      expect(operation.renderDraftProduct(data)).not.to.contains("samsung");
    });
  });
  describe(".renderUnpublishedProduct", () => {
    it("should return renderUnpublishedProduct name", () => {
      const data = { ...seed.product };
      data.status = "unpublished";
      expect(operation.renderUnpublishedProduct(data)).to.contains("samsung");
    });
    it("should return note renderUnpublishedProduct name", () => {
      const data = { ...seed.product };
      data.status = "published";
      data.price = 0;
      expect(operation.renderUnpublishedProduct(data)).not.to.contains(
        "samsung"
      );
    });
  });
});
