import React from "react";
import Filters from "../../pages/customers/list/components/filters";
import renderer from "react-test-renderer";

describe("Components", () => {
  describe("Filters", () => {
    it("Renders correctly", () => {
      const tree = renderer.create(<Filters />).toJSON();
      expect(tree).toMatchSnapshot();
    });
  });
});
