(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', '../model/IdStatus', '../model/Error', '../model/JobWrapper', '../model/JobsWrapper', '../model/NewJobsWrapper'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/IdStatus'), require('../model/Error'), require('../model/JobWrapper'), require('../model/JobsWrapper'), require('../model/NewJobsWrapper'));
  } else {
    // Browser globals (root is window)
    if (!root.IronTitan) {
      root.IronTitan = {};
    }
    root.IronTitan.CoreApi = factory(root.IronTitan.ApiClient, root.IronTitan.IdStatus, root.IronTitan.Error, root.IronTitan.JobWrapper, root.IronTitan.JobsWrapper, root.IronTitan.NewJobsWrapper);
  }
}(this, function(ApiClient, IdStatus, Error, JobWrapper, JobsWrapper, NewJobsWrapper) {
  'use strict';

  /**
   * Core service.
   * @module api/CoreApi
   * @version 0.2.17
   */

  /**
   * Constructs a new CoreApi. 
   * @alias module:api/CoreApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use, default to {@link module:ApiClient#instance}
   * if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the jobIdDelete operation.
     * @callback module:api/CoreApi~jobIdDeleteCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete the job.
     * Delete only succeeds if job status is one of `succeeded\n| failed | cancelled`. Cancel a job if it is another state and needs to\nbe deleted.  All information about the job, including the log, is\nirretrievably lost when this is invoked.
     * @param {String} id Job id
     * @param {module:api/CoreApi~jobIdDeleteCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.jobIdDelete = function(id, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw "Missing the required parameter 'id' when calling jobIdDelete";
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
      var returnType = null;

      return this.apiClient.callApi(
        '/job/{id}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the jobIdGet operation.
     * @callback module:api/CoreApi~jobIdGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/JobWrapper} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Gets job by id
     * Gets a job by id.
     * @param {String} id Job id
     * @param {module:api/CoreApi~jobIdGetCallback} callback The callback function, accepting three arguments: error, data, response
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
     * Callback function to receive the result of the jobsConsumeGet operation.
     * @callback module:api/CoreApi~jobsConsumeGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/JobsWrapper} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get next job.
     * Gets the next job in the queue, ready for processing. Titan may return &lt;=n jobs. Consumers should start processing jobs in order. Each returned job is set to `status` \&quot;running\&quot; and `started_at` is set to the current time. No other consumer can retrieve this job.
     * @param {Object} opts Optional parameters
     * @param {Integer} opts.n Number of jobs to return. (default to 1)
     * @param {module:api/CoreApi~jobsConsumeGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/JobsWrapper}
     */
    this.jobsConsumeGet = function(opts, callback) {
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
        '/jobs/consume', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the jobsPost operation.
     * @callback module:api/CoreApi~jobsPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/JobsWrapper} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Enqueue Job
     * Enqueues job(s). If any of the jobs is invalid, none of the jobs are enqueued.
     * @param {module:model/NewJobsWrapper} body Array of jobs to post.
     * @param {module:api/CoreApi~jobsPostCallback} callback The callback function, accepting three arguments: error, data, response
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
