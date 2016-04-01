(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', './ErrorBody', './Job'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./ErrorBody'), require('./Job'));
  } else {
    // Browser globals (root is window)
    if (!root.IronTitan) {
      root.IronTitan = {};
    }
    root.IronTitan.JobsWrapper = factory(root.IronTitan.ApiClient, root.IronTitan.ErrorBody, root.IronTitan.Job);
  }
}(this, function(ApiClient, ErrorBody, Job) {
  'use strict';

  /**
   * The JobsWrapper model module.
   * @module model/JobsWrapper
   * @version 0.2.11
   */

  /**
   * Constructs a new <code>JobsWrapper</code>.
   * @alias module:model/JobsWrapper
   * @class
   * @param jobs
   */
  var exports = function(jobs) {

    this['jobs'] = jobs;

  };

  /**
   * Constructs a <code>JobsWrapper</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/JobsWrapper} obj Optional instance to populate.
   * @return {module:model/JobsWrapper} The populated <code>JobsWrapper</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('jobs')) {
        obj['jobs'] = ApiClient.convertToType(data['jobs'], [Job]);
      }
      if (data.hasOwnProperty('error')) {
        obj['error'] = ErrorBody.constructFromObject(data['error']);
      }
    }
    return obj;
  }


  /**
   * @member {Array.<module:model/Job>} jobs
   */
  exports.prototype['jobs'] = undefined;

  /**
   * @member {module:model/ErrorBody} error
   */
  exports.prototype['error'] = undefined;




  return exports;
}));
