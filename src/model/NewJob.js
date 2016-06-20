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
    root.IronTitan.NewJob = factory(root.IronTitan.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The NewJob model module.
   * @module model/NewJob
   * @version 0.3.10
   */

  /**
   * Constructs a new <code>NewJob</code>.
   * @alias module:model/NewJob
   * @class
   * @param image
   * @param priority
   */
  var exports = function(image, priority) {
    var _this = this;

    _this['image'] = image;



    _this['priority'] = priority;


  };

  /**
   * Constructs a <code>NewJob</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/NewJob} obj Optional instance to populate.
   * @return {module:model/NewJob} The populated <code>NewJob</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('image')) {
        obj['image'] = ApiClient.convertToType(data['image'], 'String');
      }
      if (data.hasOwnProperty('payload')) {
        obj['payload'] = ApiClient.convertToType(data['payload'], 'String');
      }
      if (data.hasOwnProperty('delay')) {
        obj['delay'] = ApiClient.convertToType(data['delay'], 'Integer');
      }
      if (data.hasOwnProperty('timeout')) {
        obj['timeout'] = ApiClient.convertToType(data['timeout'], 'Integer');
      }
      if (data.hasOwnProperty('priority')) {
        obj['priority'] = ApiClient.convertToType(data['priority'], 'Integer');
      }
      if (data.hasOwnProperty('max_retries')) {
        obj['max_retries'] = ApiClient.convertToType(data['max_retries'], 'Integer');
      }
      if (data.hasOwnProperty('retries_delay')) {
        obj['retries_delay'] = ApiClient.convertToType(data['retries_delay'], 'Integer');
      }
    }
    return obj;
  }

  /**
   * Name of Docker image to use. This is optional and can be used to override the image defined at the group level.
   * @member {String} image
   */
  exports.prototype['image'] = undefined;
  /**
   * Payload for the job. This is what you pass into each job to make it do something.
   * @member {String} payload
   */
  exports.prototype['payload'] = undefined;
  /**
   * Number of seconds to wait before queueing the job for consumption for the first time. Must be a positive integer. Jobs with a delay start in state \"delayed\" and transition to \"running\" after delay seconds.
   * @member {Integer} delay
   * @default 0
   */
  exports.prototype['delay'] = 0;
  /**
   * Maximum runtime in seconds. If a consumer retrieves the job, but does not change it's status within timeout seconds, the job is considered failed, with reason timeout (Titan may allow a small grace period). The consumer should also kill the job after timeout seconds. If a consumer tries to change status after Titan has already timed out the job, the consumer will be ignored. 
   * @member {Integer} timeout
   * @default 60
   */
  exports.prototype['timeout'] = 60;
  /**
   * Priority of the job. Higher has more priority. 3 levels from 0-2. Jobs at same priority are processed in FIFO order.
   * @member {Integer} priority
   */
  exports.prototype['priority'] = undefined;
  /**
   * \"Number of automatic retries this job is allowed. A retry will be attempted if a task fails. Max 25. Automatic retries are performed by titan when a task reaches a failed state and has `max_retries` > 0. A retry is performed by queueing a new job with the same image id and payload. The new job's max_retries is one less than the original. The new job's `retry_of` field is set to the original Job ID.  Titan will delay the new job for retries_delay seconds before queueing it. Cancelled or successful tasks are never automatically retried.\" 
   * @member {Integer} max_retries
   * @default 0
   */
  exports.prototype['max_retries'] = 0;
  /**
   * Time in seconds to wait before retrying the job. Must be a non-negative integer.
   * @member {Integer} retries_delay
   * @default 60
   */
  exports.prototype['retries_delay'] = 60;




  return exports;
}));


