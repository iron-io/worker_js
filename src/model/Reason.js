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
    root.IronTitan.Reason = factory(root.IronTitan.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The Reason model module.
   * @module model/Reason
   * @version 0.3.0
   */

  /**
   * Constructs a new <code>Reason</code>.
   * Machine usable reason for job being in this state. \nValid values for error status are `timeout | killed | bad_exit`.\nValid values for cancelled status are `client_request`.\nFor everything else, this is undefined.\n
   * @alias module:model/Reason
   * @class
   */
  var exports = function() {

  };

  /**
   * Constructs a <code>Reason</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Reason} obj Optional instance to populate.
   * @return {module:model/Reason} The populated <code>Reason</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

    }
    return obj;
  }





  return exports;
}));
