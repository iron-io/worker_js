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
    root.IronTitan.NewJobsWrapper = factory(root.IronTitan.ApiClient, root.IronTitan.NewJob);
  }
}(this, function(ApiClient, NewJob) {
  'use strict';

  /**
   * The NewJobsWrapper model module.
   * @module model/NewJobsWrapper
   * @version 0.3.3
   */

  /**
   * Constructs a new <code>NewJobsWrapper</code>.
   * @alias module:model/NewJobsWrapper
   * @class
   * @param jobs
   */
  var exports = function(jobs) {

    this['jobs'] = jobs;
  };

  /**
   * Constructs a <code>NewJobsWrapper</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/NewJobsWrapper} obj Optional instance to populate.
   * @return {module:model/NewJobsWrapper} The populated <code>NewJobsWrapper</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('jobs')) {
        obj['jobs'] = ApiClient.convertToType(data['jobs'], [NewJob]);
      }
    }
    return obj;
  }


  /**
   * @member {Array.<module:model/NewJob>} jobs
   */
  exports.prototype['jobs'] = undefined;




  return exports;
}));
