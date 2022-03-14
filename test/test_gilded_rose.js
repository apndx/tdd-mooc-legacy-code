var { expect } = require("chai");
var { Shop, Item } = require("../src/gilded_rose.js");

describe("Gilded Rose", function () {
  it("should foo", function () {
    const gildedRose = new Shop([new Item("foo", 0, 0)]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).to.equal("foo");
  });
});

describe("Gilded Rose", function () {
  it("should update -1 qualities for non-brie, non-pass, non-sulfuras", function () {
    const gildedRose = new Shop([new Item("Scent", 1, 1), new Item("Shampoo", 2, 2)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).to.equal(0);
    expect(items[1].quality).to.equal(1);
  });
});

describe("Gilded Rose", function () {
  it("should update +1 quality for Aged Brie", function () {
    const gildedRose = new Shop([new Item("Aged Brie", 49, 49)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).to.equal(50);
  });
});

describe("Gilded Rose", function () {
  it("should update +1 quality and -1 sell in for Backstage passes to a TAFKAL80ETC concert", function () {
    const gildedRose = new Shop([new Item("Backstage passes to a TAFKAL80ETC concert", 10, 49)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).to.equal(50);
    expect(items[0].sellIn).to.equal(9);
  });
});

describe("Gilded Rose", function () {
  it("should update +1 quality two times for Backstage passes to a TAFKAL80ETC concert", function () {
    const gildedRose = new Shop([new Item("Backstage passes to a TAFKAL80ETC concert", 5, 48)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).to.equal(50);
  });
});

describe("Gilded Rose", function () {
  it("should update -1 quality for non-brie, non-pass, non-sulfuras that has negative sell in and positive quality", function () {
    const gildedRose = new Shop([new Item("Bib", -1, 1)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).to.equal(0);
  });
});

describe("Gilded Rose", function () {
  it("should update Backstage passes to a TAFKAL80ETC concert quality to 0 if it has negative sell in", function () {
    const gildedRose = new Shop([new Item("Backstage passes to a TAFKAL80ETC concert", -1, 100)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).to.equal(0);
  });
});

describe("Gilded Rose", function () {
  it("should update Aged Brie quality +1 if it has negative sell in and quality under 50", function () {
    const gildedRose = new Shop([new Item("Aged Brie", -1, 49)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).to.equal(50);
  });
});
