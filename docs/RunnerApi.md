# IronJs.RunnerApi

All URIs are relative to *https://localhost:8080/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**groupsNameTasksIdErrorPost**](RunnerApi.md#groupsNameTasksIdErrorPost) | **POST** /groups/{name}/tasks/{id}/error | Mark task as failed.
[**groupsNameTasksIdStartPost**](RunnerApi.md#groupsNameTasksIdStartPost) | **POST** /groups/{name}/tasks/{id}/start | Mark task as started, ie: status &#x3D; &#39;running&#39;
[**groupsNameTasksIdSuccessPost**](RunnerApi.md#groupsNameTasksIdSuccessPost) | **POST** /groups/{name}/tasks/{id}/success | Mark task as succeeded.


<a name="groupsNameTasksIdErrorPost"></a>
# **groupsNameTasksIdErrorPost**
> TaskWrapper groupsNameTasksIdErrorPost(name, id, body)

Mark task as failed.

Task is marked as failed if it was in a valid state. Task&#39;s &#x60;finished_at&#x60; time is initialized.

### Example
```javascript
var IronJs = require('iron_js');

var apiInstance = new IronJs.RunnerApi();

var name = "name_example"; // String | Name of group for this set of tasks.

var id = "id_example"; // String | Task id

var body = new IronJs.Complete(); // Complete | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.groupsNameTasksIdErrorPost(name, id, body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | **String**| Name of group for this set of tasks. | 
 **id** | **String**| Task id | 
 **body** | [**Complete**](Complete.md)|  | 

### Return type

[**TaskWrapper**](TaskWrapper.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="groupsNameTasksIdStartPost"></a>
# **groupsNameTasksIdStartPost**
> TaskWrapper groupsNameTasksIdStartPost(name, id, body)

Mark task as started, ie: status &#x3D; &#39;running&#39;

Task status is changed to &#39;running&#39; if it was in a valid state before. Task&#39;s &#x60;started_at&#x60; time is initialized.

### Example
```javascript
var IronJs = require('iron_js');

var apiInstance = new IronJs.RunnerApi();

var name = "name_example"; // String | Name of group for this set of tasks.

var id = "id_example"; // String | Task id

var body = new IronJs.Start(); // Start | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.groupsNameTasksIdStartPost(name, id, body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | **String**| Name of group for this set of tasks. | 
 **id** | **String**| Task id | 
 **body** | [**Start**](Start.md)|  | 

### Return type

[**TaskWrapper**](TaskWrapper.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="groupsNameTasksIdSuccessPost"></a>
# **groupsNameTasksIdSuccessPost**
> TaskWrapper groupsNameTasksIdSuccessPost(name, id, body)

Mark task as succeeded.

Task status is changed to succeeded if it was in a valid state before. Task&#39;s &#x60;completed_at&#x60; time is initialized.

### Example
```javascript
var IronJs = require('iron_js');

var apiInstance = new IronJs.RunnerApi();

var name = "name_example"; // String | Name of group for this set of tasks.

var id = "id_example"; // String | Task id

var body = new IronJs.Complete(); // Complete | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.groupsNameTasksIdSuccessPost(name, id, body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | **String**| Name of group for this set of tasks. | 
 **id** | **String**| Task id | 
 **body** | [**Complete**](Complete.md)|  | 

### Return type

[**TaskWrapper**](TaskWrapper.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

