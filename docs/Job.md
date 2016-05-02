# IronTitan.Job

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **String** | Group this job belongs to.  | [optional] 
**error** | **String** | The error message, if status is &#39;error&#39;. This is errors due to things outside the job itself. Errors from user code will be found in the log. | [optional] 
**reason** | **String** | Machine usable reason for job being in this state.\nValid values for error status are `timeout | killed | bad_exit`.\nValid values for cancelled status are `client_request`.\nFor everything else, this is undefined.\n | [optional] 
**createdAt** | **Date** | Time when job was submitted. Always in UTC. | [optional] 
**startedAt** | **Date** | Time when job started execution. Always in UTC. | [optional] 
**completedAt** | **Date** | Time when job completed, whether it was successul or failed. Always in UTC. | [optional] 
**retryOf** | **String** | If this field is set, then this job is a retry of the ID in this field. | [optional] 
**retryAt** | **String** | If this field is set, then this job was retried by the job referenced in this field. | [optional] 


