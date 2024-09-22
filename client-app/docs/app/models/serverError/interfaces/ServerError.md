[**Client App Documentation v0.0.0**](../../../../README.md) • **Docs**

***

[Client App Documentation v0.0.0](../../../../README.md) / [app/models/serverError](../README.md) / ServerError

# Interface: ServerError

The ServerError interface represents the structure of an error returned from the server.
It includes the HTTP status code, an error message, and optional detailed information about the error.

 ServerError

## Properties

### details

> **details**: `string`

Additional details or stack trace information about the error (optional).

#### Source

[src/app/models/serverError.ts:20](https://github.com/jimmykurian/Reactivities/blob/dbc3ed866e1f645e56a07b30e597ad4448fbda7a/client-app/src/app/models/serverError.ts#L20)

***

### message

> **message**: `string`

A brief message describing the error.

#### Source

[src/app/models/serverError.ts:19](https://github.com/jimmykurian/Reactivities/blob/dbc3ed866e1f645e56a07b30e597ad4448fbda7a/client-app/src/app/models/serverError.ts#L19)

***

### statusCode

> **statusCode**: `number`

The HTTP status code associated with the error.

#### Source

[src/app/models/serverError.ts:18](https://github.com/jimmykurian/Reactivities/blob/dbc3ed866e1f645e56a07b30e597ad4448fbda7a/client-app/src/app/models/serverError.ts#L18)
