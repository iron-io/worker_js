(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', '../model/JobsWrapper', '../model/Error', '../model/JobWrapper', '../model/IdStatus', '../model/Complete', '../model/Start', '../model/NewJobsWrapper'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/JobsWrapper'), require('../model/Error'), require('../model/JobWrapper'), require('../model/IdStatus'), require('../model/Complete'), require('../model/Start'), require('../model/NewJobsWrapper'));
  } else {
    // Browser globals (root is window)
    if (!root.IronTitan) {
      root.IronTitan = {};
    }
    root.IronTitan.JobsApi = factory(root.IronTitan.ApiClient, root.IronTitan.JobsWrapper, root.IronTitan.Error, root.IronTitan.JobWrapper, root.IronTitan.IdStatus, root.IronTitan.Complete, root.IronTitan.Start, root.IronTitan.NewJobsWrapper);
  }
}(this, function(ApiClient, JobsWrapper, Error, JobWrapper, IdStatus, Complete, Start, NewJobsWrapper) {
  'use strict';

  /**
   * Jobs service.
   * @module api/JobsApi
   * @version 0.3.10
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
     * Callback function to receive the result of the groupsNameJobsGet operation.
     * @callback module:api/JobsApi~groupsNameJobsGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/JobsWrapper} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get job list by group name.
     * This will list jobs for a particular group.
     * @param {String} name Name of group for this set of jobs.
     * @param {Object} opts Optional parameters
     * @param {Date} opts.createdAfter Will return jobs created after this time. In RFC3339 format.
     * @param {Integer} opts.n Number of jobs to return.
     * @param {module:api/JobsApi~groupsNameJobsGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/JobsWrapper}
     */
    this.groupsNameJobsGet = function(name, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'name' is set
      if (name == undefined || name == null) {
        throw "Missing the required parameter 'name' when calling groupsNameJobsGet";
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
        '/groups/{name}/jobs', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the groupsNameJobsIdCancelPost operation.
     * @callback module:api/JobsApi~groupsNameJobsIdCancelPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/JobWrapper} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Cancel a job.
     * Cancels a job in delayed, queued or running status. The worker may continue to run a running job. reason is set to `client_request`. The job&#39;s completed_at field is set to the current time on the jobserver.
     * @param {String} name Name of group for this set of jobs.
     * @param {String} id Job id
     * @param {module:api/JobsApi~groupsNameJobsIdCancelPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/JobWrapper}
     */
    this.groupsNameJobsIdCancelPost = function(name, id, callback) {
      var postBody = null;

      // verify the required parameter 'name' is set
      if (name == undefined || name == null) {
        throw "Missing the required parameter 'name' when calling groupsNameJobsIdCancelPost";
      }

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw "Missing the required parameter 'id' when calling groupsNameJobsIdCancelPost";
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
        '/groups/{name}/jobs/{id}/cancel', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the groupsNameJobsIdDelete operation.
     * @callback module:api/JobsApi~groupsNameJobsIdDeleteCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete the job.
     * Delete only succeeds if job status is one of `succeeded\n| failed | cancelled`. Cancel a job if it is another state and needs to\nbe deleted.  All information about the job, including the log, is\nirretrievably lost when this is invoked.\n
     * @param {String} name Name of group for this set of jobs.
     * @param {String} id Job id
     * @param {module:api/JobsApi~groupsNameJobsIdDeleteCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.groupsNameJobsIdDelete = function(name, id, callback) {
      var postBody = null;

      // verify the required parameter 'name' is set
      if (name == undefined || name == null) {
        throw "Missing the required parameter 'name' when calling groupsNameJobsIdDelete";
      }

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw "Missing the required parameter 'id' when calling groupsNameJobsIdDelete";
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
      var returnType = null;

      return this.apiClient.callApi(
        '/groups/{name}/jobs/{id}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the groupsNameJobsIdErrorPost operation.
     * @callback module:api/JobsApi~groupsNameJobsIdErrorPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/JobWrapper} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Mark job as failed.
     * Job is marked as failed if it was in a valid state. Job&#39;s `finished_at` time is initialized.
     * @param {String} name Name of group for this set of jobs.
     * @param {String} id Job id
     * @param {module:model/Complete} body 
     * @param {module:api/JobsApi~groupsNameJobsIdErrorPostCallback} callback The callback function, accepting three arguments: error, data, response
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
     * Callback function to receive the result of the groupsNameJobsIdGet operation.
     * @callback module:api/JobsApi~groupsNameJobsIdGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/JobWrapper} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Gets job by id
     * Gets a job by id.
     * @param {String} name Name of group for this set of jobs.
     * @param {String} id Job id
     * @param {module:api/JobsApi~groupsNameJobsIdGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/JobWrapper}
     */
    this.groupsNameJobsIdGet = function(name, id, callback) {
      var postBody = null;

      // verify the required parameter 'name' is set
      if (name == undefined || name == null) {
        throw "Missing the required parameter 'name' when calling groupsNameJobsIdGet";
      }

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw "Missing the required parameter 'id' when calling groupsNameJobsIdGet";
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
        '/groups/{name}/jobs/{id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the groupsNameJobsIdLogGet operation.
     * @callback module:api/JobsApi~groupsNameJobsIdLogGetCallback
     * @param {String} error Error message, if any.
     * @param {'String'} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get the log of a completed job.
     * Retrieves the log from log storage.
     * @param {String} name Name of group for this set of jobs.
     * @param {String} id Job id
     * @param {module:api/JobsApi~groupsNameJobsIdLogGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {'String'}
     */
    this.groupsNameJobsIdLogGet = function(name, id, callback) {
      var postBody = null;

      // verify the required parameter 'name' is set
      if (name == undefined || name == null) {
        throw "Missing the required parameter 'name' when calling groupsNameJobsIdLogGet";
      }

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw "Missing the required parameter 'id' when calling groupsNameJobsIdLogGet";
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
      var accepts = ['text/plain'];
      var returnType = 'String';

      return this.apiClient.callApi(
        '/groups/{name}/jobs/{id}/log', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the groupsNameJobsIdLogPost operation.
     * @callback module:api/JobsApi~groupsNameJobsIdLogPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/JobWrapper} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Send in a log for storage.
     * Logs are sent after a job completes since they may be very large and the runner can process the next job.
     * @param {String} name Name of group for this set of jobs.
     * @param {String} id Job id
     * @param {File} log Output log for the job. Content-Type must be \&quot;text/plain; charset=utf-8\&quot;.
     * @param {module:api/JobsApi~groupsNameJobsIdLogPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/JobWrapper}
     */
    this.groupsNameJobsIdLogPost = function(name, id, log, callback) {
      var postBody = null;

      // verify the required parameter 'name' is set
      if (name == undefined || name == null) {
        throw "Missing the required parameter 'name' when calling groupsNameJobsIdLogPost";
      }

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw "Missing the required parameter 'id' when calling groupsNameJobsIdLogPost";
      }

      // verify the required parameter 'log' is set
      if (log == undefined || log == null) {
        throw "Missing the required parameter 'log' when calling groupsNameJobsIdLogPost";
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
        'log': log
      };

      var authNames = [];
      var contentTypes = ['multipart/form-data'];
      var accepts = ['application/json'];
      var returnType = JobWrapper;

      return this.apiClient.callApi(
        '/groups/{name}/jobs/{id}/log', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the groupsNameJobsIdRetryPost operation.
     * @callback module:api/JobsApi~groupsNameJobsIdRetryPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/JobWrapper} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retry a job.
     * \&quot;The /retry endpoint can be used to force a retry of jobs\nwith status succeeded or cancelled. It can also be used to retry jobs\nthat in the failed state, but whose max_retries field is 0. The retried\njob will continue to have max_retries = 0.\&quot;\n
     * @param {String} name Name of group for this set of jobs.
     * @param {String} id Job id
     * @param {module:api/JobsApi~groupsNameJobsIdRetryPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/JobWrapper}
     */
    this.groupsNameJobsIdRetryPost = function(name, id, callback) {
      var postBody = null;

      // verify the required parameter 'name' is set
      if (name == undefined || name == null) {
        throw "Missing the required parameter 'name' when calling groupsNameJobsIdRetryPost";
      }

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw "Missing the required parameter 'id' when calling groupsNameJobsIdRetryPost";
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
        '/groups/{name}/jobs/{id}/retry', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the groupsNameJobsIdStartPost operation.
     * @callback module:api/JobsApi~groupsNameJobsIdStartPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/JobWrapper} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Mark job as started, ie: status = &#39;running&#39;
     * Job status is changed to &#39;running&#39; if it was in a valid state before. Job&#39;s `started_at` time is initialized.
     * @param {String} name Name of group for this set of jobs.
     * @param {String} id Job id
     * @param {module:model/Start} body 
     * @param {module:api/JobsApi~groupsNameJobsIdStartPostCallback} callback The callback function, accepting three arguments: error, data, response
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
     * @callback module:api/JobsApi~groupsNameJobsIdSuccessPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/JobWrapper} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Mark job as succeeded.
     * Job status is changed to succeeded if it was in a valid state before. Job&#39;s `completed_at` time is initialized.
     * @param {String} name Name of group for this set of jobs.
     * @param {String} id Job id
     * @param {module:model/Complete} body 
     * @param {module:api/JobsApi~groupsNameJobsIdSuccessPostCallback} callback The callback function, accepting three arguments: error, data, response
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

    /**
     * Callback function to receive the result of the groupsNameJobsIdTouchPost operation.
     * @callback module:api/JobsApi~groupsNameJobsIdTouchPostCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Extend job timeout.
     * Consumers can sometimes take a while to run the task after accepting it.  An example is when the runner does not have the docker image locally, it can spend a significant time downloading the image.\nIf the timeout is small, the job may never get to run, or run but not be accepted by Titan. Consumers can touch the job before it times out. Titan will reset the timeout, giving the consumer another timeout seconds to run the job.\nTouch is only valid while the job is in a running state. If touch fails, the runner may stop running the job.\n
     * @param {String} name Name of group for this set of jobs.
     * @param {String} id Job id
     * @param {module:api/JobsApi~groupsNameJobsIdTouchPostCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.groupsNameJobsIdTouchPost = function(name, id, callback) {
      var postBody = null;

      // verify the required parameter 'name' is set
      if (name == undefined || name == null) {
        throw "Missing the required parameter 'name' when calling groupsNameJobsIdTouchPost";
      }

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw "Missing the required parameter 'id' when calling groupsNameJobsIdTouchPost";
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
      var returnType = null;

      return this.apiClient.callApi(
        '/groups/{name}/jobs/{id}/touch', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the groupsNameJobsPost operation.
     * @callback module:api/JobsApi~groupsNameJobsPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/JobsWrapper} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Enqueue Job
     * Enqueues job(s). If any of the jobs is invalid, none of the jobs are enqueued.\n
     * @param {String} name name of the group.
     * @param {module:model/NewJobsWrapper} body Array of jobs to post.
     * @param {module:api/JobsApi~groupsNameJobsPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/JobsWrapper}
     */
    this.groupsNameJobsPost = function(name, body, callback) {
      var postBody = body;

      // verify the required parameter 'name' is set
      if (name == undefined || name == null) {
        throw "Missing the required parameter 'name' when calling groupsNameJobsPost";
      }

      // verify the required parameter 'body' is set
      if (body == undefined || body == null) {
        throw "Missing the required parameter 'body' when calling groupsNameJobsPost";
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
      var returnType = JobsWrapper;

      return this.apiClient.callApi(
        '/groups/{name}/jobs', 'POST',
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
     * Gets the next job in the queue, ready for processing. Titan may return &lt;=n jobs. Consumers should start processing jobs in order. Each returned job is set to `status` \&quot;running\&quot; and `started_at` is set to the current time. No other consumer can retrieve this job.
     * @param {Object} opts Optional parameters
     * @param {Integer} opts.n Number of jobs to return. (default to 1)
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
  };

  return exports;
}));
