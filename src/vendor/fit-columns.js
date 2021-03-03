/*!
 * fitColumns layout mode for Isotope
 * v1.1.4
 * https://isotope.metafizzy.co/layout-modes/fitcolumns.html
 */

/*jshint browser: true, devel: false, strict: true, undef: true, unused: true */

(function (window, factory) {
  // universal module definition
  /* jshint strict: false */ /*globals define, module, require */
  if (typeof define === "function" && define.amd) {
    // AMD
    define(["isotope-layout/js/layout-mode"], factory);
  } else if (typeof exports === "object") {
    // CommonJS
    module.exports = factory(require("isotope-layout/js/layout-mode"));
  } else {
    // browser global
    factory(window.Isotope.LayoutMode);
  }
})(window, function factory(LayoutMode) {
  "use strict";

  var FitColumns = LayoutMode.create("fitColumns");
  var proto = FitColumns.prototype;

  proto._resetLayout = function () {
    this.x = 0;
    this.y = 0;
    this.maxX = 0;
  };

  proto._getItemLayoutPosition = function (item) {
    item.getSize();

    // if this element cannot fit in the current row
    if (
      this.y !== 0 &&
      item.size.outerHeight + this.y > this.isotope.size.innerHeight
    ) {
      this.y = 0;
      this.x = this.maxX;
    }

    var position = {
      x: this.x,
      y: this.y,
    };

    this.maxX = Math.max(this.maxX, this.x + item.size.outerWidth);
    this.y += item.size.outerHeight;

    return position;
  };

  proto._getContainerSize = function () {
    return { width: this.maxX };
  };

  proto.needsResizeLayout = function () {
    return this.needsVerticalResizeLayout();
  };

  return FitColumns;
});
