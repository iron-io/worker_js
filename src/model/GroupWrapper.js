(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/Group'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Group'));
  } else {
    // Browser globals (root is window)
    if (!root.IronTitan) {
      root.IronTitan = {};
    }
    root.IronTitan.GroupWrapper = factory(root.IronTitan.ApiClient, root.IronTitan.Group);
  }
}(this, function(ApiClient, Group) {
  'use strict';




  /**
   * The GroupWrapper model module.
   * @module model/GroupWrapper
   * @version 0.4.0
   */

  /**
   * Constructs a new <code>GroupWrapper</code>.
   * @alias module:model/GroupWrapper
   * @class
   * @param group
   */
  var exports = function(group) {
    var _this = this;

    _this['group'] = group;
  };

  /**
   * Constructs a <code>GroupWrapper</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GroupWrapper} obj Optional instance to populate.
   * @return {module:model/GroupWrapper} The populated <code>GroupWrapper</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('group')) {
        obj['group'] = Group.constructFromObject(data['group']);
      }
    }
    return obj;
  }

  /**
   * @member {module:model/Group} group
   */
  exports.prototype['group'] = undefined;




  return exports;
}));


