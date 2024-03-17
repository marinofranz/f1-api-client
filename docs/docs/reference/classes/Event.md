---
id: "Event"
title: "Class: Event"
sidebar_label: "Event"
sidebar_position: 0
custom_edit_url: null
---

Represents an event that belongs to a schedule.

## Hierarchy

- [`Base`](Base.md)\<[`RawScheduleItem`](../interfaces/RawScheduleItem.md)\>

  ↳ **`Event`**

## Constructors

### constructor

• **new Event**(`data`, `parent`): [`Event`](Event.md)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `data` | [`RawScheduleItem`](../interfaces/RawScheduleItem.md) | Data to process. |
| `parent` | [`Schedule`](Schedule-1.md) | Parent schedule to set. |

#### Returns

[`Event`](Event.md)

#### Overrides

[Base](Base.md).[constructor](Base.md#constructor)

#### Defined in

[structures/Event.ts:70](https://github.com/marinofranz/f1.ts/blob/main/src/structures/Event.ts#L70)

## Properties

### country

• **country**: `string`

The country the event takes place in.

#### Defined in

[structures/Event.ts:24](https://github.com/marinofranz/f1.ts/blob/main/src/structures/Event.ts#L24)

___

### eventDate

• **eventDate**: `Date`

The date of the event, which is always at midnight of the same day, in UTC.

#### Defined in

[structures/Event.ts:48](https://github.com/marinofranz/f1.ts/blob/main/src/structures/Event.ts#L48)

___

### eventFormat

• **eventFormat**: `EventFormat`

The format of the event.

#### Defined in

[structures/Event.ts:58](https://github.com/marinofranz/f1.ts/blob/main/src/structures/Event.ts#L58)

___

### eventName

• **eventName**: `string`

The name of the event, without sponsors. This is shorter than the official event name.

#### Defined in

[structures/Event.ts:53](https://github.com/marinofranz/f1.ts/blob/main/src/structures/Event.ts#L53)

___

### location

• **location**: `string`

The location the event takes place in. This is usually a city or an area.

#### Defined in

[structures/Event.ts:30](https://github.com/marinofranz/f1.ts/blob/main/src/structures/Event.ts#L30)

___

### officialEventName

• **officialEventName**: `string`

The official event name, with sponsors, etc.

#### Defined in

[structures/Event.ts:42](https://github.com/marinofranz/f1.ts/blob/main/src/structures/Event.ts#L42)

___

### roundNumber

• **roundNumber**: `number`

The round number of the event.

#### Defined in

[structures/Event.ts:18](https://github.com/marinofranz/f1.ts/blob/main/src/structures/Event.ts#L18)

___

### schedule

• **schedule**: [`Schedule`](Schedule-1.md)

The schedule this event belongs to.

#### Defined in

[structures/Event.ts:36](https://github.com/marinofranz/f1.ts/blob/main/src/structures/Event.ts#L36)

___

### sessions

• **sessions**: [`Session`](Session.md)[]

An array of sessions that take place throughout the event.

#### Defined in

[structures/Event.ts:64](https://github.com/marinofranz/f1.ts/blob/main/src/structures/Event.ts#L64)

## Accessors

### isSprint

• `get` **isSprint**(): `boolean`

Whether the event is a sprint weekend.

#### Returns

`boolean`

#### Defined in

[structures/Event.ts:126](https://github.com/marinofranz/f1.ts/blob/main/src/structures/Event.ts#L126)

___

### isTesting

• `get` **isTesting**(): `boolean`

Whether the event is pre-season testing.

#### Returns

`boolean`

#### Defined in

[structures/Event.ts:117](https://github.com/marinofranz/f1.ts/blob/main/src/structures/Event.ts#L117)

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

[structures/Event.ts:137](https://github.com/marinofranz/f1.ts/blob/main/src/structures/Event.ts#L137)

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

[structures/Event.ts:153](https://github.com/marinofranz/f1.ts/blob/main/src/structures/Event.ts#L153)
