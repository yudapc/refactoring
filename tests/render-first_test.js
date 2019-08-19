"use strict";
const chai = require("chai");
const expect = chai.expect;
const operation = require("../src/render-first");
const seed = require("./seeds/product");

describe("#lagecy code", () => {
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
      data.status = "draft";
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
      data.status = "unpublished";
      data.price = 0;
      expect(operation.renderUnpublishedProduct(data)).not.to.contains(
        "samsung"
      );
    });
  });
});
