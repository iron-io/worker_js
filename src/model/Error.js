(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/ErrorBody'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./ErrorBody'));
  } else {
    // Browser globals (root is window)
    if (!root.IronTitan) {
      root.IronTitan = {};
    }
    root.IronTitan.Error = factory(root.IronTitan.ApiClient, root.IronTitan.ErrorBody);
  }
}(this, function(ApiClient, ErrorBody) {
  'use strict';




  /**
   * The Error model module.
   * @module model/Error
   * @version 0.4.2
   */

  /**
   * Constructs a new <code>Error</code>.
   * @alias module:model/Error
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>Error</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Error} obj Optional instance to populate.
   * @return {module:model/Error} The populated <code>Error</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('error')) {
        obj['error'] = ErrorBody.constructFromObject(data['error']);
      }
    }
    return obj;
  }

  /**
   * @member {module:model/ErrorBody} error
   */
  exports.prototype['error'] = undefined;




  return exports;
}));


