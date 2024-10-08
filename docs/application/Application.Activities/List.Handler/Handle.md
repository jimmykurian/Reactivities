# List.Handler.Handle method

Handles the request to list activities.

```csharp
public Task<Result<List<Activity>>> Handle(Query request, CancellationToken cancellationToken)
```

| parameter | description |
| --- | --- |
| request | The query request. |
| cancellationToken | A token to monitor for cancellation requests. |

## Return Value

A Task representing the asynchronous operation, containing the result of the query. The result includes the list of activities.

## See Also

* class [Query](../List.Query.md)
* class [Handler](../List.Handler.md)
* namespace [Application.Activities](../../Application.md)

<!-- DO NOT EDIT: generated by xmldocmd for Application.dll -->
