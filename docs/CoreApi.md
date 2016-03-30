# TitanApi.CoreApi

All URIs are relative to *https://localhost:8080/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**jobIdDelete**](CoreApi.md#jobIdDelete) | **DELETE** /job/{id} | Delete the job.
[**jobIdGet**](CoreApi.md#jobIdGet) | **GET** /job/{id} | Gets job by id
[**jobsConsumeGet**](CoreApi.md#jobsConsumeGet) | **GET** /jobs/consume | Get next job.
[**jobsPost**](CoreApi.md#jobsPost) | **POST** /jobs | Enqueue Job


<a name="jobIdDelete"></a>
# **jobIdDelete**
> jobIdDelete(id)

Delete the job.

Delete only succeeds if job status is one of `succeeded\n| failed | cancelled`. Cancel a job if it is another state and needs to\nbe deleted.  All information about the job, including the log, is\nirretrievably lost when this is invoked.

### Example
```javascript
var TitanApi = require('titan-api');

var apiInstance = new TitanApi.CoreApi()

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

<a name="jobIdGet"></a>
# **jobIdGet**
> JobWrapper jobIdGet(id)

Gets job by id

Gets a job by id.

### Example
```javascript
var TitanApi = require('titan-api');

var apiInstance = new TitanApi.CoreApi()

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

<a name="jobsConsumeGet"></a>
# **jobsConsumeGet**
> JobsWrapper jobsConsumeGet(opts)

Get next job.

Gets the next job in the queue, ready for processing. Titan may return &lt;=n jobs. Consumers should start processing jobs in order. Each returned job is set to `status` \&quot;running\&quot; and `started_at` is set to the current time. No other consumer can retrieve this job.

### Example
```javascript
var TitanApi = require('titan-api');

var apiInstance = new TitanApi.CoreApi()

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

<a name="jobsPost"></a>
# **jobsPost**
> JobsWrapper jobsPost(body)

Enqueue Job

Enqueues job(s). If any of the jobs is invalid, none of the jobs are enqueued.

### Example
```javascript
var TitanApi = require('titan-api');

var apiInstance = new TitanApi.CoreApi()

var body = new TitanApi.JobSubmissionsWrapper(); // {JobSubmissionsWrapper} Array of jobs to post.


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
 **body** | [**JobSubmissionsWrapper**](JobSubmissionsWrapper.md)| Array of jobs to post. | 

### Return type

[**JobsWrapper**](JobsWrapper.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

