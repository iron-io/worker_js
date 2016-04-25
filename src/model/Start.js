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
    root.IronTitan.Start = factory(root.IronTitan.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The Start model module.
   * @module model/Start
   * @version 0.3.5
   */

  /**
   * Constructs a new <code>Start</code>.
   * @alias module:model/Start
   * @class
   */
  var exports = function() {


  };

  /**
   * Constructs a <code>Start</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Start} obj Optional instance to populate.
   * @return {module:model/Start} The populated <code>Start</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('started_at')) {
        obj['started_at'] = ApiClient.convertToType(data['started_at'], 'Date');
      }
    }
    return obj;
  }


  /**
   * Time when job started execution. Always in UTC.
   * @member {Date} started_at
   */
  exports.prototype['started_at'] = undefined;




  return exports;
}));
