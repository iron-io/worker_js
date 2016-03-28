(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', './NewJob'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./NewJob'));
  } else {
    // Browser globals (root is window)
    if (!root.IronTitan) {
      root.IronTitan = {};
    }
    root.IronTitan.Job = factory(root.IronTitan.ApiClient, root.IronTitan.NewJob);
  }
}(this, function(ApiClient, NewJob) {
  'use strict';

  /**
   * The Job model module.
   * @module model/Job
   * @version 0.1.1
   */

  /**
   * Constructs a new <code>Job</code>.
   * @alias module:model/Job
   * @class
   * @extends module:model/NewJob
   * @param image
   * @param id
   */
  var exports = function(image, id) {
    NewJob.call(this, image);
    this['id'] = id;






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
      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'String');
      }
      if (data.hasOwnProperty('status')) {
        obj['status'] = ApiClient.convertToType(data['status'], 'String');
      }
      if (data.hasOwnProperty('created_at')) {
        obj['created_at'] = ApiClient.convertToType(data['created_at'], 'Date');
      }
      if (data.hasOwnProperty('error')) {
        obj['error'] = ApiClient.convertToType(data['error'], 'String');
      }
      if (data.hasOwnProperty('started_at')) {
        obj['started_at'] = ApiClient.convertToType(data['started_at'], 'Date');
      }
      if (data.hasOwnProperty('completed_at')) {
        obj['completed_at'] = ApiClient.convertToType(data['completed_at'], 'Date');
      }
      if (data.hasOwnProperty('retry_id')) {
        obj['retry_id'] = ApiClient.convertToType(data['retry_id'], 'String');
      }
    }
    return obj;
  }

  exports.prototype = Object.create(NewJob.prototype);
  exports.prototype.constructor = exports;


  /**
   * Unique identifier representing a specific job.
   * @member {String} id
   */
  exports.prototype['id'] = undefined;

  /**
   * Status of job. One of: [pending, running, success, error, timeout]
   * @member {String} status
   */
  exports.prototype['status'] = undefined;

  /**
   * Time when job was submitted.
   * @member {Date} created_at
   */
  exports.prototype['created_at'] = undefined;

  /**
   * Сorresponding error message, only when status=='error'.
   * @member {String} error
   */
  exports.prototype['error'] = undefined;

  /**
   * Time when job started execution.
   * @member {Date} started_at
   */
  exports.prototype['started_at'] = undefined;

  /**
   * Time when job completed, whether it was successul or failed.
   * @member {Date} completed_at
   */
  exports.prototype['completed_at'] = undefined;

  /**
   * If this field is set, then this job was retried and RetryId points to new job.
   * @member {String} retry_id
   */
  exports.prototype['retry_id'] = undefined;




  return exports;
}));
