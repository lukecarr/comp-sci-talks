import { reverse, length, chars, transform } from "../src"

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

describe("transform", () => {
  it("should work", () => {
    const str = "West Exe"
    const transformed = transform(str)
    expect(transformed).toMatchObject({ supplied: "West Exe", reversed: "exE tseW", length: 8, chars: {
      "W": 1,
      "e": 2,
      "s": 1,
      "t": 1,
      " ": 1,
      "E": 1,
      "x": 1
    }})
  })
})