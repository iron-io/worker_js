# IronTitan.RunnerApi

All URIs are relative to *https://localhost:8080/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**groupsNameJobsIdErrorPost**](RunnerApi.md#groupsNameJobsIdErrorPost) | **POST** /groups/{name}/jobs/{id}/error | Mark job as failed.
[**groupsNameJobsIdStartPost**](RunnerApi.md#groupsNameJobsIdStartPost) | **POST** /groups/{name}/jobs/{id}/start | Mark job as started, ie: status &#x3D; &#39;running&#39;
[**groupsNameJobsIdSuccessPost**](RunnerApi.md#groupsNameJobsIdSuccessPost) | **POST** /groups/{name}/jobs/{id}/success | Mark job as succeeded.


<a name="groupsNameJobsIdErrorPost"></a>
# **groupsNameJobsIdErrorPost**
> JobWrapper groupsNameJobsIdErrorPost(name, id, body)

Mark job as failed.

Job is marked as failed if it was in a valid state. Job&#39;s &#x60;finished_at&#x60; time is initialized.

### Example
```javascript
var IronTitan = require('iron_titan');

var apiInstance = new IronTitan.RunnerApi();

var name = "name_example"; // String | Name of group for this set of jobs.

var id = "id_example"; // String | Job id

var body = new IronTitan.Complete(); // Complete | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.groupsNameJobsIdErrorPost(name, id, body, callback);
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

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="groupsNameJobsIdStartPost"></a>
# **groupsNameJobsIdStartPost**
> JobWrapper groupsNameJobsIdStartPost(name, id, body)

Mark job as started, ie: status &#x3D; &#39;running&#39;

Job status is changed to &#39;running&#39; if it was in a valid state before. Job&#39;s &#x60;started_at&#x60; time is initialized.

### Example
```javascript
var IronTitan = require('iron_titan');

var apiInstance = new IronTitan.RunnerApi();

var name = "name_example"; // String | Name of group for this set of jobs.

var id = "id_example"; // String | Job id

var body = new IronTitan.Start(); // Start | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.groupsNameJobsIdStartPost(name, id, body, callback);
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

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="groupsNameJobsIdSuccessPost"></a>
# **groupsNameJobsIdSuccessPost**
> JobWrapper groupsNameJobsIdSuccessPost(name, id, body)

Mark job as succeeded.

Job status is changed to succeeded if it was in a valid state before. Job&#39;s &#x60;completed_at&#x60; time is initialized.

### Example
```javascript
var IronTitan = require('iron_titan');

var apiInstance = new IronTitan.RunnerApi();

var name = "name_example"; // String | Name of group for this set of jobs.

var id = "id_example"; // String | Job id

var body = new IronTitan.Complete(); // Complete | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.groupsNameJobsIdSuccessPost(name, id, body, callback);
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

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

