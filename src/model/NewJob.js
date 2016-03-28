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
    root.TitanApi.NewJob = factory(root.TitanApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The NewJob model module.
   * @module model/NewJob
   * @version 0.1.1
   */

  /**
   * Constructs a new <code>NewJob</code>.
   * @alias module:model/NewJob
   * @class
   * @param image
   */
  var exports = function(image) {


    this['image'] = image;







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

      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
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
      if (data.hasOwnProperty('retries')) {
        obj['retries'] = ApiClient.convertToType(data['retries'], 'Integer');
      }
      if (data.hasOwnProperty('retries_delay')) {
        obj['retries_delay'] = ApiClient.convertToType(data['retries_delay'], 'Integer');
      }
      if (data.hasOwnProperty('retry_from_id')) {
        obj['retry_from_id'] = ApiClient.convertToType(data['retry_from_id'], 'String');
      }
    }
    return obj;
  }


  /**
   * Docker image to use for job. Default is the same as the 'image' parameter.
   * @member {String} name
   */
  exports.prototype['name'] = undefined;

  /**
   * Docker image to use for job.
   * @member {String} image
   */
  exports.prototype['image'] = undefined;

  /**
   * Payload for the job.  This is what you pass into each job to make it do something.
   * @member {String} payload
   */
  exports.prototype['payload'] = undefined;

  /**
   * Number of seconds to wait before starting. Default 0.
   * @member {Integer} delay
   */
  exports.prototype['delay'] = undefined;

  /**
   * Maximum runtime in seconds. If job runs for longer, it will be killed. Default 60 seconds.
   * @member {Integer} timeout
   */
  exports.prototype['timeout'] = undefined;

  /**
   * Priority of the job. 3 levels from 0-2. Default 0.
   * @member {Integer} priority
   */
  exports.prototype['priority'] = undefined;

  /**
   * Max number of retries. A retry will be attempted if a task fails. Default 3. TODO: naming: retries or max_retries?
   * @member {Integer} retries
   */
  exports.prototype['retries'] = undefined;

  /**
   * Time in seconds to wait before next attempt. Default 60.
   * @member {Integer} retries_delay
   */
  exports.prototype['retries_delay'] = undefined;

  /**
   * If this field is set, then this job is a retry of a previous job. retry_from_id points to the previous job.
   * @member {String} retry_from_id
   */
  exports.prototype['retry_from_id'] = undefined;




  return exports;
}));
