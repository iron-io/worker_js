# TitanApi.ImagesApi

All URIs are relative to *https://localhost:8080/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**imageIdGet**](ImagesApi.md#imageIdGet) | **GET** /image/{id} | Get information for image id.
[**imagesGet**](ImagesApi.md#imagesGet) | **GET** /images | Get all image names.


<a name="imageIdGet"></a>
# **imageIdGet**
> ImageWrapper imageIdGet(id)

Get information for image id.

This gives more details about on image, such as the image name and other statistics.

### Example
```javascript
var TitanApi = require('titan-api');

var apiInstance = new TitanApi.ImagesApi()

var id = "id_example"; // {String} ID of the image.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.imageIdGet(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| ID of the image. | 

### Return type

[**ImageWrapper**](ImageWrapper.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="imagesGet"></a>
# **imagesGet**
> ImagesWrapper imagesGet

Get all image names.

TODO: Using images for lack of a better term. See https://github.com/iron-io/titan/issues/43 for discussion.

### Example
```javascript
var TitanApi = require('titan-api');

var apiInstance = new TitanApi.ImagesApi()

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

