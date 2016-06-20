(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/Complete', 'model/Error', 'model/JobWrapper', 'model/IdStatus', 'model/Start'], factory);
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
   * @version 0.4.0
   */

  /**
   * Constructs a new RunnerApi. 
   * @alias module:api/RunnerApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the groupsNameJobsIdErrorPost operation.
     * @callback module:api/RunnerApi~groupsNameJobsIdErrorPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/JobWrapper} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Mark job as failed.
     * Job is marked as failed if it was in a valid state. Job&#39;s &#x60;finished_at&#x60; time is initialized.
     * @param {String} name Name of group for this set of jobs.
     * @param {String} id Job id
     * @param {module:model/Complete} body 
     * @param {module:api/RunnerApi~groupsNameJobsIdErrorPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/JobWrapper}
     */
    this.groupsNameJobsIdErrorPost = function(name, id, body, callback) {
      var postBody = body;

      // verify the required parameter 'name' is set
      if (name == undefined || name == null) {
        throw "Missing the required parameter 'name' when calling groupsNameJobsIdErrorPost";
      }

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw "Missing the required parameter 'id' when calling groupsNameJobsIdErrorPost";
      }

      // verify the required parameter 'body' is set
      if (body == undefined || body == null) {
        throw "Missing the required parameter 'body' when calling groupsNameJobsIdErrorPost";
      }


      var pathParams = {
        'name': name,
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
        '/groups/{name}/jobs/{id}/error', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the groupsNameJobsIdStartPost operation.
     * @callback module:api/RunnerApi~groupsNameJobsIdStartPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/JobWrapper} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Mark job as started, ie: status &#x3D; &#39;running&#39;
     * Job status is changed to &#39;running&#39; if it was in a valid state before. Job&#39;s &#x60;started_at&#x60; time is initialized.
     * @param {String} name Name of group for this set of jobs.
     * @param {String} id Job id
     * @param {module:model/Start} body 
     * @param {module:api/RunnerApi~groupsNameJobsIdStartPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/JobWrapper}
     */
    this.groupsNameJobsIdStartPost = function(name, id, body, callback) {
      var postBody = body;

      // verify the required parameter 'name' is set
      if (name == undefined || name == null) {
        throw "Missing the required parameter 'name' when calling groupsNameJobsIdStartPost";
      }

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw "Missing the required parameter 'id' when calling groupsNameJobsIdStartPost";
      }

      // verify the required parameter 'body' is set
      if (body == undefined || body == null) {
        throw "Missing the required parameter 'body' when calling groupsNameJobsIdStartPost";
      }


      var pathParams = {
        'name': name,
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
        '/groups/{name}/jobs/{id}/start', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the groupsNameJobsIdSuccessPost operation.
     * @callback module:api/RunnerApi~groupsNameJobsIdSuccessPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/JobWrapper} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Mark job as succeeded.
     * Job status is changed to succeeded if it was in a valid state before. Job&#39;s &#x60;completed_at&#x60; time is initialized.
     * @param {String} name Name of group for this set of jobs.
     * @param {String} id Job id
     * @param {module:model/Complete} body 
     * @param {module:api/RunnerApi~groupsNameJobsIdSuccessPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/JobWrapper}
     */
    this.groupsNameJobsIdSuccessPost = function(name, id, body, callback) {
      var postBody = body;

      // verify the required parameter 'name' is set
      if (name == undefined || name == null) {
        throw "Missing the required parameter 'name' when calling groupsNameJobsIdSuccessPost";
      }

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw "Missing the required parameter 'id' when calling groupsNameJobsIdSuccessPost";
      }

      // verify the required parameter 'body' is set
      if (body == undefined || body == null) {
        throw "Missing the required parameter 'body' when calling groupsNameJobsIdSuccessPost";
      }


      var pathParams = {
        'name': name,
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
        '/groups/{name}/jobs/{id}/success', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
