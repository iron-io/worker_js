(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', '../model/ImagesWrapper', '../model/Error', '../model/ImageWrapper'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/ImagesWrapper'), require('../model/Error'), require('../model/ImageWrapper'));
  } else {
    // Browser globals (root is window)
    if (!root.IronTitan) {
      root.IronTitan = {};
    }
    root.IronTitan.ImagesApi = factory(root.IronTitan.ApiClient, root.IronTitan.ImagesWrapper, root.IronTitan.Error, root.IronTitan.ImageWrapper);
  }
}(this, function(ApiClient, ImagesWrapper, Error, ImageWrapper) {
  'use strict';

  /**
   * Images service.
   * @module iron_titan/ImagesApi
   * @version 0.1.1
   */

  /**
   * Constructs a new ImagesApi. 
   * @alias module:iron_titan/ImagesApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use, default to {@link module:ApiClient#instance}
   * if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the imagesGet operation.
     * @callback module:iron_titan/ImagesApi~imagesGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ImagesWrapper} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get all image names.
     * TODO: Using images for lack of a better term. See https://github.com/iron-io/titan/issues/43 for discussion.
     * @param {module:iron_titan/ImagesApi~imagesGetCallback} callback The callback function, accepting three arguments: error, data, response
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

    /**
     * Callback function to receive the result of the imagesNameGet operation.
     * @callback module:iron_titan/ImagesApi~imagesNameGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ImageWrapper} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get image by name.
     * NOT IMPLEMENTED YET. This gives more details about on image, such as statistics and what not.
     * @param {String} name Name of the image.
     * @param {module:iron_titan/ImagesApi~imagesNameGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/ImageWrapper}
     */
    this.imagesNameGet = function(name, callback) {
      var postBody = null;

      // verify the required parameter 'name' is set
      if (name == undefined || name == null) {
        throw "Missing the required parameter 'name' when calling imagesNameGet";
      }


      var pathParams = {
        'name': name
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
        '/images/{name}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
