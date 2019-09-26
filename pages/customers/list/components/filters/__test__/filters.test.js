import React from "react";
import Filters from "../";
import renderer from "react-test-renderer";

describe("Components", () => {
  describe("Filters", () => {
    it("Renders correctly", () => {
      const tree = renderer.create(<Filters />).toJSON();
      expect(tree).toMatchSnapshot();
    });
  });
});
