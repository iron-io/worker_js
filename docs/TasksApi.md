# IronJs.TasksApi

All URIs are relative to *https://localhost:8080/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**groupsNameTasksGet**](TasksApi.md#groupsNameTasksGet) | **GET** /groups/{name}/tasks | Get task list by group name.
[**groupsNameTasksIdCancelPost**](TasksApi.md#groupsNameTasksIdCancelPost) | **POST** /groups/{name}/tasks/{id}/cancel | Cancel a task.
[**groupsNameTasksIdDelete**](TasksApi.md#groupsNameTasksIdDelete) | **DELETE** /groups/{name}/tasks/{id} | Delete the task.
[**groupsNameTasksIdErrorPost**](TasksApi.md#groupsNameTasksIdErrorPost) | **POST** /groups/{name}/tasks/{id}/error | Mark task as failed.
[**groupsNameTasksIdGet**](TasksApi.md#groupsNameTasksIdGet) | **GET** /groups/{name}/tasks/{id} | Gets task by id
[**groupsNameTasksIdLogGet**](TasksApi.md#groupsNameTasksIdLogGet) | **GET** /groups/{name}/tasks/{id}/log | Get the log of a completed task.
[**groupsNameTasksIdLogPost**](TasksApi.md#groupsNameTasksIdLogPost) | **POST** /groups/{name}/tasks/{id}/log | Send in a log for storage.
[**groupsNameTasksIdRetryPost**](TasksApi.md#groupsNameTasksIdRetryPost) | **POST** /groups/{name}/tasks/{id}/retry | Retry a task.
[**groupsNameTasksIdStartPost**](TasksApi.md#groupsNameTasksIdStartPost) | **POST** /groups/{name}/tasks/{id}/start | Mark task as started, ie: status &#x3D; &#39;running&#39;
[**groupsNameTasksIdSuccessPost**](TasksApi.md#groupsNameTasksIdSuccessPost) | **POST** /groups/{name}/tasks/{id}/success | Mark task as succeeded.
[**groupsNameTasksIdTouchPost**](TasksApi.md#groupsNameTasksIdTouchPost) | **POST** /groups/{name}/tasks/{id}/touch | Extend task timeout.
[**groupsNameTasksPost**](TasksApi.md#groupsNameTasksPost) | **POST** /groups/{name}/tasks | Enqueue task
[**tasksGet**](TasksApi.md#tasksGet) | **GET** /tasks | Get next task.


<a name="groupsNameTasksGet"></a>
# **groupsNameTasksGet**
> TasksWrapper groupsNameTasksGet(name, opts)

Get task list by group name.

This will list tasks for a particular group.

### Example
```javascript
var IronJs = require('iron_js');

var apiInstance = new IronJs.TasksApi();

var name = "name_example"; // String | Name of group for this set of tasks.

var opts = { 
  'createdAfter': new Date("2013-10-20T19:20:30+01:00"), // Date | Will return tasks created after this time. In RFC3339 format.
  'n': 56, // Integer | Number of tasks to return per page. Default is 50. Max is 1000.
  'cursor': "cursor_example" // String | Pass this in from a previous query to paginate results.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.groupsNameTasksGet(name, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | **String**| Name of group for this set of tasks. | 
 **createdAfter** | **Date**| Will return tasks created after this time. In RFC3339 format. | [optional] 
 **n** | **Integer**| Number of tasks to return per page. Default is 50. Max is 1000. | [optional] 
 **cursor** | **String**| Pass this in from a previous query to paginate results. | [optional] 

### Return type

[**TasksWrapper**](TasksWrapper.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="groupsNameTasksIdCancelPost"></a>
# **groupsNameTasksIdCancelPost**
> TaskWrapper groupsNameTasksIdCancelPost(name, id)

Cancel a task.

Cancels a task in delayed, queued or running status. The worker may continue to run a running task. reason is set to &#x60;client_request&#x60;. The task&#39;s completed_at field is set to the current time on the taskserver.

### Example
```javascript
var IronJs = require('iron_js');

var apiInstance = new IronJs.TasksApi();

var name = "name_example"; // String | Name of group for this set of tasks.

var id = "id_example"; // String | Task id


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.groupsNameTasksIdCancelPost(name, id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | **String**| Name of group for this set of tasks. | 
 **id** | **String**| Task id | 

### Return type

[**TaskWrapper**](TaskWrapper.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="groupsNameTasksIdDelete"></a>
# **groupsNameTasksIdDelete**
> groupsNameTasksIdDelete(name, id)

Delete the task.

Delete only succeeds if task status is one of &#x60;succeeded | failed | cancelled&#x60;. Cancel a task if it is another state and needs to be deleted.  All information about the task, including the log, is irretrievably lost when this is invoked. 

### Example
```javascript
var IronJs = require('iron_js');

var apiInstance = new IronJs.TasksApi();

var name = "name_example"; // String | Name of group for this set of tasks.

var id = "id_example"; // String | Task id


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.groupsNameTasksIdDelete(name, id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | **String**| Name of group for this set of tasks. | 
 **id** | **String**| Task id | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="groupsNameTasksIdErrorPost"></a>
# **groupsNameTasksIdErrorPost**
> TaskWrapper groupsNameTasksIdErrorPost(name, id, body)

Mark task as failed.

Task is marked as failed if it was in a valid state. Task&#39;s &#x60;finished_at&#x60; time is initialized.

### Example
```javascript
var IronJs = require('iron_js');

var apiInstance = new IronJs.TasksApi();

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

<a name="groupsNameTasksIdGet"></a>
# **groupsNameTasksIdGet**
> TaskWrapper groupsNameTasksIdGet(name, id)

Gets task by id

Gets a task by id.

### Example
```javascript
var IronJs = require('iron_js');

var apiInstance = new IronJs.TasksApi();

var name = "name_example"; // String | Name of group for this set of tasks.

var id = "id_example"; // String | task id


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.groupsNameTasksIdGet(name, id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | **String**| Name of group for this set of tasks. | 
 **id** | **String**| task id | 

### Return type

[**TaskWrapper**](TaskWrapper.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="groupsNameTasksIdLogGet"></a>
# **groupsNameTasksIdLogGet**
> &#39;String&#39; groupsNameTasksIdLogGet(name, id)

Get the log of a completed task.

Retrieves the log from log storage.

### Example
```javascript
var IronJs = require('iron_js');

var apiInstance = new IronJs.TasksApi();

var name = "name_example"; // String | Name of group for this set of tasks.

var id = "id_example"; // String | Task id


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.groupsNameTasksIdLogGet(name, id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | **String**| Name of group for this set of tasks. | 
 **id** | **String**| Task id | 

### Return type

**&#39;String&#39;**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: text/plain

<a name="groupsNameTasksIdLogPost"></a>
# **groupsNameTasksIdLogPost**
> TaskWrapper groupsNameTasksIdLogPost(name, id, log)

Send in a log for storage.

Logs are sent after a task completes since they may be very large and the runner can process the next task.

### Example
```javascript
var IronJs = require('iron_js');

var apiInstance = new IronJs.TasksApi();

var name = "name_example"; // String | Name of group for this set of tasks.

var id = "id_example"; // String | Task id

var log = "/path/to/file.txt"; // File | Output log for the task. Content-Type must be \"text/plain; charset=utf-8\".


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.groupsNameTasksIdLogPost(name, id, log, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | **String**| Name of group for this set of tasks. | 
 **id** | **String**| Task id | 
 **log** | **File**| Output log for the task. Content-Type must be \&quot;text/plain; charset&#x3D;utf-8\&quot;. | 

### Return type

[**TaskWrapper**](TaskWrapper.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json

<a name="groupsNameTasksIdRetryPost"></a>
# **groupsNameTasksIdRetryPost**
> TaskWrapper groupsNameTasksIdRetryPost(name, id)

Retry a task.

\&quot;The /retry endpoint can be used to force a retry of tasks with status succeeded, cancelled or failed. The retried task has the same attributes. max_retries is not modified.\&quot; 

### Example
```javascript
var IronJs = require('iron_js');

var apiInstance = new IronJs.TasksApi();

var name = "name_example"; // String | Name of group for this set of tasks.

var id = "id_example"; // String | Task id


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.groupsNameTasksIdRetryPost(name, id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | **String**| Name of group for this set of tasks. | 
 **id** | **String**| Task id | 

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

var apiInstance = new IronJs.TasksApi();

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

var apiInstance = new IronJs.TasksApi();

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

<a name="groupsNameTasksIdTouchPost"></a>
# **groupsNameTasksIdTouchPost**
> groupsNameTasksIdTouchPost(name, id)

Extend task timeout.

Consumers can sometimes take a while to run the task after accepting it.  An example is when the runner does not have the docker image locally, it can spend a significant time downloading the image. If the timeout is small, the task may never get to run, or run but not be accepted by Titan. Consumers can touch the task before it times out. Titan will reset the timeout, giving the consumer another timeout seconds to run the task. Touch is only valid while the task is in a running state. If touch fails, the runner may stop running the task. 

### Example
```javascript
var IronJs = require('iron_js');

var apiInstance = new IronJs.TasksApi();

var name = "name_example"; // String | Name of group for this set of tasks.

var id = "id_example"; // String | Task id


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.groupsNameTasksIdTouchPost(name, id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | **String**| Name of group for this set of tasks. | 
 **id** | **String**| Task id | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="groupsNameTasksPost"></a>
# **groupsNameTasksPost**
> TasksWrapper groupsNameTasksPost(name, body)

Enqueue task

Enqueues task(s). If any of the tasks is invalid, none of the tasks are enqueued. 

### Example
```javascript
var IronJs = require('iron_js');

var apiInstance = new IronJs.TasksApi();

var name = "name_example"; // String | name of the group.

var body = new IronJs.NewTasksWrapper(); // NewTasksWrapper | Array of tasks to post.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.groupsNameTasksPost(name, body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | **String**| name of the group. | 
 **body** | [**NewTasksWrapper**](NewTasksWrapper.md)| Array of tasks to post. | 

### Return type

[**TasksWrapper**](TasksWrapper.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="tasksGet"></a>
# **tasksGet**
> TasksWrapper tasksGet(opts)

Get next task.

Gets the next task in the queue, ready for processing. Titan may return &lt;&#x3D;n tasks. Consumers should start processing tasks in order. Each returned task is set to &#x60;status&#x60; \&quot;running\&quot; and &#x60;started_at&#x60; is set to the current time. No other consumer can retrieve this task.

### Example
```javascript
var IronJs = require('iron_js');

var apiInstance = new IronJs.TasksApi();

var opts = { 
  'n': 1 // Integer | Number of tasks to return.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.tasksGet(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **n** | **Integer**| Number of tasks to return. | [optional] [default to 1]

### Return type

[**TasksWrapper**](TasksWrapper.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

