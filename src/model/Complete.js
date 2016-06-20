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
    root.IronTitan.Complete = factory(root.IronTitan.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The Complete model module.
   * @module model/Complete
   * @version 0.4.0
   */

  /**
   * Constructs a new <code>Complete</code>.
   * @alias module:model/Complete
   * @class
   */
  var exports = function() {
    var _this = this;




  };

  /**
   * Constructs a <code>Complete</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Complete} obj Optional instance to populate.
   * @return {module:model/Complete} The populated <code>Complete</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('completed_at')) {
        obj['completed_at'] = ApiClient.convertToType(data['completed_at'], 'Date');
      }
      if (data.hasOwnProperty('reason')) {
        obj['reason'] = ApiClient.convertToType(data['reason'], 'String');
      }
      if (data.hasOwnProperty('error')) {
        obj['error'] = ApiClient.convertToType(data['error'], 'String');
      }
    }
    return obj;
  }

  /**
   * Time when job was completed. Always in UTC.
   * @member {Date} completed_at
   */
  exports.prototype['completed_at'] = undefined;
  /**
   * Machine readable reason failure, if status=error. Only used by the /error endpoint.
   * @member {String} reason
   */
  exports.prototype['reason'] = undefined;
  /**
   * Error message, if status=error. Only used by the /error endpoint.
   * @member {String} error
   */
  exports.prototype['error'] = undefined;




  return exports;
}));


