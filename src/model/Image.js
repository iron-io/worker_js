(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.TitanApi) {
      root.TitanApi = {};
    }
    root.TitanApi.Image = factory(root.TitanApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The Image model module.
   * @module model/Image
   * @version 0.1.1
   */

  /**
   * Constructs a new <code>Image</code>.
   * @alias module:model/Image
   * @class
   * @param name
   */
  var exports = function(name) {

    this['name'] = name;

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
      if (data.hasOwnProperty('created_at')) {
        obj['created_at'] = ApiClient.convertToType(data['created_at'], 'Date');
      }
    }
    return obj;
  }


  /**
   * Docker image to use for job.
   * @member {String} name
   */
  exports.prototype['name'] = undefined;

  /**
   * Time when image first used/created.
   * @member {Date} created_at
   */
  exports.prototype['created_at'] = undefined;




  return exports;
}));
