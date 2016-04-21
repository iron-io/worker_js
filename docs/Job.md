# IronTitan.Job

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**groupName** | **String** | Group this job belongs to.  | [optional] 
**reason** | [**Reason**](Reason.md) |  | [optional] 
**createdAt** | **Date** | Time when job was submitted. Always in UTC. | [optional] 
**startedAt** | **Date** | Time when job started execution. Always in UTC. | [optional] 
**completedAt** | **Date** | Time when job completed, whether it was successul or failed. Always in UTC. | [optional] 
**retryOf** | **String** | If this field is set, then this job is a retry of the ID in this field. | [optional] 
**retryAt** | **String** | If this field is set, then this job was retried by the job referenced in this field. | [optional] 


