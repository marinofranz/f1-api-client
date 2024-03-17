---
id: "Session"
title: "Class: Session"
sidebar_label: "Session"
sidebar_position: 0
custom_edit_url: null
---

Represents a session that belongs to an event.

## Hierarchy

- [`Base`](Base.md)\<[`SessionData`](../interfaces/SessionData.md)\>

  ↳ **`Session`**

## Constructors

### constructor

• **new Session**(`data`, `parent`): [`Session`](Session.md)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `data` | [`SessionData`](../interfaces/SessionData.md) | Data to process. |
| `parent` | [`Event`](Event.md) | Parent event to set. |

#### Returns

[`Session`](Session.md)

#### Overrides

[Base](Base.md).[constructor](Base.md#constructor)

#### Defined in

[structures/Session.ts:49](https://github.com/marinofranz/f1.ts/blob/main/src/structures/Session.ts#L49)

## Properties

### date

• **date**: `Date`

The start date of the session.

#### Defined in

[structures/Session.ts:37](https://github.com/marinofranz/f1.ts/blob/main/src/structures/Session.ts#L37)

___

### event

• **event**: [`Event`](Event.md)

The event this session belongs to.

#### Defined in

[structures/Session.ts:43](https://github.com/marinofranz/f1.ts/blob/main/src/structures/Session.ts#L43)

___

### name

• **name**: `string`

The name of the session.

#### Defined in

[structures/Session.ts:31](https://github.com/marinofranz/f1.ts/blob/main/src/structures/Session.ts#L31)

___

### number

• **number**: `number`

The number of the session, in order. (e.g. 1 for "Practice 1")

#### Defined in

[structures/Session.ts:25](https://github.com/marinofranz/f1.ts/blob/main/src/structures/Session.ts#L25)

## Accessors

### duration

• `get` **duration**(): `number`

Get the estimated duration of the session in minutes.

#### Returns

`number`

#### Defined in

[structures/Session.ts:81](https://github.com/marinofranz/f1.ts/blob/main/src/structures/Session.ts#L81)

___

### type

• `get` **type**(): [`SessionType`](../#sessiontype)

Get the type of the session.

#### Returns

[`SessionType`](../#sessiontype)

(e.g. "practice")

#### Defined in

[structures/Session.ts:64](https://github.com/marinofranz/f1.ts/blob/main/src/structures/Session.ts#L64)
