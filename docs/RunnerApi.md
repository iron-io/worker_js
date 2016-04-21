# IronTitan.RunnerApi

All URIs are relative to *https://localhost:8080/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**groupsGroupNameJobsIdErrorPost**](RunnerApi.md#groupsGroupNameJobsIdErrorPost) | **POST** /groups/{group_name}/jobs/{id}/error | Mark job as failed.
[**groupsGroupNameJobsIdStartPost**](RunnerApi.md#groupsGroupNameJobsIdStartPost) | **POST** /groups/{group_name}/jobs/{id}/start | Mark job as started, ie: status &#x3D; &#39;running&#39;
[**groupsGroupNameJobsIdSuccessPost**](RunnerApi.md#groupsGroupNameJobsIdSuccessPost) | **POST** /groups/{group_name}/jobs/{id}/success | Mark job as succeeded.


<a name="groupsGroupNameJobsIdErrorPost"></a>
# **groupsGroupNameJobsIdErrorPost**
> JobWrapper groupsGroupNameJobsIdErrorPost(groupName, id, reason)

Mark job as failed.

Job is marked as failed if it was in a valid state. Job&#39;s &#x60;finished_at&#x60; time is initialized.

### Example
```javascript
var IronTitan = require('iron_titan');

var apiInstance = new IronTitan.RunnerApi()

var groupName = "groupName_example"; // {String} Name of group for this set of jobs.

var id = "id_example"; // {String} Job id

var reason = "reason_example"; // {String} Reason for job failure.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.groupsGroupNameJobsIdErrorPost(groupName, id, reason, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **groupName** | **String**| Name of group for this set of jobs. | 
 **id** | **String**| Job id | 
 **reason** | **String**| Reason for job failure. | 

### Return type

[**JobWrapper**](JobWrapper.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="groupsGroupNameJobsIdStartPost"></a>
# **groupsGroupNameJobsIdStartPost**
> JobWrapper groupsGroupNameJobsIdStartPost(groupName, id, body)

Mark job as started, ie: status &#x3D; &#39;running&#39;

Job status is changed to &#39;running&#39; if it was in a valid state before. Job&#39;s &#x60;started_at&#x60; time is initialized.

### Example
```javascript
var IronTitan = require('iron_titan');

var apiInstance = new IronTitan.RunnerApi()

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

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="groupsGroupNameJobsIdSuccessPost"></a>
# **groupsGroupNameJobsIdSuccessPost**
> JobWrapper groupsGroupNameJobsIdSuccessPost(groupName, id)

Mark job as succeeded.

Job status is changed to succeeded if it was in a valid state before. Job&#39;s &#x60;completed_at&#x60; time is initialized.

### Example
```javascript
var IronTitan = require('iron_titan');

var apiInstance = new IronTitan.RunnerApi()

var groupName = "groupName_example"; // {String} Name of group for this set of jobs.

var id = "id_example"; // {String} Job id


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.groupsGroupNameJobsIdSuccessPost(groupName, id, callback);
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

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

