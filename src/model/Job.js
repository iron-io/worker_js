(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', './IdStatus', './NewJob'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./IdStatus'), require('./NewJob'));
  } else {
    // Browser globals (root is window)
    if (!root.IronTitan) {
      root.IronTitan = {};
    }
    root.IronTitan.Job = factory(root.IronTitan.ApiClient, root.IronTitan.IdStatus, root.IronTitan.NewJob);
  }
}(this, function(ApiClient, IdStatus, NewJob) {
  'use strict';

  /**
   * The Job model module.
   * @module model/Job
   * @version 0.3.10
   */

  /**
   * Constructs a new <code>Job</code>.
   * @alias module:model/Job
   * @class
   * @extends module:model/NewJob
   * @implements module:model/IdStatus
   * @param image
   * @param priority
   */
  var exports = function(image, priority) {
    NewJob.call(this, image, priority);
    IdStatus.call(this);








  };

  /**
   * Constructs a <code>Job</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Job} obj Optional instance to populate.
   * @return {module:model/Job} The populated <code>Job</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();
      NewJob.constructFromObject(data, obj);
      IdStatus.constructFromObject(data, obj);
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('error')) {
        obj['error'] = ApiClient.convertToType(data['error'], 'String');
      }
      if (data.hasOwnProperty('reason')) {
        obj['reason'] = ApiClient.convertToType(data['reason'], 'String');
      }
      if (data.hasOwnProperty('created_at')) {
        obj['created_at'] = ApiClient.convertToType(data['created_at'], 'Date');
      }
      if (data.hasOwnProperty('started_at')) {
        obj['started_at'] = ApiClient.convertToType(data['started_at'], 'Date');
      }
      if (data.hasOwnProperty('completed_at')) {
        obj['completed_at'] = ApiClient.convertToType(data['completed_at'], 'Date');
      }
      if (data.hasOwnProperty('retry_of')) {
        obj['retry_of'] = ApiClient.convertToType(data['retry_of'], 'String');
      }
      if (data.hasOwnProperty('retry_at')) {
        obj['retry_at'] = ApiClient.convertToType(data['retry_at'], 'String');
      }
    }
    return obj;
  }

  exports.prototype = Object.create(NewJob.prototype);
  exports.prototype.constructor = exports;


  /**
   * Group this job belongs to. 
   * @member {String} name
   */
  exports.prototype['name'] = undefined;

  /**
   * The error message, if status is 'error'. This is errors due to things outside the job itself. Errors from user code will be found in the log.
   * @member {String} error
   */
  exports.prototype['error'] = undefined;

  /**
   * Machine usable reason for job being in this state.\nValid values for error status are `timeout | killed | bad_exit`.\nValid values for cancelled status are `client_request`.\nFor everything else, this is undefined.\n
   * @member {module:model/Job.ReasonEnum} reason
   */
  exports.prototype['reason'] = undefined;

  /**
   * Time when job was submitted. Always in UTC.
   * @member {Date} created_at
   */
  exports.prototype['created_at'] = undefined;

  /**
   * Time when job started execution. Always in UTC.
   * @member {Date} started_at
   */
  exports.prototype['started_at'] = undefined;

  /**
   * Time when job completed, whether it was successul or failed. Always in UTC.
   * @member {Date} completed_at
   */
  exports.prototype['completed_at'] = undefined;

  /**
   * If this field is set, then this job is a retry of the ID in this field.
   * @member {String} retry_of
   */
  exports.prototype['retry_of'] = undefined;

  /**
   * If this field is set, then this job was retried by the job referenced in this field.
   * @member {String} retry_at
   */
  exports.prototype['retry_at'] = undefined;

  // Implement IdStatus interface:
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
   * Allowed values for the <code>reason</code> property.
   * @enum {String}
   * @readonly
   */
  exports.ReasonEnum = { 
    /**
     * value: timeout
     * @const
     */
    TIMEOUT: "timeout",
    
    /**
     * value: killed
     * @const
     */
    KILLED: "killed",
    
    /**
     * value: bad_exit
     * @const
     */
    BAD_EXIT: "bad_exit",
    
    /**
     * value: client_request
     * @const
     */
    CLIENT_REQUEST: "client_request"
  };

  return exports;
}));
