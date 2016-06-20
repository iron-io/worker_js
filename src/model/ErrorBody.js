(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.IronTitan) {
      root.IronTitan = {};
    }
    root.IronTitan.ErrorBody = factory(root.IronTitan.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The ErrorBody model module.
   * @module model/ErrorBody
   * @version 0.4.6
   */

  /**
   * Constructs a new <code>ErrorBody</code>.
   * @alias module:model/ErrorBody
   * @class
   */
  var exports = function() {
    var _this = this;



  };

  /**
   * Constructs a <code>ErrorBody</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ErrorBody} obj Optional instance to populate.
   * @return {module:model/ErrorBody} The populated <code>ErrorBody</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('message')) {
        obj['message'] = ApiClient.convertToType(data['message'], 'String');
      }
      if (data.hasOwnProperty('fields')) {
        obj['fields'] = ApiClient.convertToType(data['fields'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {String} message
   */
  exports.prototype['message'] = undefined;
  /**
   * @member {String} fields
   */
  exports.prototype['fields'] = undefined;




  return exports;
}));


