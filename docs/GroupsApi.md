# WorkerJs.GroupsApi

All URIs are relative to *https://localhost:8080/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**groupsGet**](GroupsApi.md#groupsGet) | **GET** /groups | Get all group names.
[**groupsNameGet**](GroupsApi.md#groupsNameGet) | **GET** /groups/{name} | Get information for a group.
[**groupsNamePut**](GroupsApi.md#groupsNamePut) | **PUT** /groups/{name} | Create/update a task group.
[**groupsPost**](GroupsApi.md#groupsPost) | **POST** /groups | Post new group


<a name="groupsGet"></a>
# **groupsGet**
> GroupsWrapper groupsGet()

Get all group names.

Get a list of all the groups in the system.

### Example
```javascript
var WorkerJs = require('worker_js');

var apiInstance = new WorkerJs.GroupsApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.groupsGet(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**GroupsWrapper**](GroupsWrapper.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="groupsNameGet"></a>
# **groupsNameGet**
> GroupWrapper groupsNameGet(name)

Get information for a group.

This gives more details about a task group, such as statistics.

### Example
```javascript
var WorkerJs = require('worker_js');

var apiInstance = new WorkerJs.GroupsApi();

var name = "name_example"; // String | name of the group.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.groupsNameGet(name, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | **String**| name of the group. | 

### Return type

[**GroupWrapper**](GroupWrapper.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="groupsNamePut"></a>
# **groupsNamePut**
> GroupWrapper groupsNamePut(name, body)

Create/update a task group.

You can set group level settings here. 

### Example
```javascript
var WorkerJs = require('worker_js');

var apiInstance = new WorkerJs.GroupsApi();

var name = "name_example"; // String | name of the group.

var body = new WorkerJs.GroupWrapper(); // GroupWrapper | Group to post.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.groupsNamePut(name, body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | **String**| name of the group. | 
 **body** | [**GroupWrapper**](GroupWrapper.md)| Group to post. | 

### Return type

[**GroupWrapper**](GroupWrapper.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="groupsPost"></a>
# **groupsPost**
> GroupWrapper groupsPost(body)

Post new group

Insert a new task group

### Example
```javascript
var WorkerJs = require('worker_js');

var apiInstance = new WorkerJs.GroupsApi();

var body = new WorkerJs.GroupWrapper(); // GroupWrapper | Group to post.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.groupsPost(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**GroupWrapper**](GroupWrapper.md)| Group to post. | 

### Return type

[**GroupWrapper**](GroupWrapper.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

