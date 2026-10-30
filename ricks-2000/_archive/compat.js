/* Ricks College archive: compatibility shim for IE4/Netscape 4-era scripts.
   Added by the restoration build. The page's own scripts are unchanged.

   Modern browsers keep document.all but make it falsy and drop document.all.tags(),
   so old "if (document.all) {IE} else {Netscape}" code takes the dead Netscape
   branch. This makes document.all truthy again with the IE4 methods, so pages take
   their IE branch, whose style.visibility/left/top code is still standard DOM. */
(function () {
  var d = document;
  var real = d.all;
  // document.all is falsy by design in modern browsers, so test for its existence, not truthiness.
  if (real === undefined || real === null || typeof Proxy === "undefined") return;

  var all = new Proxy(function () {}, {
    apply: function (target, self, args) { return real.item.apply(real, args); },
    get: function (target, key) {
      if (key === "tags") return function (tag) { return d.getElementsByTagName(tag); };
      if (key === "item" || key === "namedItem") return real[key].bind(real);
      if (key === "length") return real.length;
      return real[key];
    },
    has: function (target, key) { return key in real; }
  });
  try {
    Object.defineProperty(d, "all", { configurable: true, get: function () { return all; } });
  } catch (e) { /* leave the browser's own document.all */ }

  // IE-only numeric style properties: style.pixelLeft = 10, style.posTop, ...
  var proto = CSSStyleDeclaration.prototype;
  [["pixelLeft", "left"], ["pixelTop", "top"], ["pixelWidth", "width"], ["pixelHeight", "height"],
   ["posLeft", "left"], ["posTop", "top"]].forEach(function (pair) {
    if (pair[0] in proto) return;
    Object.defineProperty(proto, pair[0], {
      configurable: true,
      get: function () { return parseInt(this[pair[1]], 10) || 0; },
      set: function (v) { this[pair[1]] = v + "px"; }
    });
  });
})();
