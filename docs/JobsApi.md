# IronTitan.JobsApi

All URIs are relative to *https://localhost:8080/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**jobIdCancelPost**](JobsApi.md#jobIdCancelPost) | **POST** /job/{id}/cancel | Cancel a job.
[**jobIdGet**](JobsApi.md#jobIdGet) | **GET** /job/{id} | Gets job by id
[**jobIdLogGet**](JobsApi.md#jobIdLogGet) | **GET** /job/{id}/log | Get the log of a completed job.
[**jobIdPatch**](JobsApi.md#jobIdPatch) | **PATCH** /job/{id} | Update a job
[**jobIdRetryPost**](JobsApi.md#jobIdRetryPost) | **POST** /job/{id}/retry | Retry a job.
[**jobsGet**](JobsApi.md#jobsGet) | **GET** /jobs | Get next job.
[**jobsNameGet**](JobsApi.md#jobsNameGet) | **GET** /jobs/{name} | Get job list by name.
[**jobsPost**](JobsApi.md#jobsPost) | **POST** /jobs | Enqueue Job


<a name="jobIdCancelPost"></a>
# **jobIdCancelPost**
> JobWrapper jobIdCancelPost(id)

Cancel a job.

This will prevent a job from running. TODO: should we attempt to kill a running job?

### Example
```javascript
var IronTitan = require('IronTitan');

var apiInstance = new IronTitan.JobsApi()

var id = "id_example"; // {String} Job id


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.jobIdCancelPost(id, callback);
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

<a name="jobIdGet"></a>
# **jobIdGet**
> JobWrapper jobIdGet(id)

Gets job by id

Gets a job by id.

### Example
```javascript
var IronTitan = require('IronTitan');

var apiInstance = new IronTitan.JobsApi()

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
> Log jobIdLogGet(id)

Get the log of a completed job.

Retrieves the log from log storage.

### Example
```javascript
var IronTitan = require('IronTitan');

var apiInstance = new IronTitan.JobsApi()

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

[**Log**](Log.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="jobIdPatch"></a>
# **jobIdPatch**
> JobWrapper jobIdPatch(id, body)

Update a job

Typically used to update status on error/completion. TODO: only allow &#39;status&#39; field.

### Example
```javascript
var IronTitan = require('IronTitan');

var apiInstance = new IronTitan.JobsApi()

var id = "id_example"; // {String} Job id

var body = new IronTitan.JobWrapper(); // {JobWrapper} Job data to post


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.jobIdPatch(id, body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Job id | 
 **body** | [**JobWrapper**](JobWrapper.md)| Job data to post | 

### Return type

[**JobWrapper**](JobWrapper.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="jobIdRetryPost"></a>
# **jobIdRetryPost**
> JobWrapper jobIdRetryPost(id)

Retry a job.

If a job fails, you can retry the job with the original payload.

### Example
```javascript
var IronTitan = require('IronTitan');

var apiInstance = new IronTitan.JobsApi()

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

<a name="jobsGet"></a>
# **jobsGet**
> JobsWrapper jobsGet(opts)

Get next job.

Gets the next job in the queue, ready for processing.

### Example
```javascript
var IronTitan = require('IronTitan');

var apiInstance = new IronTitan.JobsApi()

var opts = { 
  'n': 56 // {Integer} Number of jobs to return.
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
 **n** | **Integer**| Number of jobs to return. | [optional] 

### Return type

[**JobsWrapper**](JobsWrapper.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="jobsNameGet"></a>
# **jobsNameGet**
> JobsWrapper jobsNameGet(name, opts)

Get job list by name.

Gets the next job in the queue, ready for processing.

### Example
```javascript
var IronTitan = require('IronTitan');

var apiInstance = new IronTitan.JobsApi()

var name = "name_example"; // {String} Name of this set of jobs.

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
api.jobsNameGet(name, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | **String**| Name of this set of jobs. | 
 **createdAfter** | **Date**| Will return jobs created after this time. In RFC3339 format. | [optional] 
 **n** | **Integer**| Number of jobs to return. | [optional] 

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

Enqueues a job.

### Example
```javascript
var IronTitan = require('IronTitan');

var apiInstance = new IronTitan.JobsApi()

var body = new IronTitan.NewJobsWrapper(); // {NewJobsWrapper} Array of jobs to post.


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

