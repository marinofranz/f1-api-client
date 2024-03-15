---
id: "Event"
title: "Class: Event"
sidebar_label: "Event"
sidebar_position: 0
custom_edit_url: null
---

Represents an event that belongs to a schedule.

**`Param`**

Data to process.

**`Param`**

Parent schedule to set.

## Hierarchy

- [`Base`](Base.md)\<[`RawScheduleItem`](../interfaces/RawScheduleItem.md)\>

  ↳ **`Event`**

## Constructors

### constructor

• **new Event**(`data`, `parent`): [`Event`](Event.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | [`RawScheduleItem`](../interfaces/RawScheduleItem.md) |
| `parent` | [`Schedule`](Schedule-1.md) |

#### Returns

[`Event`](Event.md)

#### Overrides

[Base](Base.md).[constructor](Base.md#constructor)

#### Defined in

[structures/Event.ts:68](https://github.com/marinofranz/f1-api-client/blob/7a7ebf9/src/structures/Event.ts#L68)

## Properties

### country

• **country**: `string`

The country the event takes place in.

#### Defined in

[structures/Event.ts:26](https://github.com/marinofranz/f1-api-client/blob/7a7ebf9/src/structures/Event.ts#L26)

___

### eventDate

• **eventDate**: `Date`

The date of the event, which is always at midnight of the same day, in UTC.

#### Defined in

[structures/Event.ts:50](https://github.com/marinofranz/f1-api-client/blob/7a7ebf9/src/structures/Event.ts#L50)

___

### eventFormat

• **eventFormat**: `EventFormat`

The format of the event.

#### Defined in

[structures/Event.ts:60](https://github.com/marinofranz/f1-api-client/blob/7a7ebf9/src/structures/Event.ts#L60)

___

### eventName

• **eventName**: `string`

The name of the event, without sponsors. This is shorter than the official event name.

#### Defined in

[structures/Event.ts:55](https://github.com/marinofranz/f1-api-client/blob/7a7ebf9/src/structures/Event.ts#L55)

___

### location

• **location**: `string`

The location the event takes place in. This is usually a city or an area.

#### Defined in

[structures/Event.ts:32](https://github.com/marinofranz/f1-api-client/blob/7a7ebf9/src/structures/Event.ts#L32)

___

### officialEventName

• **officialEventName**: `string`

The official event name, with sponsors, etc.

#### Defined in

[structures/Event.ts:44](https://github.com/marinofranz/f1-api-client/blob/7a7ebf9/src/structures/Event.ts#L44)

___

### roundNumber

• **roundNumber**: `number`

The round number of the event.

#### Defined in

[structures/Event.ts:20](https://github.com/marinofranz/f1-api-client/blob/7a7ebf9/src/structures/Event.ts#L20)

___

### schedule

• **schedule**: [`Schedule`](Schedule-1.md)

The schedule this event belongs to.

#### Defined in

[structures/Event.ts:38](https://github.com/marinofranz/f1-api-client/blob/7a7ebf9/src/structures/Event.ts#L38)

___

### sessions

• **sessions**: [`Session`](Session.md)[]

An array of sessions that take place throughout the event.

#### Defined in

[structures/Event.ts:66](https://github.com/marinofranz/f1-api-client/blob/7a7ebf9/src/structures/Event.ts#L66)

## Accessors

### isSprint

• `get` **isSprint**(): `boolean`

Whether the event is a sprint weekend.

#### Returns

`boolean`

#### Defined in

[structures/Event.ts:124](https://github.com/marinofranz/f1-api-client/blob/7a7ebf9/src/structures/Event.ts#L124)

___

### isTesting

• `get` **isTesting**(): `boolean`

Whether the event is pre-season testing.

#### Returns

`boolean`

#### Defined in

[structures/Event.ts:115](https://github.com/marinofranz/f1-api-client/blob/7a7ebf9/src/structures/Event.ts#L115)

## Methods

### practice

▸ **practice**(`practiceNumber`): ``null`` \| [`Session`](Session.md)

Get a practice session by its number.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `practiceNumber` | `number` | The number of the practice session. (e.g. 1 for "Practice 1") |

#### Returns

``null`` \| [`Session`](Session.md)

#### Defined in

[structures/Event.ts:135](https://github.com/marinofranz/f1-api-client/blob/7a7ebf9/src/structures/Event.ts#L135)

___

### session

▸ **session**(`sessionNumber`): ``null`` \| [`Session`](Session.md)

Get a session by its number,

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `sessionNumber` | `number` | The number of the session. |

#### Returns

``null`` \| [`Session`](Session.md)

#### Defined in

[structures/Event.ts:151](https://github.com/marinofranz/f1-api-client/blob/7a7ebf9/src/structures/Event.ts#L151)
