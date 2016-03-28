# IronTitan.CoreApi

All URIs are relative to *https://localhost:8080/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**jobIdGet**](CoreApi.md#jobIdGet) | **GET** /job/{id} | Gets job by id
[**jobsGet**](CoreApi.md#jobsGet) | **GET** /jobs | Get next job.
[**jobsPost**](CoreApi.md#jobsPost) | **POST** /jobs | Enqueue Job


<a name="jobIdGet"></a>
# **jobIdGet**
> JobWrapper jobIdGet(id)

Gets job by id

Gets a job by id.

### Example
```javascript
var IronTitan = require('iron_titan');

var apiInstance = new IronTitan.CoreApi()

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

<a name="jobsGet"></a>
# **jobsGet**
> JobsWrapper jobsGet(opts)

Get next job.

Gets the next job in the queue, ready for processing.

### Example
```javascript
var IronTitan = require('iron_titan');

var apiInstance = new IronTitan.CoreApi()

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

<a name="jobsPost"></a>
# **jobsPost**
> JobsWrapper jobsPost(body)

Enqueue Job

Enqueues a job.

### Example
```javascript
var IronTitan = require('iron_titan');

var apiInstance = new IronTitan.CoreApi()

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

