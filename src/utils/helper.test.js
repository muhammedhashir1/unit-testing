import { describe, it, expect } from "vitest";
import { USER_API, add, fetchUser, isAuthenticated, languages, reverseString, userDetails } from "./helper";

describe("add function", () => {
  it("returns 1+1 = 2", () => {
    expect(add(1, 1)).toBe(2);
  });
});

describe("reverseString()", () => {
  it("check if string reverse properly", () => {
    expect(reverseString("debug")).toBe("gubed");
  });
});

describe("USER_API_URL()", () => {
  it("check if URL properly", () => {
    expect(USER_API).toBe("http://api/user.com");
  });
});

describe("Languages()", () => {
  it("check if Language has 3 items", () => {
    expect(languages).toStrictEqual(["js", "react", "html"]);
  });
});

describe("user details", () => {
  it("check if userdetails crct", () => {
    // expect(userDetails).toEqual({
    //   name: "John Doe",
    //   age: "25",
    // });
    expect(userDetails).toHaveProperty("name");
    expect(userDetails).toHaveProperty("age");
  });
});

describe("isAuthenticated", () => {
  it("if user is logged in?", () => {
    expect(isAuthenticated(true)).toBeTruthy();
  });
  it("if user is not logged in?", () => {
    expect(() => isAuthenticated(false)).toThrow();
  });
});
// describe("API", () => {
//   it("check if Api returns data", async () => {
//     const data = await fetchUser();
//     // expect(fetchUser).toStrictEqual(["js", "react", "html"]);
//     expect(data).toHaveProperty("title");
//     expect(data).toHaveProperty("id");
//     expect(data).toHaveProperty("completed");
//   }, 100000);
// });
