---
id: "Schedule-1"
title: "Class: Schedule"
sidebar_label: "Schedule"
sidebar_position: 0
custom_edit_url: null
---

Represents an F1 schedule.

**`Param`**

Data to process.

## Hierarchy

- [`Base`](Base.md)\<[`RawScheduleItem`](../interfaces/RawScheduleItem.md)[]\>

  ↳ **`Schedule`**

## Constructors

### constructor

• **new Schedule**(`data`): [`Schedule`](Schedule-1.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | [`RawScheduleItem`](../interfaces/RawScheduleItem.md)[] |

#### Returns

[`Schedule`](Schedule-1.md)

#### Overrides

[Base](Base.md).[constructor](Base.md#constructor)

#### Defined in

[structures/Schedule.ts:17](https://github.com/marinofranz/f1-api-client/blob/7a7ebf9/src/structures/Schedule.ts#L17)

## Properties

### events

• **events**: [`Event`](Event.md)[]

An array of events that belong to the schedule.

#### Defined in

[structures/Schedule.ts:15](https://github.com/marinofranz/f1-api-client/blob/7a7ebf9/src/structures/Schedule.ts#L15)

## Methods

### round

▸ **round**(`number`): ``null`` \| [`Event`](Event.md)

Get an event by its round number on the schedule.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `number` | `number` | The round number. |

#### Returns

``null`` \| [`Event`](Event.md)

#### Defined in

[structures/Schedule.ts:31](https://github.com/marinofranz/f1-api-client/blob/7a7ebf9/src/structures/Schedule.ts#L31)
