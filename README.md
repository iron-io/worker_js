# iron_titan

IronTitan - JavaScript client for iron_titan
The ultimate, language agnostic, container based job processing framework.
This SDK is automatically generated by the [Swagger Codegen](https://github.com/swagger-api/swagger-codegen) project:

- API version: 0.3.8
- Package version: 0.3.8
- Build date: 2016-05-02T17:59:00.000Z
- Build package: class io.swagger.codegen.languages.JavascriptClientCodegen

## Installation

### For [Node.js](https://nodejs.org/)

#### npm

To publish the library as a [npm](https://www.npmjs.com/),
please follow the procedure in ["Publishing npm packages"](https://docs.npmjs.com/getting-started/publishing-npm-packages).

Then install it via:

```shell
npm install iron_titan --save
```

#### git
#
If the library is hosted at a git repository, e.g.
https://github.com/YOUR_USERNAME/iron_titan
then install it via:

```shell
npm install YOUR_USERNAME/iron_titan --save
```

### For browser

The library also works in the browser environment via npm and [browserify](http://browserify.org/). After following
the above steps with Node.js and installing browserify with `npm install -g browserify`,
perform the following (assuming *main.js* is your entry file):

```shell
browserify main.js > bundle.js
```

Then include *bundle.js* in the HTML pages.

## Getting Started

Please follow the [installation](#installation) instruction and execute the following JS code:

```javascript
var IronTitan = require('iron_titan');

var api = new IronTitan.GroupsApi()

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.groupsGet(callback);

```

## Documentation for API Endpoints

All URIs are relative to *https://localhost:8080/v1*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*IronTitan.GroupsApi* | [**groupsGet**](docs/GroupsApi.md#groupsGet) | **GET** /groups | Get all group names.
*IronTitan.GroupsApi* | [**groupsNameGet**](docs/GroupsApi.md#groupsNameGet) | **GET** /groups/{name} | Get information for a group.
*IronTitan.GroupsApi* | [**groupsPost**](docs/GroupsApi.md#groupsPost) | **POST** /groups | Post new group
*IronTitan.JobsApi* | [**groupsNameJobsGet**](docs/JobsApi.md#groupsNameJobsGet) | **GET** /groups/{name}/jobs | Get job list by group name.
*IronTitan.JobsApi* | [**groupsNameJobsIdCancelPost**](docs/JobsApi.md#groupsNameJobsIdCancelPost) | **POST** /groups/{name}/jobs/{id}/cancel | Cancel a job.
*IronTitan.JobsApi* | [**groupsNameJobsIdDelete**](docs/JobsApi.md#groupsNameJobsIdDelete) | **DELETE** /groups/{name}/jobs/{id} | Delete the job.
*IronTitan.JobsApi* | [**groupsNameJobsIdErrorPost**](docs/JobsApi.md#groupsNameJobsIdErrorPost) | **POST** /groups/{name}/jobs/{id}/error | Mark job as failed.
*IronTitan.JobsApi* | [**groupsNameJobsIdGet**](docs/JobsApi.md#groupsNameJobsIdGet) | **GET** /groups/{name}/jobs/{id} | Gets job by id
*IronTitan.JobsApi* | [**groupsNameJobsIdLogGet**](docs/JobsApi.md#groupsNameJobsIdLogGet) | **GET** /groups/{name}/jobs/{id}/log | Get the log of a completed job.
*IronTitan.JobsApi* | [**groupsNameJobsIdLogPost**](docs/JobsApi.md#groupsNameJobsIdLogPost) | **POST** /groups/{name}/jobs/{id}/log | Send in a log for storage.
*IronTitan.JobsApi* | [**groupsNameJobsIdRetryPost**](docs/JobsApi.md#groupsNameJobsIdRetryPost) | **POST** /groups/{name}/jobs/{id}/retry | Retry a job.
*IronTitan.JobsApi* | [**groupsNameJobsIdStartPost**](docs/JobsApi.md#groupsNameJobsIdStartPost) | **POST** /groups/{name}/jobs/{id}/start | Mark job as started, ie: status = &#39;running&#39;
*IronTitan.JobsApi* | [**groupsNameJobsIdSuccessPost**](docs/JobsApi.md#groupsNameJobsIdSuccessPost) | **POST** /groups/{name}/jobs/{id}/success | Mark job as succeeded.
*IronTitan.JobsApi* | [**groupsNameJobsIdTouchPost**](docs/JobsApi.md#groupsNameJobsIdTouchPost) | **POST** /groups/{name}/jobs/{id}/touch | Extend job timeout.
*IronTitan.JobsApi* | [**groupsNameJobsPost**](docs/JobsApi.md#groupsNameJobsPost) | **POST** /groups/{name}/jobs | Enqueue Job
*IronTitan.JobsApi* | [**jobsGet**](docs/JobsApi.md#jobsGet) | **GET** /jobs | Get next job.
*IronTitan.RunnerApi* | [**groupsNameJobsIdErrorPost**](docs/RunnerApi.md#groupsNameJobsIdErrorPost) | **POST** /groups/{name}/jobs/{id}/error | Mark job as failed.
*IronTitan.RunnerApi* | [**groupsNameJobsIdStartPost**](docs/RunnerApi.md#groupsNameJobsIdStartPost) | **POST** /groups/{name}/jobs/{id}/start | Mark job as started, ie: status = &#39;running&#39;
*IronTitan.RunnerApi* | [**groupsNameJobsIdSuccessPost**](docs/RunnerApi.md#groupsNameJobsIdSuccessPost) | **POST** /groups/{name}/jobs/{id}/success | Mark job as succeeded.


## Documentation for Models

 - [IronTitan.Complete](docs/Complete.md)
 - [IronTitan.Error](docs/Error.md)
 - [IronTitan.ErrorBody](docs/ErrorBody.md)
 - [IronTitan.Group](docs/Group.md)
 - [IronTitan.GroupWrapper](docs/GroupWrapper.md)
 - [IronTitan.GroupsWrapper](docs/GroupsWrapper.md)
 - [IronTitan.IdStatus](docs/IdStatus.md)
 - [IronTitan.Job](docs/Job.md)
 - [IronTitan.JobWrapper](docs/JobWrapper.md)
 - [IronTitan.JobsWrapper](docs/JobsWrapper.md)
 - [IronTitan.NewJob](docs/NewJob.md)
 - [IronTitan.NewJobsWrapper](docs/NewJobsWrapper.md)
 - [IronTitan.Start](docs/Start.md)


## Documentation for Authorization

 All endpoints do not require authorization.

