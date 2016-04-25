# IronTitan.JobsApi

All URIs are relative to *https://localhost:8080/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**groupsGroupNameJobsGet**](JobsApi.md#groupsGroupNameJobsGet) | **GET** /groups/{group_name}/jobs | Get job list by group name.
[**groupsGroupNameJobsIdCancelPost**](JobsApi.md#groupsGroupNameJobsIdCancelPost) | **POST** /groups/{group_name}/jobs/{id}/cancel | Cancel a job.
[**groupsGroupNameJobsIdDelete**](JobsApi.md#groupsGroupNameJobsIdDelete) | **DELETE** /groups/{group_name}/jobs/{id} | Delete the job.
[**groupsGroupNameJobsIdErrorPost**](JobsApi.md#groupsGroupNameJobsIdErrorPost) | **POST** /groups/{group_name}/jobs/{id}/error | Mark job as failed.
[**groupsGroupNameJobsIdGet**](JobsApi.md#groupsGroupNameJobsIdGet) | **GET** /groups/{group_name}/jobs/{id} | Gets job by id
[**groupsGroupNameJobsIdLogGet**](JobsApi.md#groupsGroupNameJobsIdLogGet) | **GET** /groups/{group_name}/jobs/{id}/log | Get the log of a completed job.
[**groupsGroupNameJobsIdLogPost**](JobsApi.md#groupsGroupNameJobsIdLogPost) | **POST** /groups/{group_name}/jobs/{id}/log | Send in a log for storage.
[**groupsGroupNameJobsIdRetryPost**](JobsApi.md#groupsGroupNameJobsIdRetryPost) | **POST** /groups/{group_name}/jobs/{id}/retry | Retry a job.
[**groupsGroupNameJobsIdStartPost**](JobsApi.md#groupsGroupNameJobsIdStartPost) | **POST** /groups/{group_name}/jobs/{id}/start | Mark job as started, ie: status = &#39;running&#39;
[**groupsGroupNameJobsIdSuccessPost**](JobsApi.md#groupsGroupNameJobsIdSuccessPost) | **POST** /groups/{group_name}/jobs/{id}/success | Mark job as succeeded.
[**groupsGroupNameJobsIdTouchPost**](JobsApi.md#groupsGroupNameJobsIdTouchPost) | **POST** /groups/{group_name}/jobs/{id}/touch | Extend job timeout.
[**groupsGroupNameJobsPost**](JobsApi.md#groupsGroupNameJobsPost) | **POST** /groups/{group_name}/jobs | Enqueue Job
[**jobsGet**](JobsApi.md#jobsGet) | **GET** /jobs | Get next job.


<a name="groupsGroupNameJobsGet"></a>
# **groupsGroupNameJobsGet**
> JobsWrapper groupsGroupNameJobsGet(groupName, opts)

Get job list by group name.

This will list jobs for a particular group.

### Example
```javascript
var IronTitan = require('iron_titan');

var apiInstance = new IronTitan.JobsApi()

var groupName = "groupName_example"; // {String} Name of group for this set of jobs.

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
api.groupsGroupNameJobsGet(groupName, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **groupName** | **String**| Name of group for this set of jobs. | 
 **createdAfter** | **Date**| Will return jobs created after this time. In RFC3339 format. | [optional] 
 **n** | **Integer**| Number of jobs to return. | [optional] 

### Return type

[**JobsWrapper**](JobsWrapper.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="groupsGroupNameJobsIdCancelPost"></a>
# **groupsGroupNameJobsIdCancelPost**
> JobWrapper groupsGroupNameJobsIdCancelPost(groupName, id)

Cancel a job.

Cancels a job in delayed, queued or running status. The worker may continue to run a running job. reason is set to `client_request`. The job&#39;s completed_at field is set to the current time on the jobserver.

### Example
```javascript
var IronTitan = require('iron_titan');

var apiInstance = new IronTitan.JobsApi()

var groupName = "groupName_example"; // {String} Name of group for this set of jobs.

var id = "id_example"; // {String} Job id


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.groupsGroupNameJobsIdCancelPost(groupName, id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **groupName** | **String**| Name of group for this set of jobs. | 
 **id** | **String**| Job id | 

### Return type

[**JobWrapper**](JobWrapper.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="groupsGroupNameJobsIdDelete"></a>
# **groupsGroupNameJobsIdDelete**
> groupsGroupNameJobsIdDelete(groupName, id)

Delete the job.

Delete only succeeds if job status is one of `succeeded\n| failed | cancelled`. Cancel a job if it is another state and needs to\nbe deleted.  All information about the job, including the log, is\nirretrievably lost when this is invoked.\n

### Example
```javascript
var IronTitan = require('iron_titan');

var apiInstance = new IronTitan.JobsApi()

var groupName = "groupName_example"; // {String} Name of group for this set of jobs.

var id = "id_example"; // {String} Job id


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
api.groupsGroupNameJobsIdDelete(groupName, id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **groupName** | **String**| Name of group for this set of jobs. | 
 **id** | **String**| Job id | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="groupsGroupNameJobsIdErrorPost"></a>
# **groupsGroupNameJobsIdErrorPost**
> JobWrapper groupsGroupNameJobsIdErrorPost(groupName, id, body)

Mark job as failed.

Job is marked as failed if it was in a valid state. Job&#39;s `finished_at` time is initialized.

### Example
```javascript
var IronTitan = require('iron_titan');

var apiInstance = new IronTitan.JobsApi()

var groupName = "groupName_example"; // {String} Name of group for this set of jobs.

var id = "id_example"; // {String} Job id

var body = new IronTitan.Complete(); // {Complete} 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.groupsGroupNameJobsIdErrorPost(groupName, id, body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **groupName** | **String**| Name of group for this set of jobs. | 
 **id** | **String**| Job id | 
 **body** | [**Complete**](Complete.md)|  | 

### Return type

[**JobWrapper**](JobWrapper.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="groupsGroupNameJobsIdGet"></a>
# **groupsGroupNameJobsIdGet**
> JobWrapper groupsGroupNameJobsIdGet(groupName, id)

Gets job by id

Gets a job by id.

### Example
```javascript
var IronTitan = require('iron_titan');

var apiInstance = new IronTitan.JobsApi()

var groupName = "groupName_example"; // {String} Name of group for this set of jobs.

var id = "id_example"; // {String} Job id


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.groupsGroupNameJobsIdGet(groupName, id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **groupName** | **String**| Name of group for this set of jobs. | 
 **id** | **String**| Job id | 

### Return type

[**JobWrapper**](JobWrapper.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="groupsGroupNameJobsIdLogGet"></a>
# **groupsGroupNameJobsIdLogGet**
> &#39;String&#39; groupsGroupNameJobsIdLogGet(groupName, id)

Get the log of a completed job.

Retrieves the log from log storage.

### Example
```javascript
var IronTitan = require('iron_titan');

var apiInstance = new IronTitan.JobsApi()

var groupName = "groupName_example"; // {String} Name of group for this set of jobs.

var id = "id_example"; // {String} Job id


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.groupsGroupNameJobsIdLogGet(groupName, id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **groupName** | **String**| Name of group for this set of jobs. | 
 **id** | **String**| Job id | 

### Return type

**&#39;String&#39;**

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: text/plain

<a name="groupsGroupNameJobsIdLogPost"></a>
# **groupsGroupNameJobsIdLogPost**
> JobWrapper groupsGroupNameJobsIdLogPost(groupName, id, log)

Send in a log for storage.

Logs are sent after a job completes since they may be very large and the runner can process the next job.

### Example
```javascript
var IronTitan = require('iron_titan');

var apiInstance = new IronTitan.JobsApi()

var groupName = "groupName_example"; // {String} Name of group for this set of jobs.

var id = "id_example"; // {String} Job id

var log = "/path/to/file.txt"; // {File} Output log for the job. Content-Type must be \"text/plain; charset=utf-8\".


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.groupsGroupNameJobsIdLogPost(groupName, id, log, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **groupName** | **String**| Name of group for this set of jobs. | 
 **id** | **String**| Job id | 
 **log** | **File**| Output log for the job. Content-Type must be \&quot;text/plain; charset=utf-8\&quot;. | 

### Return type

[**JobWrapper**](JobWrapper.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json

<a name="groupsGroupNameJobsIdRetryPost"></a>
# **groupsGroupNameJobsIdRetryPost**
> JobWrapper groupsGroupNameJobsIdRetryPost(groupName, id)

Retry a job.

\&quot;The /retry endpoint can be used to force a retry of jobs\nwith status succeeded or cancelled. It can also be used to retry jobs\nthat in the failed state, but whose max_retries field is 0. The retried\njob will continue to have max_retries = 0.\&quot;\n

### Example
```javascript
var IronTitan = require('iron_titan');

var apiInstance = new IronTitan.JobsApi()

var groupName = "groupName_example"; // {String} Name of group for this set of jobs.

var id = "id_example"; // {String} Job id


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.groupsGroupNameJobsIdRetryPost(groupName, id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **groupName** | **String**| Name of group for this set of jobs. | 
 **id** | **String**| Job id | 

### Return type

[**JobWrapper**](JobWrapper.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="groupsGroupNameJobsIdStartPost"></a>
# **groupsGroupNameJobsIdStartPost**
> JobWrapper groupsGroupNameJobsIdStartPost(groupName, id, body)

Mark job as started, ie: status = &#39;running&#39;

Job status is changed to &#39;running&#39; if it was in a valid state before. Job&#39;s `started_at` time is initialized.

### Example
```javascript
var IronTitan = require('iron_titan');

var apiInstance = new IronTitan.JobsApi()

var groupName = "groupName_example"; // {String} Name of group for this set of jobs.

var id = "id_example"; // {String} Job id

var body = new IronTitan.Start(); // {Start} 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.groupsGroupNameJobsIdStartPost(groupName, id, body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **groupName** | **String**| Name of group for this set of jobs. | 
 **id** | **String**| Job id | 
 **body** | [**Start**](Start.md)|  | 

### Return type

[**JobWrapper**](JobWrapper.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="groupsGroupNameJobsIdSuccessPost"></a>
# **groupsGroupNameJobsIdSuccessPost**
> JobWrapper groupsGroupNameJobsIdSuccessPost(groupName, id, body)

Mark job as succeeded.

Job status is changed to succeeded if it was in a valid state before. Job&#39;s `completed_at` time is initialized.

### Example
```javascript
var IronTitan = require('iron_titan');

var apiInstance = new IronTitan.JobsApi()

var groupName = "groupName_example"; // {String} Name of group for this set of jobs.

var id = "id_example"; // {String} Job id

var body = new IronTitan.Complete(); // {Complete} 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.groupsGroupNameJobsIdSuccessPost(groupName, id, body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **groupName** | **String**| Name of group for this set of jobs. | 
 **id** | **String**| Job id | 
 **body** | [**Complete**](Complete.md)|  | 

### Return type

[**JobWrapper**](JobWrapper.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="groupsGroupNameJobsIdTouchPost"></a>
# **groupsGroupNameJobsIdTouchPost**
> groupsGroupNameJobsIdTouchPost(groupName, id)

Extend job timeout.

Consumers can sometimes take a while to run the task after accepting it.  An example is when the runner does not have the docker image locally, it can spend a significant time downloading the image.\nIf the timeout is small, the job may never get to run, or run but not be accepted by Titan. Consumers can touch the job before it times out. Titan will reset the timeout, giving the consumer another timeout seconds to run the job.\nTouch is only valid while the job is in a running state. If touch fails, the runner may stop running the job.\n

### Example
```javascript
var IronTitan = require('iron_titan');

var apiInstance = new IronTitan.JobsApi()

var groupName = "groupName_example"; // {String} Name of group for this set of jobs.

var id = "id_example"; // {String} Job id


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
api.groupsGroupNameJobsIdTouchPost(groupName, id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **groupName** | **String**| Name of group for this set of jobs. | 
 **id** | **String**| Job id | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="groupsGroupNameJobsPost"></a>
# **groupsGroupNameJobsPost**
> JobsWrapper groupsGroupNameJobsPost(groupName, body)

Enqueue Job

Enqueues job(s). If any of the jobs is invalid, none of the jobs are enqueued.\n

### Example
```javascript
var IronTitan = require('iron_titan');

var apiInstance = new IronTitan.JobsApi()

var groupName = "groupName_example"; // {String} name of the group.

var body = new IronTitan.NewJobsWrapper(); // {NewJobsWrapper} Array of jobs to post.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.groupsGroupNameJobsPost(groupName, body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **groupName** | **String**| name of the group. | 
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

