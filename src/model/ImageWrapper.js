(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', './Image'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Image'));
  } else {
    // Browser globals (root is window)
    if (!root.IronTitan) {
      root.IronTitan = {};
    }
    root.IronTitan.ImageWrapper = factory(root.IronTitan.ApiClient, root.IronTitan.Image);
  }
}(this, function(ApiClient, Image) {
  'use strict';

  /**
   * The ImageWrapper model module.
   * @module model/ImageWrapper
   * @version 0.2.8
   */

  /**
   * Constructs a new <code>ImageWrapper</code>.
   * @alias module:model/ImageWrapper
   * @class
   * @param image
   */
  var exports = function(image) {

    this['image'] = image;
  };

  /**
   * Constructs a <code>ImageWrapper</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ImageWrapper} obj Optional instance to populate.
   * @return {module:model/ImageWrapper} The populated <code>ImageWrapper</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('image')) {
        obj['image'] = Image.constructFromObject(data['image']);
      }
    }
    return obj;
  }


  /**
   * @member {module:model/Image} image
   */
  exports.prototype['image'] = undefined;




  return exports;
}));
