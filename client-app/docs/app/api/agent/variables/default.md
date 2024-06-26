[**Client App Documentation v0.0.0**](../../../../README.md) • **Docs**

***

[Client App Documentation v0.0.0](../../../../README.md) / [app/api/agent](../README.md) / default

# Variable: default

> `const` **default**: `object`

An object containing all the API interaction methods.

## Type declaration

### Activities

> **Activities**: `object`

### Activities.create()

> **create**: (`activity`) => `Promise`\<`void`\>

Creates a new activity.

#### Parameters

• **activity**: [`Activity`](../../../models/activity/interfaces/Activity.md)

The activity to create.

#### Returns

`Promise`\<`void`\>

### Activities.delete()

> **delete**: (`id`) => `Promise`\<`void`\>

Deletes an activity by ID.

#### Parameters

• **id**: `string`

The ID of the activity to delete.

#### Returns

`Promise`\<`void`\>

### Activities.details()

> **details**: (`id`) => `Promise`\<[`Activity`](../../../models/activity/interfaces/Activity.md)\>

Fetches the details of a specific activity by ID.

#### Parameters

• **id**: `string`

The ID of the activity to fetch.

#### Returns

`Promise`\<[`Activity`](../../../models/activity/interfaces/Activity.md)\>

### Activities.list()

> **list**: () => `Promise`\<[`Activity`](../../../models/activity/interfaces/Activity.md)[]\>

Fetches the list of activities.

#### Returns

`Promise`\<[`Activity`](../../../models/activity/interfaces/Activity.md)[]\>

### Activities.update()

> **update**: (`activity`) => `Promise`\<`void`\>

Updates an existing activity.

#### Parameters

• **activity**: [`Activity`](../../../models/activity/interfaces/Activity.md)

The activity to update.

#### Returns

`Promise`\<`void`\>

## Source

[app/api/agent.ts:138](https://github.com/jimmykurian/Reactivities/blob/41c65456cc86c8f767cf2b3fae7f0fff76c6e321/client-app/src/app/api/agent.ts#L138)
