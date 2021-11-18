import { reverse, length, chars } from "../src"

describe("reverse", () => {
  it("should reverse a string", () => {
    const str = "hello"
    const reversed = reverse(str)

    expect(reversed).toBe("olleh")
  })
})

describe("length", () => {
  it("should return the length of a string", () => {
    const str = "hello"
    const len = length(str)

    expect(len).toBe(5)
  })
})

describe("chars", () => {
  it("should return an object of chars in a string and their occurrences", () => {
    const str = "hello"
    const _chars = chars(str)
    expect(_chars).toMatchObject({ "h": 1, "e": 1, "l": 2, "o": 1 })
  })
})