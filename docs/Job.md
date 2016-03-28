# TitanApi.Job

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | Unique identifier representing a specific job. | 
**status** | **String** | Status of job. One of: [pending, running, success, error, timeout] | [optional] 
**createdAt** | **Date** | Time when job was submitted. | [optional] 
**error** | **String** | Сorresponding error message, only when status==&#39;error&#39;. | [optional] 
**startedAt** | **Date** | Time when job started execution. | [optional] 
**completedAt** | **Date** | Time when job completed, whether it was successul or failed. | [optional] 
**retryId** | **String** | If this field is set, then this job was retried and RetryId points to new job. | [optional] 


