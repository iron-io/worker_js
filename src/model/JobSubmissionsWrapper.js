(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', './JobSubmissionWithImage'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./JobSubmissionWithImage'));
  } else {
    // Browser globals (root is window)
    if (!root.TitanApi) {
      root.TitanApi = {};
    }
    root.TitanApi.JobSubmissionsWrapper = factory(root.TitanApi.ApiClient, root.TitanApi.JobSubmissionWithImage);
  }
}(this, function(ApiClient, JobSubmissionWithImage) {
  'use strict';

  /**
   * The JobSubmissionsWrapper model module.
   * @module model/JobSubmissionsWrapper
   * @version 0.2.4
   */

  /**
   * Constructs a new <code>JobSubmissionsWrapper</code>.
   * @alias module:model/JobSubmissionsWrapper
   * @class
   * @param jobs
   */
  var exports = function(jobs) {

    this['jobs'] = jobs;
  };

  /**
   * Constructs a <code>JobSubmissionsWrapper</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/JobSubmissionsWrapper} obj Optional instance to populate.
   * @return {module:model/JobSubmissionsWrapper} The populated <code>JobSubmissionsWrapper</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('jobs')) {
        obj['jobs'] = ApiClient.convertToType(data['jobs'], [JobSubmissionWithImage]);
      }
    }
    return obj;
  }


  /**
   * @member {Array.<module:model/JobSubmissionWithImage>} jobs
   */
  exports.prototype['jobs'] = undefined;




  return exports;
}));
