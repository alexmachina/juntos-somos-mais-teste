import React from "react";
import ClientCard from "../../pages/customers/list/components/results/components/clientCard";
import renderer from "react-test-renderer";

describe("Components", () => {
  describe("ClientCard", () => {
    it("Renders correctly", () => {
      const tree = renderer.create(<ClientCard />).toJSON();
      expect(tree).toMatchSnapshot();
    });
  });
});
