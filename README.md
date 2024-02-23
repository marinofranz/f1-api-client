# @marinocodes/f1-api-client
> [API Documentation](https://f1.marino.codes/docs)

## How to install
```sh
npm i @marinocodes/f1-api-client
```

```sh
yarn add @marinocodes/f1-api-client
```

```sh
pnpm add @marinocodes/f1-api-client
```

## Usage

### Schedule
```ts
import { schedule } from "@marinocodes/f1-api-client"
```

#### Classes

##### [`Schedule`](./src/structures/Schedule.ts)

###### [`round`](./src/structures/Schedule.ts#L27)

Get an event by its round number on the schedule.

**Requires:** `year` - [`Number`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) - The year to fetch from.

**Returns**: A promise that resolves to an [`Event`](./src/structures/Event.ts)

##### [`Event`](./src/structures/Event.ts)

###### [`practice`](./src/structures/Event.ts#L135)

Get a practice session by its number.

**Requires:** `practiceNumber` - [`Number`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) - The number of the practice session. (e.g. 1 for "Practice 1")

**Returns**: A promise that resolves to a [`Session`](./src/structures/Session.ts)

###### [`session`](./src/structures/Event.ts#L151)

Get a session by its number.

**Requires:** `sessionNumber` - [`Number`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) - The number of the practice session.

**Returns**: A promise that resolves to a [`Session`](./src/structures/Session.ts)

#### Methods

##### [`.current`](./src/routes/schedule.ts#L14)
Get the F1 schedule for the current year.

**Returns**: A promise with an array of [`Schedule`](./src/structures/Schedule.ts)

##### [`.remaining`](./src/routes/schedule.ts#L28)
Get the remaining events on the F1 schedule for the current year.

**Returns**: A promise with an array of [`Schedule`](./src/structures/Schedule.ts)

##### [`.year`](./src/routes/schedule.ts#L43)
Get the schedule by a specific season, by year.

**Requires:** `year` - [`Number`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) - The year to fetch from.

**Returns**: A promise with an array of [`Schedule`](./src/structures/Schedule.ts)
