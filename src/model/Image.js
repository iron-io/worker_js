(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.IronTitan) {
      root.IronTitan = {};
    }
    root.IronTitan.Image = factory(root.IronTitan.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The Image model module.
   * @module model/Image
   * @version 0.2.11
   */

  /**
   * Constructs a new <code>Image</code>.
   * @alias module:model/Image
   * @class
   * @param image
   */
  var exports = function(image) {


    this['image'] = image;

  };

  /**
   * Constructs a <code>Image</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Image} obj Optional instance to populate.
   * @return {module:model/Image} The populated <code>Image</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('image')) {
        obj['image'] = ApiClient.convertToType(data['image'], 'String');
      }
      if (data.hasOwnProperty('created_at')) {
        obj['created_at'] = ApiClient.convertToType(data['created_at'], 'Date');
      }
    }
    return obj;
  }


  /**
   * Name of this image/package/code. Can and should be different than the image name (shoudn't include tag). TODO: Should we strip tag automatically if only image is passed in?
   * @member {String} name
   */
  exports.prototype['name'] = undefined;

  /**
   * Docker image to use for job, including the tag.
   * @member {String} image
   */
  exports.prototype['image'] = undefined;

  /**
   * Time when image first used/created.
   * @member {Date} created_at
   */
  exports.prototype['created_at'] = undefined;




  return exports;
}));
