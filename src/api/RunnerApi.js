(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', '../model/Complete', '../model/Error', '../model/JobWrapper', '../model/IdStatus', '../model/Start'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/Complete'), require('../model/Error'), require('../model/JobWrapper'), require('../model/IdStatus'), require('../model/Start'));
  } else {
    // Browser globals (root is window)
    if (!root.IronTitan) {
      root.IronTitan = {};
    }
    root.IronTitan.RunnerApi = factory(root.IronTitan.ApiClient, root.IronTitan.Complete, root.IronTitan.Error, root.IronTitan.JobWrapper, root.IronTitan.IdStatus, root.IronTitan.Start);
  }
}(this, function(ApiClient, Complete, Error, JobWrapper, IdStatus, Start) {
  'use strict';

  /**
   * Runner service.
   * @module api/RunnerApi
   * @version 0.3.7
   */

  /**
   * Constructs a new RunnerApi. 
   * @alias module:api/RunnerApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use, default to {@link module:ApiClient#instance}
   * if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the groupsGroupNameJobsIdErrorPost operation.
     * @callback module:api/RunnerApi~groupsGroupNameJobsIdErrorPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/JobWrapper} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Mark job as failed.
     * Job is marked as failed if it was in a valid state. Job&#39;s `finished_at` time is initialized.
     * @param {String} groupName Name of group for this set of jobs.
     * @param {String} id Job id
     * @param {module:model/Complete} body 
     * @param {module:api/RunnerApi~groupsGroupNameJobsIdErrorPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/JobWrapper}
     */
    this.groupsGroupNameJobsIdErrorPost = function(groupName, id, body, callback) {
      var postBody = body;

      // verify the required parameter 'groupName' is set
      if (groupName == undefined || groupName == null) {
        throw "Missing the required parameter 'groupName' when calling groupsGroupNameJobsIdErrorPost";
      }

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw "Missing the required parameter 'id' when calling groupsGroupNameJobsIdErrorPost";
      }

      // verify the required parameter 'body' is set
      if (body == undefined || body == null) {
        throw "Missing the required parameter 'body' when calling groupsGroupNameJobsIdErrorPost";
      }


      var pathParams = {
        'group_name': groupName,
        'id': id
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
      var returnType = JobWrapper;

      return this.apiClient.callApi(
        '/groups/{group_name}/jobs/{id}/error', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the groupsGroupNameJobsIdStartPost operation.
     * @callback module:api/RunnerApi~groupsGroupNameJobsIdStartPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/JobWrapper} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Mark job as started, ie: status = &#39;running&#39;
     * Job status is changed to &#39;running&#39; if it was in a valid state before. Job&#39;s `started_at` time is initialized.
     * @param {String} groupName Name of group for this set of jobs.
     * @param {String} id Job id
     * @param {module:model/Start} body 
     * @param {module:api/RunnerApi~groupsGroupNameJobsIdStartPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/JobWrapper}
     */
    this.groupsGroupNameJobsIdStartPost = function(groupName, id, body, callback) {
      var postBody = body;

      // verify the required parameter 'groupName' is set
      if (groupName == undefined || groupName == null) {
        throw "Missing the required parameter 'groupName' when calling groupsGroupNameJobsIdStartPost";
      }

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw "Missing the required parameter 'id' when calling groupsGroupNameJobsIdStartPost";
      }

      // verify the required parameter 'body' is set
      if (body == undefined || body == null) {
        throw "Missing the required parameter 'body' when calling groupsGroupNameJobsIdStartPost";
      }


      var pathParams = {
        'group_name': groupName,
        'id': id
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
      var returnType = JobWrapper;

      return this.apiClient.callApi(
        '/groups/{group_name}/jobs/{id}/start', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the groupsGroupNameJobsIdSuccessPost operation.
     * @callback module:api/RunnerApi~groupsGroupNameJobsIdSuccessPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/JobWrapper} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Mark job as succeeded.
     * Job status is changed to succeeded if it was in a valid state before. Job&#39;s `completed_at` time is initialized.
     * @param {String} groupName Name of group for this set of jobs.
     * @param {String} id Job id
     * @param {module:model/Complete} body 
     * @param {module:api/RunnerApi~groupsGroupNameJobsIdSuccessPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/JobWrapper}
     */
    this.groupsGroupNameJobsIdSuccessPost = function(groupName, id, body, callback) {
      var postBody = body;

      // verify the required parameter 'groupName' is set
      if (groupName == undefined || groupName == null) {
        throw "Missing the required parameter 'groupName' when calling groupsGroupNameJobsIdSuccessPost";
      }

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw "Missing the required parameter 'id' when calling groupsGroupNameJobsIdSuccessPost";
      }

      // verify the required parameter 'body' is set
      if (body == undefined || body == null) {
        throw "Missing the required parameter 'body' when calling groupsGroupNameJobsIdSuccessPost";
      }


      var pathParams = {
        'group_name': groupName,
        'id': id
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
      var returnType = JobWrapper;

      return this.apiClient.callApi(
        '/groups/{group_name}/jobs/{id}/success', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
