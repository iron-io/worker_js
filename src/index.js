(function(factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['./ApiClient', './model/Error', './model/ErrorBody', './model/IdStatus', './model/Image', './model/ImageWrapper', './model/ImagesWrapper', './model/Job', './model/JobSubmission', './model/JobSubmissionWithImage', './model/JobSubmissionsWrapper', './model/JobWrapper', './model/JobsWrapper', './model/Reason', './api/CoreApi', './api/ImagesApi', './api/JobsApi'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('./ApiClient'), require('./model/Error'), require('./model/ErrorBody'), require('./model/IdStatus'), require('./model/Image'), require('./model/ImageWrapper'), require('./model/ImagesWrapper'), require('./model/Job'), require('./model/JobSubmission'), require('./model/JobSubmissionWithImage'), require('./model/JobSubmissionsWrapper'), require('./model/JobWrapper'), require('./model/JobsWrapper'), require('./model/Reason'), require('./api/CoreApi'), require('./api/ImagesApi'), require('./api/JobsApi'));
  }
}(function(ApiClient, Error, ErrorBody, IdStatus, Image, ImageWrapper, ImagesWrapper, Job, JobSubmission, JobSubmissionWithImage, JobSubmissionsWrapper, JobWrapper, JobsWrapper, Reason, CoreApi, ImagesApi, JobsApi) {
  'use strict';

  /**
   * The ultimate, language agnostic, container based job processing framework..<br>
   * The <code>index</code> module provides access to constructors for all the classes which comprise the public API.
   * <p>
   * An AMD (recommended!) or CommonJS application will generally do something equivalent to the following:
   * <pre>
   * var TitanApi = require('./index'); // See note below*.
   * var xxxSvc = new TitanApi.XxxApi(); // Allocate the API class we're going to use.
   * var yyyModel = new TitanApi.Yyy(); // Construct a model instance.
   * yyyModel.someProperty = 'someValue';
   * ...
   * var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
   * ...
   * </pre>
   * <em>*NOTE: For a top-level AMD script, use require(['./index'], function(){...}) and put the application logic within the
   * callback function.</em>
   * </p>
   * <p>
   * A non-AMD browser application (discouraged) might do something like this:
   * <pre>
   * var xxxSvc = new TitanApi.XxxApi(); // Allocate the API class we're going to use.
   * var yyy = new TitanApi.Yyy(); // Construct a model instance.
   * yyyModel.someProperty = 'someValue';
   * ...
   * var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
   * ...
   * </pre>
   * </p>
   * @module index
   * @version 0.2.4
   */
  var exports = {
    /**
     * The ApiClient constructor.
     * @property {module:ApiClient}
     */
    ApiClient: ApiClient,
    /**
     * The Error model constructor.
     * @property {module:model/Error}
     */
    Error: Error,
    /**
     * The ErrorBody model constructor.
     * @property {module:model/ErrorBody}
     */
    ErrorBody: ErrorBody,
    /**
     * The IdStatus model constructor.
     * @property {module:model/IdStatus}
     */
    IdStatus: IdStatus,
    /**
     * The Image model constructor.
     * @property {module:model/Image}
     */
    Image: Image,
    /**
     * The ImageWrapper model constructor.
     * @property {module:model/ImageWrapper}
     */
    ImageWrapper: ImageWrapper,
    /**
     * The ImagesWrapper model constructor.
     * @property {module:model/ImagesWrapper}
     */
    ImagesWrapper: ImagesWrapper,
    /**
     * The Job model constructor.
     * @property {module:model/Job}
     */
    Job: Job,
    /**
     * The JobSubmission model constructor.
     * @property {module:model/JobSubmission}
     */
    JobSubmission: JobSubmission,
    /**
     * The JobSubmissionWithImage model constructor.
     * @property {module:model/JobSubmissionWithImage}
     */
    JobSubmissionWithImage: JobSubmissionWithImage,
    /**
     * The JobSubmissionsWrapper model constructor.
     * @property {module:model/JobSubmissionsWrapper}
     */
    JobSubmissionsWrapper: JobSubmissionsWrapper,
    /**
     * The JobWrapper model constructor.
     * @property {module:model/JobWrapper}
     */
    JobWrapper: JobWrapper,
    /**
     * The JobsWrapper model constructor.
     * @property {module:model/JobsWrapper}
     */
    JobsWrapper: JobsWrapper,
    /**
     * The Reason model constructor.
     * @property {module:model/Reason}
     */
    Reason: Reason,
    /**
     * The CoreApi service constructor.
     * @property {module:api/CoreApi}
     */
    CoreApi: CoreApi,
    /**
     * The ImagesApi service constructor.
     * @property {module:api/ImagesApi}
     */
    ImagesApi: ImagesApi,
    /**
     * The JobsApi service constructor.
     * @property {module:api/JobsApi}
     */
    JobsApi: JobsApi
  };

  return exports;
}));
