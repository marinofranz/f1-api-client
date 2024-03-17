---
id: "Schedule-1"
title: "Class: Schedule"
sidebar_label: "Schedule"
sidebar_position: 0
custom_edit_url: null
---

Represents an F1 schedule.

## Hierarchy

- [`Base`](Base.md)\<[`RawScheduleItem`](../interfaces/RawScheduleItem.md)[]\>

  ↳ **`Schedule`**

## Constructors

### constructor

• **new Schedule**(`data`): [`Schedule`](Schedule-1.md)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `data` | [`RawScheduleItem`](../interfaces/RawScheduleItem.md)[] | Data to process. |

#### Returns

[`Schedule`](Schedule-1.md)

#### Overrides

[Base](Base.md).[constructor](Base.md#constructor)

#### Defined in

[structures/Schedule.ts:19](https://github.com/marinofranz/f1.ts/blob/main/src/structures/Schedule.ts#L19)

## Properties

### events

• **events**: [`Event`](Event.md)[]

An array of events that belong to the schedule.

#### Defined in

[structures/Schedule.ts:14](https://github.com/marinofranz/f1.ts/blob/main/src/structures/Schedule.ts#L14)

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

[structures/Schedule.ts:33](https://github.com/marinofranz/f1.ts/blob/main/src/structures/Schedule.ts#L33)
