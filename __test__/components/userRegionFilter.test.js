import React from "react";
import UserRegionFilter from "../../pages/customers/list/components/filters/userRegionFilter";
import renderer from "react-test-renderer";

describe("Components", () => {
  describe("UserRegionFilter", () => {
    it("Renders correctly", () => {
      const tree = renderer.create(<UserRegionFilter />).toJSON();
      expect(tree).toMatchSnapshot();
    });
  });
});
