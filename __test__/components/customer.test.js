import React from "react";
import Customers from "../../pages/customers/list";
import renderer from "react-test-renderer";

describe("Components", () => {
  describe("Customers", () => {
    it("Renders correctly", () => {
      const tree = renderer.create(<Customers />).toJSON();
      expect(tree).toMatchSnapshot();
    });
  });
});
