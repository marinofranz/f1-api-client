---
id: "schedule"
title: "Namespace: schedule"
sidebar_label: "schedule"
sidebar_position: 0
custom_edit_url: null
---

## Functions

### current

▸ **current**(): `Promise`\<[`Schedule`](../classes/Schedule-1.md)\>

Get the F1 schedule for the current year.

#### Returns

`Promise`\<[`Schedule`](../classes/Schedule-1.md)\>

#### Defined in

[routes/schedule.ts:14](https://github.com/marinofranz/f1-api-client/blob/main/src/routes/schedule.ts#L14)

___

### remaining

▸ **remaining**(): `Promise`\<[`Schedule`](../classes/Schedule-1.md)\>

Get the remaining events on the F1 schedule for the current year.

#### Returns

`Promise`\<[`Schedule`](../classes/Schedule-1.md)\>

#### Defined in

[routes/schedule.ts:28](https://github.com/marinofranz/f1-api-client/blob/main/src/routes/schedule.ts#L28)

___

### year

▸ **year**(`year`): `Promise`\<[`Schedule`](../classes/Schedule-1.md)\>

Get the schedule by a specific season, by year.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `year` | `number` | The year to fetch from. |

#### Returns

`Promise`\<[`Schedule`](../classes/Schedule-1.md)\>

#### Defined in

[routes/schedule.ts:43](https://github.com/marinofranz/f1-api-client/blob/main/src/routes/schedule.ts#L43)
