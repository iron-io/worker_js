/**
 * IronWorker CE API
 * The ultimate, language agnostic, container based task processing framework.
 *
 * OpenAPI spec version: 0.5.5
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/IdStatus', 'model/NewTask'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./IdStatus'), require('./NewTask'));
  } else {
    // Browser globals (root is window)
    if (!root.WorkerJs) {
      root.WorkerJs = {};
    }
    root.WorkerJs.Task = factory(root.WorkerJs.ApiClient, root.WorkerJs.IdStatus, root.WorkerJs.NewTask);
  }
}(this, function(ApiClient, IdStatus, NewTask) {
  'use strict';




  /**
   * The Task model module.
   * @module model/Task
   * @version 0.5.5
   */

  /**
   * Constructs a new <code>Task</code>.
   * @alias module:model/Task
   * @class
   * @implements module:model/NewTask
   * @implements module:model/IdStatus
   * @param image {String} Name of Docker image to use. This is optional and can be used to override the image defined at the group level.
   * @param priority {Integer} Priority of the task. Higher has more priority. 3 levels from 0-2. Tasks at same priority are processed in FIFO order.
   */
  var exports = function(image, priority) {
    var _this = this;

    NewTask.call(_this, image, priority);
    IdStatus.call(_this);









  };

  /**
   * Constructs a <code>Task</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Task} obj Optional instance to populate.
   * @return {module:model/Task} The populated <code>Task</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      NewTask.constructFromObject(data, obj);
      IdStatus.constructFromObject(data, obj);
      if (data.hasOwnProperty('group_name')) {
        obj['group_name'] = ApiClient.convertToType(data['group_name'], 'String');
      }
      if (data.hasOwnProperty('error')) {
        obj['error'] = ApiClient.convertToType(data['error'], 'String');
      }
      if (data.hasOwnProperty('reason')) {
        obj['reason'] = ApiClient.convertToType(data['reason'], 'String');
      }
      if (data.hasOwnProperty('created_at')) {
        obj['created_at'] = ApiClient.convertToType(data['created_at'], 'Date');
      }
      if (data.hasOwnProperty('started_at')) {
        obj['started_at'] = ApiClient.convertToType(data['started_at'], 'Date');
      }
      if (data.hasOwnProperty('completed_at')) {
        obj['completed_at'] = ApiClient.convertToType(data['completed_at'], 'Date');
      }
      if (data.hasOwnProperty('retry_of')) {
        obj['retry_of'] = ApiClient.convertToType(data['retry_of'], 'String');
      }
      if (data.hasOwnProperty('retry_at')) {
        obj['retry_at'] = ApiClient.convertToType(data['retry_at'], 'String');
      }
      if (data.hasOwnProperty('env_vars')) {
        obj['env_vars'] = ApiClient.convertToType(data['env_vars'], {'String': 'String'});
      }
    }
    return obj;
  }

  /**
   * Group this task belongs to.
   * @member {String} group_name
   */
  exports.prototype['group_name'] = undefined;
  /**
   * The error message, if status is 'error'. This is errors due to things outside the task itself. Errors from user code will be found in the log.
   * @member {String} error
   */
  exports.prototype['error'] = undefined;
  /**
   * Machine usable reason for task being in this state. Valid values for error status are `timeout | killed | bad_exit`. Valid values for cancelled status are `client_request`. For everything else, this is undefined. 
   * @member {module:model/Task.ReasonEnum} reason
   */
  exports.prototype['reason'] = undefined;
  /**
   * Time when task was submitted. Always in UTC.
   * @member {Date} created_at
   */
  exports.prototype['created_at'] = undefined;
  /**
   * Time when task started execution. Always in UTC.
   * @member {Date} started_at
   */
  exports.prototype['started_at'] = undefined;
  /**
   * Time when task completed, whether it was successul or failed. Always in UTC.
   * @member {Date} completed_at
   */
  exports.prototype['completed_at'] = undefined;
  /**
   * If this field is set, then this task is a retry of the ID in this field.
   * @member {String} retry_of
   */
  exports.prototype['retry_of'] = undefined;
  /**
   * If this field is set, then this task was retried by the task referenced in this field.
   * @member {String} retry_at
   */
  exports.prototype['retry_at'] = undefined;
  /**
   * Env vars for the task. Comes from the ones set on the Group.
   * @member {Object.<String, String>} env_vars
   */
  exports.prototype['env_vars'] = undefined;

  // Implement NewTask interface:
  /**
   * Name of Docker image to use. This is optional and can be used to override the image defined at the group level.
   * @member {String} image
   */
exports.prototype['image'] = undefined;

  /**
   * Payload for the task. This is what you pass into each task to make it do something.
   * @member {String} payload
   */
exports.prototype['payload'] = undefined;

  /**
   * Number of seconds to wait before queueing the task for consumption for the first time. Must be a positive integer. Tasks with a delay start in state \"delayed\" and transition to \"running\" after delay seconds.
   * @member {Integer} delay
   * @default 0
   */
exports.prototype['delay'] = 0;

  /**
   * Maximum runtime in seconds. If a consumer retrieves the task, but does not change it's status within timeout seconds, the task is considered failed, with reason timeout (Titan may allow a small grace period). The consumer should also kill the task after timeout seconds. If a consumer tries to change status after Titan has already timed out the task, the consumer will be ignored. 
   * @member {Integer} timeout
   * @default 60
   */
exports.prototype['timeout'] = 60;

  /**
   * Priority of the task. Higher has more priority. 3 levels from 0-2. Tasks at same priority are processed in FIFO order.
   * @member {Integer} priority
   */
exports.prototype['priority'] = undefined;

  /**
   * \"Number of automatic retries this task is allowed.  A retry will be attempted if a task fails. Max 25. Automatic retries are performed by titan when a task reaches a failed state and has `max_retries` > 0. A retry is performed by queueing a new task with the same image id and payload. The new task's max_retries is one less than the original. The new task's `retry_of` field is set to the original Task ID. The old task's `retry_at` field is set to the new Task's ID.  Titan will delay the new task for retries_delay seconds before queueing it. Cancelled or successful tasks are never automatically retried.\" 
   * @member {Integer} max_retries
   * @default 0
   */
exports.prototype['max_retries'] = 0;

  /**
   * Time in seconds to wait before retrying the task. Must be a non-negative integer.
   * @member {Integer} retries_delay
   * @default 60
   */
exports.prototype['retries_delay'] = 60;

  // Implement IdStatus interface:
  /**
   * Unique identifier representing a specific task.
   * @member {String} id
   */
exports.prototype['id'] = undefined;

  /**
   * States and valid transitions.                   +---------+        +---------> delayed <----------------+                  +----+----+                |                       |                     |                       |                     |                  +----v----+                |        +---------> queued  <----------------+                  +----+----+                *                       |                     *                       |               retry * creates new task                  +----v----+                *                  | running |                *                  +--+-+-+--+                |           +---------|-|-|-----+-------------+       +---|---------+ | +-----|---------+   |       |   |           |       |         |   | +-----v---^-+      +--v-------^+     +--v---^-+ | success   |      | cancelled |     |  error | +-----------+      +-----------+     +--------+  * delayed - has a delay. * queued - Ready to be consumed when it's turn comes. * running - Currently consumed by a runner which will attempt to process it. * success - (or complete? success/error is common javascript terminology) * error - Something went wrong. In this case more information can be obtained   by inspecting the \"reason\" field.   - timeout   - killed - forcibly killed by worker due to resource restrictions or access     violations.   - bad_exit - exited with non-zero status due to program termination/crash. * cancelled - cancelled via API. More information in the reason field.   - client_request - Request was cancelled by a client. 
   * @member {module:model/IdStatus.StatusEnum} status
   */
exports.prototype['status'] = undefined;


  /**
   * Allowed values for the <code>reason</code> property.
   * @enum {String}
   * @readonly
   */
  exports.ReasonEnum = {
    /**
     * value: "timeout"
     * @const
     */
    "timeout": "timeout",
    /**
     * value: "killed"
     * @const
     */
    "killed": "killed",
    /**
     * value: "bad_exit"
     * @const
     */
    "bad_exit": "bad_exit",
    /**
     * value: "client_request"
     * @const
     */
    "client_request": "client_request"  };


  return exports;
}));


