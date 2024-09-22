[**Client App Documentation v0.0.0**](../../../../README.md) • **Docs**

***

[Client App Documentation v0.0.0](../../../../README.md) / [app/stores/commonStore](../README.md) / default

# Class: default

CommonStore class manages common application-wide state, including server error handling.
This store is made observable using MobX, allowing components to reactively update based on changes to the store's state.

## Constructors

### new default()

> **new default**(): [`default`](default.md)

Initializes a new instance of the `CommonStore` class and makes it observable using MobX.

#### Returns

[`default`](default.md)

#### Source

[src/app/stores/commonStore.ts:29](https://github.com/jimmykurian/Reactivities/blob/dbc3ed866e1f645e56a07b30e597ad4448fbda7a/client-app/src/app/stores/commonStore.ts#L29)

## Properties

### error

> **error**: `null` \| [`ServerError`](../../../models/serverError/interfaces/ServerError.md) = `null`

Represents the server error state, initially set to null.
The `ServerError` model contains the error message and optional stack trace details.

#### Source

[src/app/stores/commonStore.ts:24](https://github.com/jimmykurian/Reactivities/blob/dbc3ed866e1f645e56a07b30e597ad4448fbda7a/client-app/src/app/stores/commonStore.ts#L24)

## Methods

### setServerError()

> **setServerError**(`error`): `void`

Sets the server error state in the store.

#### Parameters

• **error**: [`ServerError`](../../../models/serverError/interfaces/ServerError.md)

The server error object containing details of the error.

#### Returns

`void`

#### Source

[src/app/stores/commonStore.ts:38](https://github.com/jimmykurian/Reactivities/blob/dbc3ed866e1f645e56a07b30e597ad4448fbda7a/client-app/src/app/stores/commonStore.ts#L38)
