(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', '../model/Error', '../model/JobWrapper', '../model/Log', '../model/JobsWrapper', '../model/NewJobsWrapper'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/Error'), require('../model/JobWrapper'), require('../model/Log'), require('../model/JobsWrapper'), require('../model/NewJobsWrapper'));
  } else {
    // Browser globals (root is window)
    if (!root.IronTitan) {
      root.IronTitan = {};
    }
    root.IronTitan.JobsApi = factory(root.IronTitan.ApiClient, root.IronTitan.Error, root.IronTitan.JobWrapper, root.IronTitan.Log, root.IronTitan.JobsWrapper, root.IronTitan.NewJobsWrapper);
  }
}(this, function(ApiClient, Error, JobWrapper, Log, JobsWrapper, NewJobsWrapper) {
  'use strict';

  /**
   * Jobs service.
   * @module api/JobsApi
   * @version 0.1.1
   */

  /**
   * Constructs a new JobsApi. 
   * @alias module:api/JobsApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use, default to {@link module:ApiClient#instance}
   * if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the jobIdCancelPost operation.
     * @callback module:api/JobsApi~jobIdCancelPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/JobWrapper} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Cancel a job.
     * This will prevent a job from running. TODO: should we attempt to kill a running job?
     * @param {String} id Job id
     * @param {module:api/JobsApi~jobIdCancelPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/JobWrapper}
     */
    this.jobIdCancelPost = function(id, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw "Missing the required parameter 'id' when calling jobIdCancelPost";
      }


      var pathParams = {
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
        '/job/{id}/cancel', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the jobIdGet operation.
     * @callback module:api/JobsApi~jobIdGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/JobWrapper} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Gets job by id
     * Gets a job by id.
     * @param {String} id Job id
     * @param {module:api/JobsApi~jobIdGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/JobWrapper}
     */
    this.jobIdGet = function(id, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw "Missing the required parameter 'id' when calling jobIdGet";
      }


      var pathParams = {
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
        '/job/{id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the jobIdLogGet operation.
     * @callback module:api/JobsApi~jobIdLogGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Log} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get the log of a completed job.
     * Retrieves the log from log storage.
     * @param {String} id Job id
     * @param {module:api/JobsApi~jobIdLogGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/Log}
     */
    this.jobIdLogGet = function(id, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw "Missing the required parameter 'id' when calling jobIdLogGet";
      }


      var pathParams = {
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
      var returnType = Log;

      return this.apiClient.callApi(
        '/job/{id}/log', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the jobIdPatch operation.
     * @callback module:api/JobsApi~jobIdPatchCallback
     * @param {String} error Error message, if any.
     * @param {module:model/JobWrapper} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update a job
     * Typically used to update status on error/completion. TODO: only allow &#39;status&#39; field.
     * @param {String} id Job id
     * @param {module:model/JobWrapper} body Job data to post
     * @param {module:api/JobsApi~jobIdPatchCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/JobWrapper}
     */
    this.jobIdPatch = function(id, body, callback) {
      var postBody = body;

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw "Missing the required parameter 'id' when calling jobIdPatch";
      }

      // verify the required parameter 'body' is set
      if (body == undefined || body == null) {
        throw "Missing the required parameter 'body' when calling jobIdPatch";
      }


      var pathParams = {
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
        '/job/{id}', 'PATCH',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the jobIdRetryPost operation.
     * @callback module:api/JobsApi~jobIdRetryPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/JobWrapper} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retry a job.
     * If a job fails, you can retry the job with the original payload.
     * @param {String} id Job id
     * @param {module:api/JobsApi~jobIdRetryPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/JobWrapper}
     */
    this.jobIdRetryPost = function(id, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw "Missing the required parameter 'id' when calling jobIdRetryPost";
      }


      var pathParams = {
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
        '/job/{id}/retry', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the jobsGet operation.
     * @callback module:api/JobsApi~jobsGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/JobsWrapper} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get next job.
     * Gets the next job in the queue, ready for processing.
     * @param {Object} opts Optional parameters
     * @param {Integer} opts.n Number of jobs to return.
     * @param {module:api/JobsApi~jobsGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/JobsWrapper}
     */
    this.jobsGet = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'n': opts['n']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = JobsWrapper;

      return this.apiClient.callApi(
        '/jobs', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the jobsNameGet operation.
     * @callback module:api/JobsApi~jobsNameGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/JobsWrapper} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get job list by name.
     * Gets the next job in the queue, ready for processing.
     * @param {String} name Name of this set of jobs.
     * @param {Object} opts Optional parameters
     * @param {Date} opts.createdAfter Will return jobs created after this time. In RFC3339 format.
     * @param {Integer} opts.n Number of jobs to return.
     * @param {module:api/JobsApi~jobsNameGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/JobsWrapper}
     */
    this.jobsNameGet = function(name, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'name' is set
      if (name == undefined || name == null) {
        throw "Missing the required parameter 'name' when calling jobsNameGet";
      }


      var pathParams = {
        'name': name
      };
      var queryParams = {
        'created_after': opts['createdAfter'],
        'n': opts['n']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = JobsWrapper;

      return this.apiClient.callApi(
        '/jobs/{name}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the jobsPost operation.
     * @callback module:api/JobsApi~jobsPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/JobsWrapper} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Enqueue Job
     * Enqueues a job.
     * @param {module:model/NewJobsWrapper} body Array of jobs to post.
     * @param {module:api/JobsApi~jobsPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/JobsWrapper}
     */
    this.jobsPost = function(body, callback) {
      var postBody = body;

      // verify the required parameter 'body' is set
      if (body == undefined || body == null) {
        throw "Missing the required parameter 'body' when calling jobsPost";
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
      var returnType = JobsWrapper;

      return this.apiClient.callApi(
        '/jobs', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
