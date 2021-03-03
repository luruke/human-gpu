/*!
 * masonryHorizontal layout mode for Isotope
 * v2.0.1
 * https://isotope.metafizzy.co/layout-modes/masonryhorizontal.html
 */

/*jshint browser: true, strict: true, undef: true, unused: true */

(function (window, factory) {
  "use strict";
  // universal module definition
  if (typeof define === "function" && define.amd) {
    // AMD
    define(["get-size/get-size", "isotope-layout/js/layout-mode"], factory);
  } else if (typeof module == "object" && module.exports) {
    // CommonJS
    module.exports = factory(
      require("get-size"),
      require("isotope-layout/js/layout-mode")
    );
  } else {
    // browser global
    factory(window.getSize, window.Isotope.LayoutMode);
  }
})(window, function factory(getSize, LayoutMode) {
  "use strict";

  // -------------------------- definition -------------------------- //

  // create an Outlayer layout class
  var MasonryHorizontal = LayoutMode.create("masonryHorizontal");
  var proto = MasonryHorizontal.prototype;

  proto._resetLayout = function () {
    this.getRowHeight();
    this._getMeasurement("gutter", "outerHeight");

    this.rowHeight += this.gutter;
    // measure rows
    this.rows = Math.floor(
      (this.isotope.size.innerHeight + this.gutter) / this.rowHeight
    );
    this.rows = Math.max(this.rows, 1);

    // reset row Xs
    var i = this.rows;
    this.rowXs = [];
    while (i--) {
      this.rowXs.push(0);
    }

    this.maxX = 0;
  };

  proto._getItemLayoutPosition = function (item) {
    item.getSize();
    // how many rows does this brick span
    var remainder = item.size.outerHeight % this.rowHeight;
    var mathMethod = remainder && remainder < 1 ? "round" : "ceil";
    // round if off by 1 pixel, otherwise use ceil
    var rowSpan = Math[mathMethod](item.size.outerHeight / this.rowHeight);
    rowSpan = Math.min(rowSpan, this.rows);

    var rowGroup = this._getRowGroup(rowSpan);
    // get the minimum X value from the rows
    var minimumX = Math.min.apply(Math, rowGroup);
    var shortRowIndex = rowGroup.indexOf(minimumX);

    // position the brick
    var position = {
      x: minimumX,
      y: this.rowHeight * shortRowIndex,
    };

    // apply setHeight to necessary rows
    var setWidth = minimumX + item.size.outerWidth;
    var setSpan = this.rows + 1 - rowGroup.length;
    for (var i = 0; i < setSpan; i++) {
      this.rowXs[shortRowIndex + i] = setWidth;
    }

    return position;
  };

  /**
   * @param {Number} rowSpan - number of rows the element spans
   * @returns {Array} rowGroup
   */
  proto._getRowGroup = function (rowSpan) {
    if (rowSpan < 2) {
      // if brick spans only one row, use all the row Xs
      return this.rowXs;
    }

    var rowGroup = [];
    // how many different places could this brick fit horizontally
    var groupCount = this.rows + 1 - rowSpan;
    // for each group potential horizontal position
    for (var i = 0; i < groupCount; i++) {
      // make an array of rowX values for that one group
      var groupRowXs = this.rowXs.slice(i, i + rowSpan);
      // and get the max value of the array
      rowGroup[i] = Math.max.apply(Math, groupRowXs);
    }
    return rowGroup;
  };

  proto._manageStamp = function (stamp) {
    var stampSize = getSize(stamp);
    var offset = this.isotope._getElementOffset(stamp);
    // get the rows that this stamp affects
    var firstY = this._getOption("originTop") ? offset.top : offset.bottom;
    var lastY = firstY + stampSize.outerHeight;
    var firstRow = Math.floor(firstY / this.rowHeight);
    firstRow = Math.max(0, firstRow);
    var lastRow = Math.floor(lastY / this.rowHeight);
    lastRow = Math.min(this.rows - 1, lastRow);
    // set rowXs to outside edge of the stamp
    var stampMaxX =
      (this._getOption("originLeft") ? offset.left : offset.right) +
      stampSize.outerWidth;
    for (var i = firstRow; i <= lastRow; i++) {
      this.rowXs[i] = Math.max(stampMaxX, this.rowXs[i]);
    }
  };

  proto._getContainerSize = function () {
    this.maxX = Math.max.apply(Math, this.rowXs);

    return {
      width: this.maxX,
    };
  };

  proto.needsResizeLayout = function () {
    return this.needsVerticalResizeLayout();
  };

  return MasonryHorizontal;
});
