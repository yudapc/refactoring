"use strict";
const chai = require("chai");
const expect = chai.expect;
const operation = require("../src/render-first");

describe("#lagecy code", () => {
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
