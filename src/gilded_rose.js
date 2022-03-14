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
        this.doDailyQualityDecrease(i);
      } else {
        this.doDailyQualityIncrease(i);
      }
      if (this.items[i].name != "Sulfuras, Hand of Ragnaros") {
        this.doDailySellInDecrease(i);
      }
      if (this.items[i].sellIn < 0) {
        if (this.items[i].name != "Aged Brie") {
          if (this.items[i].name != "Backstage passes to a TAFKAL80ETC concert") {
            this.doubleQualityDecrease(i);
          } else {
            this.zeroOutBackstagePassQuality(i);
          }
        } else {
          this.increaseBrieQuality(i);
        }
      }
    }

    return this.items;
  }

  increaseBrieQuality(i) {
    if (this.items[i].quality < 50) {
      this.items[i].quality = this.items[i].quality + 1;
    }
  }

  zeroOutBackstagePassQuality(i) {
    this.items[i].quality = this.items[i].quality - this.items[i].quality;
  }

  doubleQualityDecrease(i) {
    if (this.items[i].quality > 0) {
      if (this.items[i].name != "Sulfuras, Hand of Ragnaros") {
        this.items[i].quality = this.items[i].quality - 1;
      }
    }
  }

  doDailySellInDecrease(i) {
    this.items[i].sellIn = this.items[i].sellIn - 1;
  }

  doDailyQualityIncrease(i) {
    if (this.items[i].quality < 50) {
      this.items[i].quality = this.items[i].quality + 1;
      if (this.items[i].name == "Backstage passes to a TAFKAL80ETC concert") {
        this.increaseQualityForBackstagePass(i);
      }
    }
  }

  increaseQualityForBackstagePass(i) {
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

  doDailyQualityDecrease(i) {
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
