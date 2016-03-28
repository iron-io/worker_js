(function(factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['./ApiClient', './model/Error', './model/ErrorBody', './model/Image', './model/ImageWrapper', './model/ImagesWrapper', './model/Job', './model/JobWrapper', './model/JobsWrapper', './model/Log', './model/NewJob', './model/NewJobsWrapper', './api/CoreApi', './api/ImagesApi', './api/JobsApi'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('./ApiClient'), require('./model/Error'), require('./model/ErrorBody'), require('./model/Image'), require('./model/ImageWrapper'), require('./model/ImagesWrapper'), require('./model/Job'), require('./model/JobWrapper'), require('./model/JobsWrapper'), require('./model/Log'), require('./model/NewJob'), require('./model/NewJobsWrapper'), require('./api/CoreApi'), require('./api/ImagesApi'), require('./api/JobsApi'));
  }
}(function(ApiClient, Error, ErrorBody, Image, ImageWrapper, ImagesWrapper, Job, JobWrapper, JobsWrapper, Log, NewJob, NewJobsWrapper, CoreApi, ImagesApi, JobsApi) {
  'use strict';

  /**
   * The ultimate, language agnostic, container based job processing framework..<br>
   * The <code>index</code> module provides access to constructors for all the classes which comprise the public API.
   * <p>
   * An AMD (recommended!) or CommonJS application will generally do something equivalent to the following:
   * <pre>
   * var IronTitan = require('./index'); // See note below*.
   * var xxxSvc = new IronTitan.XxxApi(); // Allocate the API class we're going to use.
   * var yyyModel = new IronTitan.Yyy(); // Construct a model instance.
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
   * var xxxSvc = new IronTitan.XxxApi(); // Allocate the API class we're going to use.
   * var yyy = new IronTitan.Yyy(); // Construct a model instance.
   * yyyModel.someProperty = 'someValue';
   * ...
   * var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
   * ...
   * </pre>
   * </p>
   * @module index
   * @version 0.1.1
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
     * The Log model constructor.
     * @property {module:model/Log}
     */
    Log: Log,
    /**
     * The NewJob model constructor.
     * @property {module:model/NewJob}
     */
    NewJob: NewJob,
    /**
     * The NewJobsWrapper model constructor.
     * @property {module:model/NewJobsWrapper}
     */
    NewJobsWrapper: NewJobsWrapper,
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
