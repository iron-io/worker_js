(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', './Group'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Group'));
  } else {
    // Browser globals (root is window)
    if (!root.IronTitan) {
      root.IronTitan = {};
    }
    root.IronTitan.GroupsWrapper = factory(root.IronTitan.ApiClient, root.IronTitan.Group);
  }
}(this, function(ApiClient, Group) {
  'use strict';

  /**
   * The GroupsWrapper model module.
   * @module model/GroupsWrapper
   * @version 0.3.5
   */

  /**
   * Constructs a new <code>GroupsWrapper</code>.
   * @alias module:model/GroupsWrapper
   * @class
   * @param groups
   */
  var exports = function(groups) {

    this['groups'] = groups;
  };

  /**
   * Constructs a <code>GroupsWrapper</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GroupsWrapper} obj Optional instance to populate.
   * @return {module:model/GroupsWrapper} The populated <code>GroupsWrapper</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('groups')) {
        obj['groups'] = ApiClient.convertToType(data['groups'], [Group]);
      }
    }
    return obj;
  }


  /**
   * @member {Array.<module:model/Group>} groups
   */
  exports.prototype['groups'] = undefined;




  return exports;
}));
