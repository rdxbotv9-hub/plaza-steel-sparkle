import { describe, expect, test } from "bun:test";
import { filterGraceware, gracewareCategories, type GracewareProduct } from "./graceware";

const products: GracewareProduct[] = gracewareCategories.map((category, index) => ({
  id: index,
  name: `${category} Sample`,
  category,
  sourceUrl: "https://graceware.shop/",
  image: "/sample.jpg",
}));

describe("Graceware collection rules", () => {
  test("includes the four requested categories", () => {
    expect([...gracewareCategories]).toEqual(["Gift Sets", "Tray Sets", "Bath Sets", "Hot Pots"]);
  });
  test("category selection excludes products from other categories", () => {
    expect(filterGraceware(products, "Bath Sets", "").map((p) => p.name)).toEqual(["Bath Sets Sample"]);
  });
  test("search matches real product names without case sensitivity", () => {
    expect(filterGraceware(products, "All", "  hot pots  ").map((p) => p.name)).toEqual(["Hot Pots Sample"]);
    expect(filterGraceware(products, "All", "nonexistent")).toEqual([]);
  });
});