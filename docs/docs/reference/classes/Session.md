---
id: "Session"
title: "Class: Session"
sidebar_label: "Session"
sidebar_position: 0
custom_edit_url: null
---

Represents a session that belongs to an event.

**`Param`**

Data to process.

**`Param`**

Parent event to set.

## Hierarchy

- [`Base`](Base.md)\<[`SessionData`](../interfaces/SessionData.md)\>

  ↳ **`Session`**

## Constructors

### constructor

• **new Session**(`data`, `parent`): [`Session`](Session.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | [`SessionData`](../interfaces/SessionData.md) |
| `parent` | [`Event`](Event.md) |

#### Returns

[`Session`](Session.md)

#### Overrides

[Base](Base.md).[constructor](Base.md#constructor)

#### Defined in

[structures/Session.ts:47](https://github.com/marinofranz/f1-api-client/blob/7a7ebf9/src/structures/Session.ts#L47)

## Properties

### date

• **date**: `Date`

The start date of the session.

#### Defined in

[structures/Session.ts:39](https://github.com/marinofranz/f1-api-client/blob/7a7ebf9/src/structures/Session.ts#L39)

___

### event

• **event**: [`Event`](Event.md)

The event this session belongs to.

#### Defined in

[structures/Session.ts:45](https://github.com/marinofranz/f1-api-client/blob/7a7ebf9/src/structures/Session.ts#L45)

___

### name

• **name**: `string`

The name of the session.

#### Defined in

[structures/Session.ts:33](https://github.com/marinofranz/f1-api-client/blob/7a7ebf9/src/structures/Session.ts#L33)

___

### number

• **number**: `number`

The number of the session, in order. (e.g. 1 for "Practice 1")

#### Defined in

[structures/Session.ts:27](https://github.com/marinofranz/f1-api-client/blob/7a7ebf9/src/structures/Session.ts#L27)

## Accessors

### duration

• `get` **duration**(): `number`

Get the estimated duration of the session in minutes.

#### Returns

`number`

#### Defined in

[structures/Session.ts:79](https://github.com/marinofranz/f1-api-client/blob/7a7ebf9/src/structures/Session.ts#L79)

___

### type

• `get` **type**(): [`SessionType`](../#sessiontype)

Get the type of the session.

#### Returns

[`SessionType`](../#sessiontype)

(e.g. "practice")

#### Defined in

[structures/Session.ts:62](https://github.com/marinofranz/f1-api-client/blob/7a7ebf9/src/structures/Session.ts#L62)
