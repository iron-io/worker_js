(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', '../model/Error', '../model/JobWrapper', '../model/IdStatus', '../model/JobsWrapper', '../model/NewJobsWrapper'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/Error'), require('../model/JobWrapper'), require('../model/IdStatus'), require('../model/JobsWrapper'), require('../model/NewJobsWrapper'));
  } else {
    // Browser globals (root is window)
    if (!root.IronTitan) {
      root.IronTitan = {};
    }
    root.IronTitan.JobsApi = factory(root.IronTitan.ApiClient, root.IronTitan.Error, root.IronTitan.JobWrapper, root.IronTitan.IdStatus, root.IronTitan.JobsWrapper, root.IronTitan.NewJobsWrapper);
  }
}(this, function(ApiClient, Error, JobWrapper, IdStatus, JobsWrapper, NewJobsWrapper) {
  'use strict';

  /**
   * Jobs service.
   * @module api/JobsApi
   * @version 0.2.11
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
     * Cancels a job in delayed, queued or running status. The worker may continue to run a running job. reason is set to `client_request`.
     * @param {String} id Job id
     * @param {String} details Human-readable detailed message explaining cancellation reason.
     * @param {module:api/JobsApi~jobIdCancelPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/JobWrapper}
     */
    this.jobIdCancelPost = function(id, details, callback) {
      var postBody = details;

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw "Missing the required parameter 'id' when calling jobIdCancelPost";
      }

      // verify the required parameter 'details' is set
      if (details == undefined || details == null) {
        throw "Missing the required parameter 'details' when calling jobIdCancelPost";
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
     * Callback function to receive the result of the jobIdDelete operation.
     * @callback module:api/JobsApi~jobIdDeleteCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete the job.
     * Delete only succeeds if job status is one of `succeeded\n| failed | cancelled`. Cancel a job if it is another state and needs to\nbe deleted.  All information about the job, including the log, is\nirretrievably lost when this is invoked.
     * @param {String} id Job id
     * @param {module:api/JobsApi~jobIdDeleteCallback} callback The callback function, accepting three arguments: error, data, response
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
     * Callback function to receive the result of the jobIdFailPost operation.
     * @callback module:api/JobsApi~jobIdFailPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/JobWrapper} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Mark job as failed.
     * Job is marked as failed if it was in a valid state. Job&#39;s `completed_at` time is initialized.
     * @param {String} id Job id
     * @param {String} reason Reason for job failure.
     * @param {String} details Details of job failure.
     * @param {File} log Output log for the job. Content-Type must be \&quot;text/plain; charset=utf-8\&quot;.
     * @param {module:api/JobsApi~jobIdFailPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/JobWrapper}
     */
    this.jobIdFailPost = function(id, reason, details, log, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw "Missing the required parameter 'id' when calling jobIdFailPost";
      }

      // verify the required parameter 'reason' is set
      if (reason == undefined || reason == null) {
        throw "Missing the required parameter 'reason' when calling jobIdFailPost";
      }

      // verify the required parameter 'details' is set
      if (details == undefined || details == null) {
        throw "Missing the required parameter 'details' when calling jobIdFailPost";
      }

      // verify the required parameter 'log' is set
      if (log == undefined || log == null) {
        throw "Missing the required parameter 'log' when calling jobIdFailPost";
      }


      var pathParams = {
        'id': id
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
        'reason': reason,
        'details': details,
        'log': log
      };

      var authNames = [];
      var contentTypes = ['multipart/form-data'];
      var accepts = ['application/json'];
      var returnType = JobWrapper;

      return this.apiClient.callApi(
        '/job/{id}/fail', 'POST',
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
     * @param {'String'} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get the log of a completed job.
     * Retrieves the log from log storage.
     * @param {String} id Job id
     * @param {module:api/JobsApi~jobIdLogGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {'String'}
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
      var accepts = ['text/plain'];
      var returnType = 'String';

      return this.apiClient.callApi(
        '/job/{id}/log', 'GET',
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
     * The /retry endpoint can be used to force a retry of jobs with status succeeded or cancelled. It can also be used to retry jobs that in the failed state, but whose max_retries field is 0. The retried job will continue to have max_retries = 0.
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
     * Callback function to receive the result of the jobIdSuccessPost operation.
     * @callback module:api/JobsApi~jobIdSuccessPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/JobWrapper} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Mark job as succeeded.
     * Job status is changed to succeeded if it was in a valid state before. Job&#39;s `completed_at` time is initialized.
     * @param {String} id Job id
     * @param {File} log Output log for the job. Content-Type must be \&quot;text/plain; charset=utf-8\&quot;.
     * @param {module:api/JobsApi~jobIdSuccessPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/JobWrapper}
     */
    this.jobIdSuccessPost = function(id, log, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw "Missing the required parameter 'id' when calling jobIdSuccessPost";
      }

      // verify the required parameter 'log' is set
      if (log == undefined || log == null) {
        throw "Missing the required parameter 'log' when calling jobIdSuccessPost";
      }


      var pathParams = {
        'id': id
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
        'log': log
      };

      var authNames = [];
      var contentTypes = ['multipart/form-data'];
      var accepts = ['application/json'];
      var returnType = JobWrapper;

      return this.apiClient.callApi(
        '/job/{id}/success', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the jobIdTouchPost operation.
     * @callback module:api/JobsApi~jobIdTouchPostCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Extend job timeout.
     * Consumers can sometimes take a while to run the task after accepting it.  An example is when the runner does not have the docker image locally, it can spend a significant time downloading the image.\nIf the timeout is small, the job may never get to run, or run but not be accepted by Titan. Consumers can touch the job before it times out. Titan will reset the timeout, giving the consumer another timeout seconds to run the job.\nTouch is only valid while the job is in a running state. If touch fails, the runner may stop running the job.
     * @param {String} id Job id
     * @param {module:api/JobsApi~jobIdTouchPostCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.jobIdTouchPost = function(id, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw "Missing the required parameter 'id' when calling jobIdTouchPost";
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
        '/job/{id}/touch', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the jobsConsumeGet operation.
     * @callback module:api/JobsApi~jobsConsumeGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/JobsWrapper} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get next job.
     * Gets the next job in the queue, ready for processing. Titan may return &lt;=n jobs. Consumers should start processing jobs in order. Each returned job is set to `status` \&quot;running\&quot; and `started_at` is set to the current time. No other consumer can retrieve this job.
     * @param {Object} opts Optional parameters
     * @param {Integer} opts.n Number of jobs to return. (default to 1)
     * @param {module:api/JobsApi~jobsConsumeGetCallback} callback The callback function, accepting three arguments: error, data, response
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
     * Callback function to receive the result of the jobsGet operation.
     * @callback module:api/JobsApi~jobsGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/JobsWrapper} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Peek at list of jobs.
     * Get a list of active jobs. This endpoint can be used to observe the state of jobs in Titan. To run a job, use /jobs/consume. TODO: Needs pagination support.
     * @param {Object} opts Optional parameters
     * @param {Integer} opts.n Number of jobs to return. Titan may return &lt;=n jobs. Titan does not make any guarantees about job ordering, but jobs will not be repeated. To make sure you get unique jobs, use the cursor effectively. TODO: We don&#39;t actually support pagination. (default to 10)
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
     * Callback function to receive the result of the jobsPost operation.
     * @callback module:api/JobsApi~jobsPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/JobsWrapper} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Enqueue Job
     * Enqueues job(s). If any of the jobs is invalid, none of the jobs are enqueued.
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
