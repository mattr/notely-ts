import { describe, expect, test } from "vitest";
import { getAPIKey } from "../../api/auth";

describe("getAPIKey", () => {
  test("no authorization header", () => {
    const headers = {};
    expect(getAPIKey(headers)).toBeNull();
  });

  test("missing auth scheme", () => {
    const headers = { "authorization": "some-value" };
    expect(getAPIKey(headers)).toBeNull();
  });

  test("invalid auth scheme", () => {
    const headers = {"authorization": "stonks 12345" };
    expect(getAPIKey(headers)).toBeNull();
  });

  test("valid authorization header", () => {
    const headers = {"authorization": "ApiKey 12345"};
    expect(getAPIKey(headers)).toBe("12345");
  });
});
