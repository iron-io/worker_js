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
    root.TitanApi.Log = factory(root.TitanApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The Log model module.
   * @module model/Log
   * @version 0.1.1
   */

  /**
   * Constructs a new <code>Log</code>.
   * @alias module:model/Log
   * @class
   * @param log
   */
  var exports = function(log) {

    this['log'] = log;
  };

  /**
   * Constructs a <code>Log</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Log} obj Optional instance to populate.
   * @return {module:model/Log} The populated <code>Log</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('log')) {
        obj['log'] = ApiClient.convertToType(data['log'], 'String');
      }
    }
    return obj;
  }


  /**
   * @member {String} log
   */
  exports.prototype['log'] = undefined;




  return exports;
}));
