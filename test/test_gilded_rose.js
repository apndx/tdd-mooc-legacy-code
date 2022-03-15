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

describe("Gilded Rose", function () {
  it("should have an empty shop if initialised without items", function () {
    const gildedRose = new Shop();
    const items = gildedRose.updateQuality();
    expect(items.length).to.equal(0);
  });
});

describe("Gilded Rose", function () {
  it("should update Backstage passes to a TAFKAL80ETC concert quality +1 three times if it has sell in under 6 and quality under 50", function () {
    const gildedRose = new Shop([new Item("Backstage passes to a TAFKAL80ETC concert", 3, 3)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).to.equal(6);
  });
});

describe("Gilded Rose", function () {
  it("should update non-brie, non-pass that has negative sell in and positive quality with -1 quality two times", function () {
    const gildedRose = new Shop([new Item("Wax", -1, 3)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).to.equal(1);
  });
});

describe("Gilded Rose", function () {
  it("should update Aged Brie with negative sell in and quality under 47 two times", function () {
    const gildedRose = new Shop([new Item("Aged Brie", -1, 47)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).to.equal(49);
  });
});

describe("Gilded Rose", function () {
  it("should degrade Conjured items in Quality twice as fast as normal items when sell in is positive", function () {
    const gildedRose = new Shop([new Item("Conjured", 5, 20)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).to.equal(18);
  });
});

describe("Gilded Rose", function () {
  it("should degrade Conjured items in Quality twice as fast as normal items when sell in is negative", function () {
    const gildedRose = new Shop([new Item("Conjured", -1, 20)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).to.equal(16);
  });
});