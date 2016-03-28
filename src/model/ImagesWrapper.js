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
    root.IronTitan.ImagesWrapper = factory(root.IronTitan.ApiClient, root.IronTitan.Image);
  }
}(this, function(ApiClient, Image) {
  'use strict';

  /**
   * The ImagesWrapper model module.
   * @module model/ImagesWrapper
   * @version 0.1.1
   */

  /**
   * Constructs a new <code>ImagesWrapper</code>.
   * @alias module:model/ImagesWrapper
   * @class
   * @param images
   */
  var exports = function(images) {

    this['images'] = images;
  };

  /**
   * Constructs a <code>ImagesWrapper</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ImagesWrapper} obj Optional instance to populate.
   * @return {module:model/ImagesWrapper} The populated <code>ImagesWrapper</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('images')) {
        obj['images'] = ApiClient.convertToType(data['images'], [Image]);
      }
    }
    return obj;
  }


  /**
   * @member {Array.<module:model/Image>} images
   */
  exports.prototype['images'] = undefined;




  return exports;
}));
