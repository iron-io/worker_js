(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/GroupsWrapper', 'model/Error', 'model/GroupWrapper'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/GroupsWrapper'), require('../model/Error'), require('../model/GroupWrapper'));
  } else {
    // Browser globals (root is window)
    if (!root.IronTitan) {
      root.IronTitan = {};
    }
    root.IronTitan.GroupsApi = factory(root.IronTitan.ApiClient, root.IronTitan.GroupsWrapper, root.IronTitan.Error, root.IronTitan.GroupWrapper);
  }
}(this, function(ApiClient, GroupsWrapper, Error, GroupWrapper) {
  'use strict';

  /**
   * Groups service.
   * @module api/GroupsApi
   * @version 0.4.4
   */

  /**
   * Constructs a new GroupsApi. 
   * @alias module:api/GroupsApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the groupsGet operation.
     * @callback module:api/GroupsApi~groupsGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/GroupsWrapper} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get all group names.
     * Get a list of all the groups in the system.
     * @param {module:api/GroupsApi~groupsGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/GroupsWrapper}
     */
    this.groupsGet = function(callback) {
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = GroupsWrapper;

      return this.apiClient.callApi(
        '/groups', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the groupsNameGet operation.
     * @callback module:api/GroupsApi~groupsNameGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/GroupWrapper} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get information for a group.
     * This gives more details about a job group, such as statistics.
     * @param {String} name name of the group.
     * @param {module:api/GroupsApi~groupsNameGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/GroupWrapper}
     */
    this.groupsNameGet = function(name, callback) {
      var postBody = null;

      // verify the required parameter 'name' is set
      if (name == undefined || name == null) {
        throw "Missing the required parameter 'name' when calling groupsNameGet";
      }


      var pathParams = {
        'name': name
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = GroupWrapper;

      return this.apiClient.callApi(
        '/groups/{name}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the groupsNamePut operation.
     * @callback module:api/GroupsApi~groupsNamePutCallback
     * @param {String} error Error message, if any.
     * @param {module:model/GroupWrapper} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create/update a job group.
     * You can set group level settings here. 
     * @param {module:model/GroupWrapper} body Group to post.
     * @param {module:api/GroupsApi~groupsNamePutCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/GroupWrapper}
     */
    this.groupsNamePut = function(body, callback) {
      var postBody = body;

      // verify the required parameter 'body' is set
      if (body == undefined || body == null) {
        throw "Missing the required parameter 'body' when calling groupsNamePut";
      }


      var pathParams = {
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = GroupWrapper;

      return this.apiClient.callApi(
        '/groups/{name}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the groupsPost operation.
     * @callback module:api/GroupsApi~groupsPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/GroupWrapper} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Post new group
     * Insert a new job group
     * @param {module:model/GroupWrapper} body Group to post.
     * @param {module:api/GroupsApi~groupsPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/GroupWrapper}
     */
    this.groupsPost = function(body, callback) {
      var postBody = body;

      // verify the required parameter 'body' is set
      if (body == undefined || body == null) {
        throw "Missing the required parameter 'body' when calling groupsPost";
      }


      var pathParams = {
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = GroupWrapper;

      return this.apiClient.callApi(
        '/groups', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
