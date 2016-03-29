# IronTitan.Job

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**imageId** | **String** | Image to execute to run this Job. Get details via the /image/{id} endpoint. | [optional] 
**reason** | [**Reason**](Reason.md) |  | [optional] 
**details** | **String** | Some description of the reason this Job is in current state. Used only for presentation purposes. Should be human-readable. | [optional] 
**createdAt** | **Date** | Time when job was submitted. Always in UTC. | [optional] 
**startedAt** | **Date** | Time when job started execution. Always in UTC. | [optional] 
**completedAt** | **Date** | Time when job completed, whether it was successul or failed. Always in UTC. | [optional] 
**retryOf** | **String** | If this field is set, then this job is a retry of the ID in this field. | [optional] 


