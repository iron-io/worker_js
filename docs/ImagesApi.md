# IronTitan.ImagesApi

All URIs are relative to *https://localhost:8080/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**imagesGet**](ImagesApi.md#imagesGet) | **GET** /images | Get all image names.
[**imagesNameGet**](ImagesApi.md#imagesNameGet) | **GET** /images/{name} | Get image by name.


<a name="imagesGet"></a>
# **imagesGet**
> ImagesWrapper imagesGet

Get all image names.

TODO: Using images for lack of a better term. See https://github.com/iron-io/titan/issues/43 for discussion.

### Example
```javascript
var IronTitan = require('iron_titan');

var apiInstance = new IronTitan.ImagesApi()

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.imagesGet(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**ImagesWrapper**](ImagesWrapper.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="imagesNameGet"></a>
# **imagesNameGet**
> ImageWrapper imagesNameGet(name)

Get image by name.

NOT IMPLEMENTED YET. This gives more details about on image, such as statistics and what not.

### Example
```javascript
var IronTitan = require('iron_titan');

var apiInstance = new IronTitan.ImagesApi()

var name = "name_example"; // {String} Name of the image.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.imagesNameGet(name, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | **String**| Name of the image. | 

### Return type

[**ImageWrapper**](ImageWrapper.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

