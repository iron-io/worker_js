(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', '../model/ImageWrapper', '../model/Error', '../model/ImagesWrapper'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/ImageWrapper'), require('../model/Error'), require('../model/ImagesWrapper'));
  } else {
    // Browser globals (root is window)
    if (!root.IronTitan) {
      root.IronTitan = {};
    }
    root.IronTitan.ImagesApi = factory(root.IronTitan.ApiClient, root.IronTitan.ImageWrapper, root.IronTitan.Error, root.IronTitan.ImagesWrapper);
  }
}(this, function(ApiClient, ImageWrapper, Error, ImagesWrapper) {
  'use strict';

  /**
   * Images service.
   * @module api/ImagesApi
   * @version 0.2.9
   */

  /**
   * Constructs a new ImagesApi. 
   * @alias module:api/ImagesApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use, default to {@link module:ApiClient#instance}
   * if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the imageIdGet operation.
     * @callback module:api/ImagesApi~imageIdGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ImageWrapper} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get information for image id.
     * This gives more details about on image, such as the image name and other statistics.
     * @param {String} id ID of the image.
     * @param {module:api/ImagesApi~imageIdGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/ImageWrapper}
     */
    this.imageIdGet = function(id, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw "Missing the required parameter 'id' when calling imageIdGet";
      }


      var pathParams = {
        'id': id
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = ImageWrapper;

      return this.apiClient.callApi(
        '/image/{id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the imagesGet operation.
     * @callback module:api/ImagesApi~imagesGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ImagesWrapper} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get all image names.
     * TODO: Using images for lack of a better term. See https://github.com/iron-io/titan/issues/43 for discussion.
     * @param {module:api/ImagesApi~imagesGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/ImagesWrapper}
     */
    this.imagesGet = function(callback) {
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = ImagesWrapper;

      return this.apiClient.callApi(
        '/images', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
