import React from "react";
import Controls from "../";
import renderer from "react-test-renderer";

describe("Components", () => {
  describe("Controls", () => {
    it("Renders correctly", () => {
      const tree = renderer.create(<Controls />).toJSON();
      expect(tree).toMatchSnapshot();
    });
  });
});
