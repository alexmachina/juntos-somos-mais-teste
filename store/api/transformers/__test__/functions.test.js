import {
  transformGender,
  omitAge,
  addPhones,
  parsePhoneNumber,
  removePhoneAndCell,
  appendId,
  transformGenderAndOmitAge
} from "../functions";

jest.mock("shortid");
const shortid = require("shortid");
shortid.generate.mockImplementation(() => "abc123");

describe("API data transformations", () => {
  describe("transformGender", () => {
    it('Should return "M" when value "male" is passed', () => {
      const gender = transformGender("male");
      expect(gender).toEqual("M");
    });
    it('Should return "F" when value "female" is passed"', () => {
      const gender = transformGender("female");
      expect(gender).toEqual("F");
    });
    it("Should return the same value when another value is passed", () => {
      const gender = transformGender("any");
      expect(gender).toEqual("any");
    });
  });

  describe("omitAge", () => {
    it('Should return a new object without the "age" attribute', () => {
      const obj = { day: 1, age: 18 };
      expect(omitAge(obj)).toEqual({ day: 1 });
    });
  });

  describe("removePhoneAndCell", () => {
    it('Should return a new object without the "phone" and "cell" fields', () => {
      const customer = {
        fullName: "Alex Alonso",
        phone: "11-9999-9999",
        cell: "11-9999-9999"
      };

      expect(removePhoneAndCell(customer)).toEqual({ fullName: "Alex Alonso" });
    });
  });
  describe("addPhones", () => {
    it("Should add telephoneNumbers and mobileNumbers to the customer", () => {
      const obj = {
        cell: "(11) 94015-3018",
        phone: "(11) 9444-2321",
        name: "Johnny Sacks"
      };
      expect(addPhones(obj)).toEqual({
        name: "Johnny Sacks",
        telephoneNumbers: ["+551194442321"],
        mobileNumbers: ["+5511940153018"],
        cell: "(11) 94015-3018",
        phone: "(11) 9444-2321"
      });
    });
  });
  describe("appendId", () => {
    it("Should append an id to the object", () => {
      const obj = { a: "a", b: "b" };
      expect(appendId(obj)).toEqual({ id: "abc123", a: "a", b: "b" });
    });
  });
  describe("transformGenderAndOmitAge", () => {
    it("Should parse gender property and ommit age property from child objects", () => {
      const obj = {
        gender: "male",
        dob: { age: 18, foo: "foo" },
        registered: { at: "monday", age: 19 }
      };

      expect(transformGenderAndOmitAge(obj)).toEqual({
        gender: "M",
        dob: { foo: "foo" },
        registered: { at: "monday" }
      });
    });
  });
});
