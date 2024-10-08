# BaseApiController.HandleResult&lt;T&gt; method

Handles the result of an operation and returns the appropriate ActionResult.

```csharp
protected internal ActionResult HandleResult<T>(Result<T> result, bool created = false, 
    bool deleted = false)
```

| parameter | description |
| --- | --- |
| T | The type of the result value. |
| result | The result of the operation. |
| created | Indicates if the result corresponds to a created resource. |
| deleted | Indicates if the result corresponds to a deleted resource. |

## Return Value

An ActionResult representing the HTTP response.

## See Also

* class [BaseApiController](../BaseApiController.md)
* namespace [API.Controllers](../../API.md)

<!-- DO NOT EDIT: generated by xmldocmd for API.dll -->
