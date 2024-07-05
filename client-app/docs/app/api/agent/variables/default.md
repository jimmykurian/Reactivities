[**Client App Documentation v0.0.0**](../../../../README.md) • **Docs**

***

[Client App Documentation v0.0.0](../../../../README.md) / [app/api/agent](../README.md) / default

# Variable: default

> `const` **default**: `object`

## Constant

## Description

An object containing all the API interaction methods.

## Type declaration

### Activities

> **Activities**: `object`

### Activities.create()

> **create**: (`activity`) => `Promise`\<`void`\>

#### Description

Creates a new activity.

#### Parameters

• **activity**: [`Activity`](../../../models/activity/interfaces/Activity.md)

The activity to create.

#### Returns

`Promise`\<`void`\>

### Activities.delete()

> **delete**: (`id`) => `Promise`\<`void`\>

#### Description

Deletes an activity by ID.

#### Parameters

• **id**: `string`

The ID of the activity to delete.

#### Returns

`Promise`\<`void`\>

### Activities.details()

> **details**: (`id`) => `Promise`\<[`Activity`](../../../models/activity/interfaces/Activity.md)\>

#### Description

Fetches the details of a specific activity by ID.

#### Parameters

• **id**: `string`

The ID of the activity to fetch.

#### Returns

`Promise`\<[`Activity`](../../../models/activity/interfaces/Activity.md)\>

### Activities.list()

> **list**: () => `Promise`\<[`Activity`](../../../models/activity/interfaces/Activity.md)[]\>

#### Description

Fetches the list of activities.

#### Returns

`Promise`\<[`Activity`](../../../models/activity/interfaces/Activity.md)[]\>

### Activities.update()

> **update**: (`activity`) => `Promise`\<`void`\>

#### Description

Updates an existing activity.

#### Parameters

• **activity**: [`Activity`](../../../models/activity/interfaces/Activity.md)

The activity to update.

#### Returns

`Promise`\<`void`\>

## Source

[src/app/api/agent.ts:138](https://github.com/jimmykurian/Reactivities/blob/389d69564b44e3bb01195bf2a2a519fe0be35b7c/client-app/src/app/api/agent.ts#L138)
