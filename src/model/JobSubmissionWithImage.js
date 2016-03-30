(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', './Image', './JobSubmission'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Image'), require('./JobSubmission'));
  } else {
    // Browser globals (root is window)
    if (!root.TitanApi) {
      root.TitanApi = {};
    }
    root.TitanApi.JobSubmissionWithImage = factory(root.TitanApi.ApiClient, root.TitanApi.Image, root.TitanApi.JobSubmission);
  }
}(this, function(ApiClient, Image, JobSubmission) {
  'use strict';

  /**
   * The JobSubmissionWithImage model module.
   * @module model/JobSubmissionWithImage
   * @version 0.2.4
   */

  /**
   * Constructs a new <code>JobSubmissionWithImage</code>.
   * @alias module:model/JobSubmissionWithImage
   * @class
   * @extends module:model/JobSubmission
   */
  var exports = function() {
    JobSubmission.call(this);

  };

  /**
   * Constructs a <code>JobSubmissionWithImage</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/JobSubmissionWithImage} obj Optional instance to populate.
   * @return {module:model/JobSubmissionWithImage} The populated <code>JobSubmissionWithImage</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();
      JobSubmission.constructFromObject(data, obj);
      if (data.hasOwnProperty('image')) {
        obj['image'] = Image.constructFromObject(data['image']);
      }
    }
    return obj;
  }

  exports.prototype = Object.create(JobSubmission.prototype);
  exports.prototype.constructor = exports;


  /**
   * @member {module:model/Image} image
   */
  exports.prototype['image'] = undefined;




  return exports;
}));
