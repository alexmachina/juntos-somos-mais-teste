import React from "react";
import Results from "../../pages/customers/list/components/results/index";
import renderer from "react-test-renderer";

describe("Components", () => {
  describe("Results", () => {
    it("Renders correctly", () => {
      const tree = renderer.create(<Results />).toJSON();
      expect(tree).toMatchSnapshot();
    });
  });
});
