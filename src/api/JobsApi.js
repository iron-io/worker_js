(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', '../model/JobsWrapper', '../model/Error', '../model/JobWrapper', '../model/IdStatus', '../model/Start', '../model/NewJobsWrapper'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/JobsWrapper'), require('../model/Error'), require('../model/JobWrapper'), require('../model/IdStatus'), require('../model/Start'), require('../model/NewJobsWrapper'));
  } else {
    // Browser globals (root is window)
    if (!root.IronTitan) {
      root.IronTitan = {};
    }
    root.IronTitan.JobsApi = factory(root.IronTitan.ApiClient, root.IronTitan.JobsWrapper, root.IronTitan.Error, root.IronTitan.JobWrapper, root.IronTitan.IdStatus, root.IronTitan.Start, root.IronTitan.NewJobsWrapper);
  }
}(this, function(ApiClient, JobsWrapper, Error, JobWrapper, IdStatus, Start, NewJobsWrapper) {
  'use strict';

  /**
   * Jobs service.
   * @module api/JobsApi
   * @version 0.3.3
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
     * Callback function to receive the result of the groupsGroupNameJobsGet operation.
     * @callback module:api/JobsApi~groupsGroupNameJobsGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/JobsWrapper} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get job list by group name.
     * This will list jobs for a particular group.
     * @param {String} groupName Name of group for this set of jobs.
     * @param {Object} opts Optional parameters
     * @param {Date} opts.createdAfter Will return jobs created after this time. In RFC3339 format.
     * @param {Integer} opts.n Number of jobs to return.
     * @param {module:api/JobsApi~groupsGroupNameJobsGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/JobsWrapper}
     */
    this.groupsGroupNameJobsGet = function(groupName, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'groupName' is set
      if (groupName == undefined || groupName == null) {
        throw "Missing the required parameter 'groupName' when calling groupsGroupNameJobsGet";
      }


      var pathParams = {
        'group_name': groupName
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
        '/groups/{group_name}/jobs', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the groupsGroupNameJobsIdCancelPost operation.
     * @callback module:api/JobsApi~groupsGroupNameJobsIdCancelPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/JobWrapper} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Cancel a job.
     * Cancels a job in delayed, queued or running status. The worker may continue to run a running job. reason is set to &#x60;client_request&#x60;.
     * @param {String} groupName Name of group for this set of jobs.
     * @param {String} id Job id
     * @param {module:api/JobsApi~groupsGroupNameJobsIdCancelPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/JobWrapper}
     */
    this.groupsGroupNameJobsIdCancelPost = function(groupName, id, callback) {
      var postBody = null;

      // verify the required parameter 'groupName' is set
      if (groupName == undefined || groupName == null) {
        throw "Missing the required parameter 'groupName' when calling groupsGroupNameJobsIdCancelPost";
      }

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw "Missing the required parameter 'id' when calling groupsGroupNameJobsIdCancelPost";
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
        '/groups/{group_name}/jobs/{id}/cancel', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the groupsGroupNameJobsIdDelete operation.
     * @callback module:api/JobsApi~groupsGroupNameJobsIdDeleteCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete the job.
     * Delete only succeeds if job status is one of &#x60;succeeded\n| failed | cancelled&#x60;. Cancel a job if it is another state and needs to\nbe deleted.  All information about the job, including the log, is\nirretrievably lost when this is invoked.\n
     * @param {String} groupName Name of group for this set of jobs.
     * @param {String} id Job id
     * @param {module:api/JobsApi~groupsGroupNameJobsIdDeleteCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.groupsGroupNameJobsIdDelete = function(groupName, id, callback) {
      var postBody = null;

      // verify the required parameter 'groupName' is set
      if (groupName == undefined || groupName == null) {
        throw "Missing the required parameter 'groupName' when calling groupsGroupNameJobsIdDelete";
      }

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw "Missing the required parameter 'id' when calling groupsGroupNameJobsIdDelete";
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
      var returnType = null;

      return this.apiClient.callApi(
        '/groups/{group_name}/jobs/{id}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the groupsGroupNameJobsIdErrorPost operation.
     * @callback module:api/JobsApi~groupsGroupNameJobsIdErrorPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/JobWrapper} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Mark job as failed.
     * Job is marked as failed if it was in a valid state. Job&#39;s &#x60;finished_at&#x60; time is initialized.
     * @param {String} groupName Name of group for this set of jobs.
     * @param {String} id Job id
     * @param {String} reason Reason for job failure.
     * @param {module:api/JobsApi~groupsGroupNameJobsIdErrorPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/JobWrapper}
     */
    this.groupsGroupNameJobsIdErrorPost = function(groupName, id, reason, callback) {
      var postBody = null;

      // verify the required parameter 'groupName' is set
      if (groupName == undefined || groupName == null) {
        throw "Missing the required parameter 'groupName' when calling groupsGroupNameJobsIdErrorPost";
      }

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw "Missing the required parameter 'id' when calling groupsGroupNameJobsIdErrorPost";
      }

      // verify the required parameter 'reason' is set
      if (reason == undefined || reason == null) {
        throw "Missing the required parameter 'reason' when calling groupsGroupNameJobsIdErrorPost";
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
        'reason': reason
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
     * Callback function to receive the result of the groupsGroupNameJobsIdGet operation.
     * @callback module:api/JobsApi~groupsGroupNameJobsIdGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/JobWrapper} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Gets job by id
     * Gets a job by id.
     * @param {String} groupName Name of group for this set of jobs.
     * @param {String} id Job id
     * @param {module:api/JobsApi~groupsGroupNameJobsIdGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/JobWrapper}
     */
    this.groupsGroupNameJobsIdGet = function(groupName, id, callback) {
      var postBody = null;

      // verify the required parameter 'groupName' is set
      if (groupName == undefined || groupName == null) {
        throw "Missing the required parameter 'groupName' when calling groupsGroupNameJobsIdGet";
      }

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw "Missing the required parameter 'id' when calling groupsGroupNameJobsIdGet";
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
        '/groups/{group_name}/jobs/{id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the groupsGroupNameJobsIdLogGet operation.
     * @callback module:api/JobsApi~groupsGroupNameJobsIdLogGetCallback
     * @param {String} error Error message, if any.
     * @param {'String'} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get the log of a completed job.
     * Retrieves the log from log storage.
     * @param {String} groupName Name of group for this set of jobs.
     * @param {String} id Job id
     * @param {module:api/JobsApi~groupsGroupNameJobsIdLogGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {'String'}
     */
    this.groupsGroupNameJobsIdLogGet = function(groupName, id, callback) {
      var postBody = null;

      // verify the required parameter 'groupName' is set
      if (groupName == undefined || groupName == null) {
        throw "Missing the required parameter 'groupName' when calling groupsGroupNameJobsIdLogGet";
      }

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw "Missing the required parameter 'id' when calling groupsGroupNameJobsIdLogGet";
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
      var accepts = ['text/plain'];
      var returnType = 'String';

      return this.apiClient.callApi(
        '/groups/{group_name}/jobs/{id}/log', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the groupsGroupNameJobsIdLogPost operation.
     * @callback module:api/JobsApi~groupsGroupNameJobsIdLogPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/JobWrapper} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Send in a log for storage.
     * Logs are sent after a job completes since they may be very large and the runner can process the next job.
     * @param {String} groupName Name of group for this set of jobs.
     * @param {String} id Job id
     * @param {File} log Output log for the job. Content-Type must be \&quot;text/plain; charset&#x3D;utf-8\&quot;.
     * @param {module:api/JobsApi~groupsGroupNameJobsIdLogPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/JobWrapper}
     */
    this.groupsGroupNameJobsIdLogPost = function(groupName, id, log, callback) {
      var postBody = null;

      // verify the required parameter 'groupName' is set
      if (groupName == undefined || groupName == null) {
        throw "Missing the required parameter 'groupName' when calling groupsGroupNameJobsIdLogPost";
      }

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw "Missing the required parameter 'id' when calling groupsGroupNameJobsIdLogPost";
      }

      // verify the required parameter 'log' is set
      if (log == undefined || log == null) {
        throw "Missing the required parameter 'log' when calling groupsGroupNameJobsIdLogPost";
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
        'log': log
      };

      var authNames = [];
      var contentTypes = ['multipart/form-data'];
      var accepts = ['application/json'];
      var returnType = JobWrapper;

      return this.apiClient.callApi(
        '/groups/{group_name}/jobs/{id}/log', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the groupsGroupNameJobsIdRetryPost operation.
     * @callback module:api/JobsApi~groupsGroupNameJobsIdRetryPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/JobWrapper} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retry a job.
     * \&quot;The /retry endpoint can be used to force a retry of jobs\nwith status succeeded or cancelled. It can also be used to retry jobs\nthat in the failed state, but whose max_retries field is 0. The retried\njob will continue to have max_retries &#x3D; 0.\&quot;\n
     * @param {String} groupName Name of group for this set of jobs.
     * @param {String} id Job id
     * @param {module:api/JobsApi~groupsGroupNameJobsIdRetryPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/JobWrapper}
     */
    this.groupsGroupNameJobsIdRetryPost = function(groupName, id, callback) {
      var postBody = null;

      // verify the required parameter 'groupName' is set
      if (groupName == undefined || groupName == null) {
        throw "Missing the required parameter 'groupName' when calling groupsGroupNameJobsIdRetryPost";
      }

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw "Missing the required parameter 'id' when calling groupsGroupNameJobsIdRetryPost";
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
        '/groups/{group_name}/jobs/{id}/retry', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the groupsGroupNameJobsIdStartPost operation.
     * @callback module:api/JobsApi~groupsGroupNameJobsIdStartPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/JobWrapper} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Mark job as started, ie: status &#x3D; &#39;running&#39;
     * Job status is changed to &#39;running&#39; if it was in a valid state before. Job&#39;s &#x60;started_at&#x60; time is initialized.
     * @param {String} groupName Name of group for this set of jobs.
     * @param {String} id Job id
     * @param {module:model/Start} body 
     * @param {module:api/JobsApi~groupsGroupNameJobsIdStartPostCallback} callback The callback function, accepting three arguments: error, data, response
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
     * @callback module:api/JobsApi~groupsGroupNameJobsIdSuccessPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/JobWrapper} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Mark job as succeeded.
     * Job status is changed to succeeded if it was in a valid state before. Job&#39;s &#x60;completed_at&#x60; time is initialized.
     * @param {String} groupName Name of group for this set of jobs.
     * @param {String} id Job id
     * @param {module:api/JobsApi~groupsGroupNameJobsIdSuccessPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/JobWrapper}
     */
    this.groupsGroupNameJobsIdSuccessPost = function(groupName, id, callback) {
      var postBody = null;

      // verify the required parameter 'groupName' is set
      if (groupName == undefined || groupName == null) {
        throw "Missing the required parameter 'groupName' when calling groupsGroupNameJobsIdSuccessPost";
      }

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw "Missing the required parameter 'id' when calling groupsGroupNameJobsIdSuccessPost";
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

    /**
     * Callback function to receive the result of the groupsGroupNameJobsIdTouchPost operation.
     * @callback module:api/JobsApi~groupsGroupNameJobsIdTouchPostCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Extend job timeout.
     * Consumers can sometimes take a while to run the task after accepting it.  An example is when the runner does not have the docker image locally, it can spend a significant time downloading the image.\nIf the timeout is small, the job may never get to run, or run but not be accepted by Titan. Consumers can touch the job before it times out. Titan will reset the timeout, giving the consumer another timeout seconds to run the job.\nTouch is only valid while the job is in a running state. If touch fails, the runner may stop running the job.\n
     * @param {String} groupName Name of group for this set of jobs.
     * @param {String} id Job id
     * @param {module:api/JobsApi~groupsGroupNameJobsIdTouchPostCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.groupsGroupNameJobsIdTouchPost = function(groupName, id, callback) {
      var postBody = null;

      // verify the required parameter 'groupName' is set
      if (groupName == undefined || groupName == null) {
        throw "Missing the required parameter 'groupName' when calling groupsGroupNameJobsIdTouchPost";
      }

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw "Missing the required parameter 'id' when calling groupsGroupNameJobsIdTouchPost";
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
      var returnType = null;

      return this.apiClient.callApi(
        '/groups/{group_name}/jobs/{id}/touch', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the groupsGroupNameJobsPost operation.
     * @callback module:api/JobsApi~groupsGroupNameJobsPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/JobsWrapper} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Enqueue Job
     * Enqueues job(s). If any of the jobs is invalid, none of the jobs are enqueued.\n
     * @param {String} groupName name of the group.
     * @param {module:model/NewJobsWrapper} body Array of jobs to post.
     * @param {module:api/JobsApi~groupsGroupNameJobsPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/JobsWrapper}
     */
    this.groupsGroupNameJobsPost = function(groupName, body, callback) {
      var postBody = body;

      // verify the required parameter 'groupName' is set
      if (groupName == undefined || groupName == null) {
        throw "Missing the required parameter 'groupName' when calling groupsGroupNameJobsPost";
      }

      // verify the required parameter 'body' is set
      if (body == undefined || body == null) {
        throw "Missing the required parameter 'body' when calling groupsGroupNameJobsPost";
      }


      var pathParams = {
        'group_name': groupName
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
        '/groups/{group_name}/jobs', 'POST',
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
     * Gets the next job in the queue, ready for processing. Titan may return &lt;&#x3D;n jobs. Consumers should start processing jobs in order. Each returned job is set to &#x60;status&#x60; \&quot;running\&quot; and &#x60;started_at&#x60; is set to the current time. No other consumer can retrieve this job.
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
