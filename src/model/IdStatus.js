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
    root.IronTitan.IdStatus = factory(root.IronTitan.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The IdStatus model module.
   * @module model/IdStatus
   * @version 0.3.0
   */

  /**
   * Constructs a new <code>IdStatus</code>.
   * @alias module:model/IdStatus
   * @class
   * @param id
   */
  var exports = function(id) {

    this['id'] = id;

  };

  /**
   * Constructs a <code>IdStatus</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/IdStatus} obj Optional instance to populate.
   * @return {module:model/IdStatus} The populated <code>IdStatus</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'String');
      }
      if (data.hasOwnProperty('status')) {
        obj['status'] = ApiClient.convertToType(data['status'], 'String');
      }
    }
    return obj;
  }


  /**
   * Unique identifier representing a specific job.
   * @member {String} id
   */
  exports.prototype['id'] = undefined;

  /**
   * States and valid transitions.\n\n                 +---------+\n       +---------> delayed <----------------+\n                 +----+----+                |\n                      |                     |\n                      |                     |\n                 +----v----+                |\n       +---------> queued  <----------------+\n                 +----+----+                *\n                      |                     *\n                      |               retry * creates new job\n                 +----v----+                *\n                 | running |                *\n                 +--+-+-+--+                |\n          +---------|-|-|-----+-------------+\n      +---|---------+ | +-----|---------+   |\n      |   |           |       |         |   |\n+-----v---^-+      +--v-------^+     +--v---^-+\n| success   |      | cancelled |     |  error |\n+-----------+      +-----------+     +--------+\n\n* delayed - has a delay.\n* queued - Ready to be consumed when it's turn comes.\n* running - Currently consumed by a runner which will attempt to process it.\n* success - (or complete? success/error is common javascript terminology)\n* error - Something went wrong. In this case more information can be obtained\n  by inspecting the \"reason\" field.\n  - timeout\n  - killed - forcibly killed by worker due to resource restrictions or access\n    violations.\n  - bad_exit - exited with non-zero status due to program termination/crash.\n* cancelled - cancelled via API. More information in the reason field.\n  - client_request - Request was cancelled by a client.\n
   * @member {module:model/IdStatus.StatusEnum} status
   */
  exports.prototype['status'] = undefined;


  /**
   * Allowed values for the <code>status</code> property.
   * @enum {String}
   * @readonly
   */
  exports.StatusEnum = { 
    /**
     * value: delayed
     * @const
     */
    DELAYED: "delayed",
    
    /**
     * value: queued
     * @const
     */
    QUEUED: "queued",
    
    /**
     * value: running
     * @const
     */
    RUNNING: "running",
    
    /**
     * value: success
     * @const
     */
    SUCCESS: "success",
    
    /**
     * value: error
     * @const
     */
    ERROR: "error",
    
    /**
     * value: cancelled
     * @const
     */
    CANCELLED: "cancelled"
  };

  return exports;
}));
