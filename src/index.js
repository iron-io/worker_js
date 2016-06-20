(function(factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/Complete', 'model/Error', 'model/ErrorBody', 'model/Group', 'model/GroupWrapper', 'model/GroupsWrapper', 'model/IdStatus', 'model/Job', 'model/JobWrapper', 'model/JobsWrapper', 'model/NewJob', 'model/NewJobsWrapper', 'model/Start', 'api/GroupsApi', 'api/JobsApi', 'api/RunnerApi'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('./ApiClient'), require('./model/Complete'), require('./model/Error'), require('./model/ErrorBody'), require('./model/Group'), require('./model/GroupWrapper'), require('./model/GroupsWrapper'), require('./model/IdStatus'), require('./model/Job'), require('./model/JobWrapper'), require('./model/JobsWrapper'), require('./model/NewJob'), require('./model/NewJobsWrapper'), require('./model/Start'), require('./api/GroupsApi'), require('./api/JobsApi'), require('./api/RunnerApi'));
  }
}(function(ApiClient, Complete, Error, ErrorBody, Group, GroupWrapper, GroupsWrapper, IdStatus, Job, JobWrapper, JobsWrapper, NewJob, NewJobsWrapper, Start, GroupsApi, JobsApi, RunnerApi) {
  'use strict';

  /**
   * The ultimate, language agnostic, container based job processing framework..<br>
   * The <code>index</code> module provides access to constructors for all the classes which comprise the public API.
   * <p>
   * An AMD (recommended!) or CommonJS application will generally do something equivalent to the following:
   * <pre>
   * var IronTitan = require('index'); // See note below*.
   * var xxxSvc = new IronTitan.XxxApi(); // Allocate the API class we're going to use.
   * var yyyModel = new IronTitan.Yyy(); // Construct a model instance.
   * yyyModel.someProperty = 'someValue';
   * ...
   * var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
   * ...
   * </pre>
   * <em>*NOTE: For a top-level AMD script, use require(['index'], function(){...})
   * and put the application logic within the callback function.</em>
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
   * @version 0.3.10
   */
  var exports = {
    /**
     * The ApiClient constructor.
     * @property {module:ApiClient}
     */
    ApiClient: ApiClient,
    /**
     * The Complete model constructor.
     * @property {module:model/Complete}
     */
    Complete: Complete,
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
     * The Group model constructor.
     * @property {module:model/Group}
     */
    Group: Group,
    /**
     * The GroupWrapper model constructor.
     * @property {module:model/GroupWrapper}
     */
    GroupWrapper: GroupWrapper,
    /**
     * The GroupsWrapper model constructor.
     * @property {module:model/GroupsWrapper}
     */
    GroupsWrapper: GroupsWrapper,
    /**
     * The IdStatus model constructor.
     * @property {module:model/IdStatus}
     */
    IdStatus: IdStatus,
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
     * The Start model constructor.
     * @property {module:model/Start}
     */
    Start: Start,
    /**
     * The GroupsApi service constructor.
     * @property {module:api/GroupsApi}
     */
    GroupsApi: GroupsApi,
    /**
     * The JobsApi service constructor.
     * @property {module:api/JobsApi}
     */
    JobsApi: JobsApi,
    /**
     * The RunnerApi service constructor.
     * @property {module:api/RunnerApi}
     */
    RunnerApi: RunnerApi
  };

  return exports;
}));
