# TitanApi.JobsApi

All URIs are relative to *https://localhost:8080/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**jobIdCancelPost**](JobsApi.md#jobIdCancelPost) | **POST** /job/{id}/cancel | Cancel a job.
[**jobIdDelete**](JobsApi.md#jobIdDelete) | **DELETE** /job/{id} | Delete the job.
[**jobIdFailPost**](JobsApi.md#jobIdFailPost) | **POST** /job/{id}/fail | Mark job as failed.
[**jobIdGet**](JobsApi.md#jobIdGet) | **GET** /job/{id} | Gets job by id
[**jobIdLogGet**](JobsApi.md#jobIdLogGet) | **GET** /job/{id}/log | Get the log of a completed job.
[**jobIdRetryPost**](JobsApi.md#jobIdRetryPost) | **POST** /job/{id}/retry | Retry a job.
[**jobIdSuccessPost**](JobsApi.md#jobIdSuccessPost) | **POST** /job/{id}/success | Mark job as succeeded.
[**jobIdTouchPost**](JobsApi.md#jobIdTouchPost) | **POST** /job/{id}/touch | Extend job timeout.
[**jobsConsumeGet**](JobsApi.md#jobsConsumeGet) | **GET** /jobs/consume | Get next job.
[**jobsGet**](JobsApi.md#jobsGet) | **GET** /jobs | Peek at list of jobs.
[**jobsPost**](JobsApi.md#jobsPost) | **POST** /jobs | Enqueue Job


<a name="jobIdCancelPost"></a>
# **jobIdCancelPost**
> JobWrapper jobIdCancelPost(id, details)

Cancel a job.

Cancels a job in delayed, queued or running status. The worker may continue to run a running job. reason is set to `client_request`.

### Example
```javascript
var TitanApi = require('titan-api');

var apiInstance = new TitanApi.JobsApi()

var id = "id_example"; // {String} Job id

var details = "details_example"; // {String} Human-readable detailed message explaining cancellation reason.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.jobIdCancelPost(id, details, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Job id | 
 **details** | **String**| Human-readable detailed message explaining cancellation reason. | 

### Return type

[**JobWrapper**](JobWrapper.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="jobIdDelete"></a>
# **jobIdDelete**
> jobIdDelete(id)

Delete the job.

Delete only succeeds if job status is one of `succeeded\n| failed | cancelled`. Cancel a job if it is another state and needs to\nbe deleted.  All information about the job, including the log, is\nirretrievably lost when this is invoked.

### Example
```javascript
var TitanApi = require('titan-api');

var apiInstance = new TitanApi.JobsApi()

var id = "id_example"; // {String} Job id


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
api.jobIdDelete(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Job id | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="jobIdFailPost"></a>
# **jobIdFailPost**
> JobWrapper jobIdFailPost(id, reason, details, log)

Mark job as failed.

Job is marked as failed if it was in a valid state. Job&#39;s `completed_at` time is initialized.

### Example
```javascript
var TitanApi = require('titan-api');

var apiInstance = new TitanApi.JobsApi()

var id = "id_example"; // {String} Job id

var reason = "reason_example"; // {String} Reason for job failure.

var details = "details_example"; // {String} Details of job failure.

var log = "/path/to/file.txt"; // {File} Output log for the job. Content-Type must be \"text/plain; charset=utf-8\".


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.jobIdFailPost(id, reason, details, log, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Job id | 
 **reason** | **String**| Reason for job failure. | 
 **details** | **String**| Details of job failure. | 
 **log** | **File**| Output log for the job. Content-Type must be \&quot;text/plain; charset=utf-8\&quot;. | 

### Return type

[**JobWrapper**](JobWrapper.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json

<a name="jobIdGet"></a>
# **jobIdGet**
> JobWrapper jobIdGet(id)

Gets job by id

Gets a job by id.

### Example
```javascript
var TitanApi = require('titan-api');

var apiInstance = new TitanApi.JobsApi()

var id = "id_example"; // {String} Job id


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.jobIdGet(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Job id | 

### Return type

[**JobWrapper**](JobWrapper.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="jobIdLogGet"></a>
# **jobIdLogGet**
> &#39;String&#39; jobIdLogGet(id)

Get the log of a completed job.

Retrieves the log from log storage.

### Example
```javascript
var TitanApi = require('titan-api');

var apiInstance = new TitanApi.JobsApi()

var id = "id_example"; // {String} Job id


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.jobIdLogGet(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Job id | 

### Return type

**&#39;String&#39;**

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: text/plain

<a name="jobIdRetryPost"></a>
# **jobIdRetryPost**
> JobWrapper jobIdRetryPost(id)

Retry a job.

The /retry endpoint can be used to force a retry of jobs with status succeeded or cancelled. It can also be used to retry jobs that in the failed state, but whose max_retries field is 0. The retried job will continue to have max_retries = 0.

### Example
```javascript
var TitanApi = require('titan-api');

var apiInstance = new TitanApi.JobsApi()

var id = "id_example"; // {String} Job id


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.jobIdRetryPost(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Job id | 

### Return type

[**JobWrapper**](JobWrapper.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="jobIdSuccessPost"></a>
# **jobIdSuccessPost**
> JobWrapper jobIdSuccessPost(id, log)

Mark job as succeeded.

Job status is changed to succeeded if it was in a valid state before. Job&#39;s `completed_at` time is initialized.

### Example
```javascript
var TitanApi = require('titan-api');

var apiInstance = new TitanApi.JobsApi()

var id = "id_example"; // {String} Job id

var log = "/path/to/file.txt"; // {File} Output log for the job. Content-Type must be \"text/plain; charset=utf-8\".


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.jobIdSuccessPost(id, log, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Job id | 
 **log** | **File**| Output log for the job. Content-Type must be \&quot;text/plain; charset=utf-8\&quot;. | 

### Return type

[**JobWrapper**](JobWrapper.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json

<a name="jobIdTouchPost"></a>
# **jobIdTouchPost**
> jobIdTouchPost(id)

Extend job timeout.

Consumers can sometimes take a while to run the task after accepting it.  An example is when the runner does not have the docker image locally, it can spend a significant time downloading the image.\nIf the timeout is small, the job may never get to run, or run but not be accepted by Titan. Consumers can touch the job before it times out. Titan will reset the timeout, giving the consumer another timeout seconds to run the job.\nTouch is only valid while the job is in a running state. If touch fails, the runner may stop running the job.

### Example
```javascript
var TitanApi = require('titan-api');

var apiInstance = new TitanApi.JobsApi()

var id = "id_example"; // {String} Job id


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
api.jobIdTouchPost(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Job id | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="jobsConsumeGet"></a>
# **jobsConsumeGet**
> JobsWrapper jobsConsumeGet(opts)

Get next job.

Gets the next job in the queue, ready for processing. Titan may return &lt;=n jobs. Consumers should start processing jobs in order. Each returned job is set to `status` \&quot;running\&quot; and `started_at` is set to the current time. No other consumer can retrieve this job.

### Example
```javascript
var TitanApi = require('titan-api');

var apiInstance = new TitanApi.JobsApi()

var opts = { 
  'n': 1 // {Integer} Number of jobs to return.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.jobsConsumeGet(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **n** | **Integer**| Number of jobs to return. | [optional] [default to 1]

### Return type

[**JobsWrapper**](JobsWrapper.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="jobsGet"></a>
# **jobsGet**
> JobsWrapper jobsGet(opts)

Peek at list of jobs.

Get a list of active jobs. This endpoint can be used to observe the state of jobs in Titan. To run a job, use /jobs/consume. TODO: Needs pagination support.

### Example
```javascript
var TitanApi = require('titan-api');

var apiInstance = new TitanApi.JobsApi()

var opts = { 
  'n': 10 // {Integer} Number of jobs to return. Titan may return <=n jobs. Titan does not make any guarantees about job ordering, but jobs will not be repeated. To make sure you get unique jobs, use the cursor effectively. TODO: We don't actually support pagination.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.jobsGet(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **n** | **Integer**| Number of jobs to return. Titan may return &lt;=n jobs. Titan does not make any guarantees about job ordering, but jobs will not be repeated. To make sure you get unique jobs, use the cursor effectively. TODO: We don&#39;t actually support pagination. | [optional] [default to 10]

### Return type

[**JobsWrapper**](JobsWrapper.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="jobsPost"></a>
# **jobsPost**
> JobsWrapper jobsPost(body)

Enqueue Job

Enqueues job(s). If any of the jobs is invalid, none of the jobs are enqueued.

### Example
```javascript
var TitanApi = require('titan-api');

var apiInstance = new TitanApi.JobsApi()

var body = new TitanApi.NewJobsWrapper(); // {NewJobsWrapper} Array of jobs to post.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.jobsPost(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**NewJobsWrapper**](NewJobsWrapper.md)| Array of jobs to post. | 

### Return type

[**JobsWrapper**](JobsWrapper.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

