# IronTitan.JobsApi

All URIs are relative to *https://localhost:8080/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**groupsNameJobsGet**](JobsApi.md#groupsNameJobsGet) | **GET** /groups/{name}/jobs | Get job list by group name.
[**groupsNameJobsIdCancelPost**](JobsApi.md#groupsNameJobsIdCancelPost) | **POST** /groups/{name}/jobs/{id}/cancel | Cancel a job.
[**groupsNameJobsIdDelete**](JobsApi.md#groupsNameJobsIdDelete) | **DELETE** /groups/{name}/jobs/{id} | Delete the job.
[**groupsNameJobsIdErrorPost**](JobsApi.md#groupsNameJobsIdErrorPost) | **POST** /groups/{name}/jobs/{id}/error | Mark job as failed.
[**groupsNameJobsIdGet**](JobsApi.md#groupsNameJobsIdGet) | **GET** /groups/{name}/jobs/{id} | Gets job by id
[**groupsNameJobsIdLogGet**](JobsApi.md#groupsNameJobsIdLogGet) | **GET** /groups/{name}/jobs/{id}/log | Get the log of a completed job.
[**groupsNameJobsIdLogPost**](JobsApi.md#groupsNameJobsIdLogPost) | **POST** /groups/{name}/jobs/{id}/log | Send in a log for storage.
[**groupsNameJobsIdRetryPost**](JobsApi.md#groupsNameJobsIdRetryPost) | **POST** /groups/{name}/jobs/{id}/retry | Retry a job.
[**groupsNameJobsIdStartPost**](JobsApi.md#groupsNameJobsIdStartPost) | **POST** /groups/{name}/jobs/{id}/start | Mark job as started, ie: status = &#39;running&#39;
[**groupsNameJobsIdSuccessPost**](JobsApi.md#groupsNameJobsIdSuccessPost) | **POST** /groups/{name}/jobs/{id}/success | Mark job as succeeded.
[**groupsNameJobsIdTouchPost**](JobsApi.md#groupsNameJobsIdTouchPost) | **POST** /groups/{name}/jobs/{id}/touch | Extend job timeout.
[**groupsNameJobsPost**](JobsApi.md#groupsNameJobsPost) | **POST** /groups/{name}/jobs | Enqueue Job
[**jobsGet**](JobsApi.md#jobsGet) | **GET** /jobs | Get next job.


<a name="groupsNameJobsGet"></a>
# **groupsNameJobsGet**
> JobsWrapper groupsNameJobsGet(name, opts)

Get job list by group name.

This will list jobs for a particular group.

### Example
```javascript
var IronTitan = require('iron_titan');

var apiInstance = new IronTitan.JobsApi()

var name = "name_example"; // {String} Name of group for this set of jobs.

var opts = { 
  'createdAfter': new Date("2013-10-20T19:20:30+01:00"), // {Date} Will return jobs created after this time. In RFC3339 format.
  'n': 56 // {Integer} Number of jobs to return.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.groupsNameJobsGet(name, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | **String**| Name of group for this set of jobs. | 
 **createdAfter** | **Date**| Will return jobs created after this time. In RFC3339 format. | [optional] 
 **n** | **Integer**| Number of jobs to return. | [optional] 

### Return type

[**JobsWrapper**](JobsWrapper.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="groupsNameJobsIdCancelPost"></a>
# **groupsNameJobsIdCancelPost**
> JobWrapper groupsNameJobsIdCancelPost(name, id)

Cancel a job.

Cancels a job in delayed, queued or running status. The worker may continue to run a running job. reason is set to `client_request`. The job&#39;s completed_at field is set to the current time on the jobserver.

### Example
```javascript
var IronTitan = require('iron_titan');

var apiInstance = new IronTitan.JobsApi()

var name = "name_example"; // {String} Name of group for this set of jobs.

var id = "id_example"; // {String} Job id


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.groupsNameJobsIdCancelPost(name, id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | **String**| Name of group for this set of jobs. | 
 **id** | **String**| Job id | 

### Return type

[**JobWrapper**](JobWrapper.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="groupsNameJobsIdDelete"></a>
# **groupsNameJobsIdDelete**
> groupsNameJobsIdDelete(name, id)

Delete the job.

Delete only succeeds if job status is one of `succeeded\n| failed | cancelled`. Cancel a job if it is another state and needs to\nbe deleted.  All information about the job, including the log, is\nirretrievably lost when this is invoked.\n

### Example
```javascript
var IronTitan = require('iron_titan');

var apiInstance = new IronTitan.JobsApi()

var name = "name_example"; // {String} Name of group for this set of jobs.

var id = "id_example"; // {String} Job id


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
api.groupsNameJobsIdDelete(name, id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | **String**| Name of group for this set of jobs. | 
 **id** | **String**| Job id | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="groupsNameJobsIdErrorPost"></a>
# **groupsNameJobsIdErrorPost**
> JobWrapper groupsNameJobsIdErrorPost(name, id, body)

Mark job as failed.

Job is marked as failed if it was in a valid state. Job&#39;s `finished_at` time is initialized.

### Example
```javascript
var IronTitan = require('iron_titan');

var apiInstance = new IronTitan.JobsApi()

var name = "name_example"; // {String} Name of group for this set of jobs.

var id = "id_example"; // {String} Job id

var body = new IronTitan.Complete(); // {Complete} 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.groupsNameJobsIdErrorPost(name, id, body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | **String**| Name of group for this set of jobs. | 
 **id** | **String**| Job id | 
 **body** | [**Complete**](Complete.md)|  | 

### Return type

[**JobWrapper**](JobWrapper.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="groupsNameJobsIdGet"></a>
# **groupsNameJobsIdGet**
> JobWrapper groupsNameJobsIdGet(name, id)

Gets job by id

Gets a job by id.

### Example
```javascript
var IronTitan = require('iron_titan');

var apiInstance = new IronTitan.JobsApi()

var name = "name_example"; // {String} Name of group for this set of jobs.

var id = "id_example"; // {String} Job id


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.groupsNameJobsIdGet(name, id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | **String**| Name of group for this set of jobs. | 
 **id** | **String**| Job id | 

### Return type

[**JobWrapper**](JobWrapper.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="groupsNameJobsIdLogGet"></a>
# **groupsNameJobsIdLogGet**
> &#39;String&#39; groupsNameJobsIdLogGet(name, id)

Get the log of a completed job.

Retrieves the log from log storage.

### Example
```javascript
var IronTitan = require('iron_titan');

var apiInstance = new IronTitan.JobsApi()

var name = "name_example"; // {String} Name of group for this set of jobs.

var id = "id_example"; // {String} Job id


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.groupsNameJobsIdLogGet(name, id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | **String**| Name of group for this set of jobs. | 
 **id** | **String**| Job id | 

### Return type

**&#39;String&#39;**

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: text/plain

<a name="groupsNameJobsIdLogPost"></a>
# **groupsNameJobsIdLogPost**
> JobWrapper groupsNameJobsIdLogPost(name, id, log)

Send in a log for storage.

Logs are sent after a job completes since they may be very large and the runner can process the next job.

### Example
```javascript
var IronTitan = require('iron_titan');

var apiInstance = new IronTitan.JobsApi()

var name = "name_example"; // {String} Name of group for this set of jobs.

var id = "id_example"; // {String} Job id

var log = "/path/to/file.txt"; // {File} Output log for the job. Content-Type must be \"text/plain; charset=utf-8\".


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.groupsNameJobsIdLogPost(name, id, log, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | **String**| Name of group for this set of jobs. | 
 **id** | **String**| Job id | 
 **log** | **File**| Output log for the job. Content-Type must be \&quot;text/plain; charset=utf-8\&quot;. | 

### Return type

[**JobWrapper**](JobWrapper.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json

<a name="groupsNameJobsIdRetryPost"></a>
# **groupsNameJobsIdRetryPost**
> JobWrapper groupsNameJobsIdRetryPost(name, id)

Retry a job.

\&quot;The /retry endpoint can be used to force a retry of jobs\nwith status succeeded or cancelled. It can also be used to retry jobs\nthat in the failed state, but whose max_retries field is 0. The retried\njob will continue to have max_retries = 0.\&quot;\n

### Example
```javascript
var IronTitan = require('iron_titan');

var apiInstance = new IronTitan.JobsApi()

var name = "name_example"; // {String} Name of group for this set of jobs.

var id = "id_example"; // {String} Job id


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.groupsNameJobsIdRetryPost(name, id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | **String**| Name of group for this set of jobs. | 
 **id** | **String**| Job id | 

### Return type

[**JobWrapper**](JobWrapper.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="groupsNameJobsIdStartPost"></a>
# **groupsNameJobsIdStartPost**
> JobWrapper groupsNameJobsIdStartPost(name, id, body)

Mark job as started, ie: status = &#39;running&#39;

Job status is changed to &#39;running&#39; if it was in a valid state before. Job&#39;s `started_at` time is initialized.

### Example
```javascript
var IronTitan = require('iron_titan');

var apiInstance = new IronTitan.JobsApi()

var name = "name_example"; // {String} Name of group for this set of jobs.

var id = "id_example"; // {String} Job id

var body = new IronTitan.Start(); // {Start} 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.groupsNameJobsIdStartPost(name, id, body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | **String**| Name of group for this set of jobs. | 
 **id** | **String**| Job id | 
 **body** | [**Start**](Start.md)|  | 

### Return type

[**JobWrapper**](JobWrapper.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="groupsNameJobsIdSuccessPost"></a>
# **groupsNameJobsIdSuccessPost**
> JobWrapper groupsNameJobsIdSuccessPost(name, id, body)

Mark job as succeeded.

Job status is changed to succeeded if it was in a valid state before. Job&#39;s `completed_at` time is initialized.

### Example
```javascript
var IronTitan = require('iron_titan');

var apiInstance = new IronTitan.JobsApi()

var name = "name_example"; // {String} Name of group for this set of jobs.

var id = "id_example"; // {String} Job id

var body = new IronTitan.Complete(); // {Complete} 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.groupsNameJobsIdSuccessPost(name, id, body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | **String**| Name of group for this set of jobs. | 
 **id** | **String**| Job id | 
 **body** | [**Complete**](Complete.md)|  | 

### Return type

[**JobWrapper**](JobWrapper.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="groupsNameJobsIdTouchPost"></a>
# **groupsNameJobsIdTouchPost**
> groupsNameJobsIdTouchPost(name, id)

Extend job timeout.

Consumers can sometimes take a while to run the task after accepting it.  An example is when the runner does not have the docker image locally, it can spend a significant time downloading the image.\nIf the timeout is small, the job may never get to run, or run but not be accepted by Titan. Consumers can touch the job before it times out. Titan will reset the timeout, giving the consumer another timeout seconds to run the job.\nTouch is only valid while the job is in a running state. If touch fails, the runner may stop running the job.\n

### Example
```javascript
var IronTitan = require('iron_titan');

var apiInstance = new IronTitan.JobsApi()

var name = "name_example"; // {String} Name of group for this set of jobs.

var id = "id_example"; // {String} Job id


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
api.groupsNameJobsIdTouchPost(name, id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | **String**| Name of group for this set of jobs. | 
 **id** | **String**| Job id | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="groupsNameJobsPost"></a>
# **groupsNameJobsPost**
> JobsWrapper groupsNameJobsPost(name, body)

Enqueue Job

Enqueues job(s). If any of the jobs is invalid, none of the jobs are enqueued.\n

### Example
```javascript
var IronTitan = require('iron_titan');

var apiInstance = new IronTitan.JobsApi()

var name = "name_example"; // {String} name of the group.

var body = new IronTitan.NewJobsWrapper(); // {NewJobsWrapper} Array of jobs to post.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.groupsNameJobsPost(name, body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | **String**| name of the group. | 
 **body** | [**NewJobsWrapper**](NewJobsWrapper.md)| Array of jobs to post. | 

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

Get next job.

Gets the next job in the queue, ready for processing. Titan may return &lt;=n jobs. Consumers should start processing jobs in order. Each returned job is set to `status` \&quot;running\&quot; and `started_at` is set to the current time. No other consumer can retrieve this job.

### Example
```javascript
var IronTitan = require('iron_titan');

var apiInstance = new IronTitan.JobsApi()

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
api.jobsGet(opts, callback);
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

