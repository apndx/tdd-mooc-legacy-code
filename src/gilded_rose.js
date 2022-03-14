class Item {
  constructor(name, sellIn, quality) {
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}

class Shop {
  constructor(items = []) {
    this.items = items;
  }

  updateQuality() {
    for (var i = 0; i < this.items.length; i++) {
      if (this.items[i].name != "Aged Brie" && this.items[i].name != "Backstage passes to a TAFKAL80ETC concert") {
        this.firstQualityUpdate(i);
      } else {
        this.secondQualityUpdate(i);
      }
      if (this.items[i].name != "Sulfuras, Hand of Ragnaros") {
        this.sellInUpdate(i);
      }
      if (this.items[i].sellIn < 0) {
        if (this.items[i].name != "Aged Brie") {
          if (this.items[i].name != "Backstage passes to a TAFKAL80ETC concert") {
            this.thirdQualityUpdate(i);
          } else {
            this.fourthQualityUpdate(i);
          }
        } else {
          this.fifthQualityUpdate(i);
        }
      }
    }

    return this.items;
  }

  fifthQualityUpdate(i) {
    if (this.items[i].quality < 50) {
      this.items[i].quality = this.items[i].quality + 1;
    }
  }

  fourthQualityUpdate(i) {
    this.items[i].quality = this.items[i].quality - this.items[i].quality;
  }

  thirdQualityUpdate(i) {
    if (this.items[i].quality > 0) {
      if (this.items[i].name != "Sulfuras, Hand of Ragnaros") {
        this.items[i].quality = this.items[i].quality - 1;
      }
    }
  }

  sellInUpdate(i) {
    this.items[i].sellIn = this.items[i].sellIn - 1;
  }

  secondQualityUpdate(i) {
    if (this.items[i].quality < 50) {
      this.items[i].quality = this.items[i].quality + 1;
      if (this.items[i].name == "Backstage passes to a TAFKAL80ETC concert") {
        if (this.items[i].sellIn < 11) {
          if (this.items[i].quality < 50) {
            this.items[i].quality = this.items[i].quality + 1;
          }
        }
        if (this.items[i].sellIn < 6) {
          if (this.items[i].quality < 50) {
            this.items[i].quality = this.items[i].quality + 1;
          }
        }
      }
    }
  }

  firstQualityUpdate(i) {
    if (this.items[i].quality > 0) {
      if (this.items[i].name != "Sulfuras, Hand of Ragnaros") {
        this.items[i].quality = this.items[i].quality - 1;
      }
    }
  }
}

module.exports = {
  Item,
  Shop,
};
