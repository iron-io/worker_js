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
    root.IronTitan.Group = factory(root.IronTitan.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The Group model module.
   * @module model/Group
   * @version 0.3.10
   */

  /**
   * Constructs a new <code>Group</code>.
   * @alias module:model/Group
   * @class
   */
  var exports = function() {
    var _this = this;






  };

  /**
   * Constructs a <code>Group</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Group} obj Optional instance to populate.
   * @return {module:model/Group} The populated <code>Group</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('created_at')) {
        obj['created_at'] = ApiClient.convertToType(data['created_at'], 'Date');
      }
      if (data.hasOwnProperty('image')) {
        obj['image'] = ApiClient.convertToType(data['image'], 'String');
      }
      if (data.hasOwnProperty('env_vars')) {
        obj['env_vars'] = ApiClient.convertToType(data['env_vars'], {'String': 'String'});
      }
      if (data.hasOwnProperty('max_concurrency')) {
        obj['max_concurrency'] = ApiClient.convertToType(data['max_concurrency'], 'Integer');
      }
    }
    return obj;
  }

  /**
   * Name of this group. Must be different than the image name. Can ony contain alphanumeric, -, and _.
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * Time when image first used/created.
   * @member {Date} created_at
   */
  exports.prototype['created_at'] = undefined;
  /**
   * Name of Docker image to use in this group. You should include the image tag, which should be a version number, to be more accurate. Can be overridden on a per job basis with job.image.
   * @member {String} image
   */
  exports.prototype['image'] = undefined;
  /**
   * User defined environment variables that will be passed in to each job in this group.
   * @member {Object.<String, String>} env_vars
   */
  exports.prototype['env_vars'] = undefined;
  /**
   * The maximum number of jobs that will run at the exact same time in this group.
   * @member {Integer} max_concurrency
   */
  exports.prototype['max_concurrency'] = undefined;




  return exports;
}));


