import React from "react";
import UserTypeFilter from "../";
import renderer from "react-test-renderer";

describe("Components", () => {
  describe("UserTypeFilter", () => {
    it("Renders correctly", () => {
      const tree = renderer.create(<UserTypeFilter />).toJSON();
      expect(tree).toMatchSnapshot();
    });
  });
});