(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', './Image', './NewJob'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Image'), require('./NewJob'));
  } else {
    // Browser globals (root is window)
    if (!root.IronTitan) {
      root.IronTitan = {};
    }
    root.IronTitan.NewJobWithImage = factory(root.IronTitan.ApiClient, root.IronTitan.Image, root.IronTitan.NewJob);
  }
}(this, function(ApiClient, Image, NewJob) {
  'use strict';

  /**
   * The NewJobWithImage model module.
   * @module model/NewJobWithImage
   * @version 0.2.0
   */

  /**
   * Constructs a new <code>NewJobWithImage</code>.
   * @alias module:model/NewJobWithImage
   * @class
   * @extends module:model/NewJob
   * @implements module:model/Image
   * @param image
   */
  var exports = function(image) {
    NewJob.call(this);
    Image.call(this, image);
  };

  /**
   * Constructs a <code>NewJobWithImage</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/NewJobWithImage} obj Optional instance to populate.
   * @return {module:model/NewJobWithImage} The populated <code>NewJobWithImage</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();
      NewJob.constructFromObject(data, obj);
      Image.constructFromObject(data, obj);
    }
    return obj;
  }

  exports.prototype = Object.create(NewJob.prototype);
  exports.prototype.constructor = exports;


  // Implement Image interface:
  /**
   * Docker image to use for job.
   * @member {String} image
   */
  exports.prototype['image'] = undefined;

  /**
   * Time when image first used/created.
   * @member {Date} created_at
   */
  exports.prototype['created_at'] = undefined;




  return exports;
}));
