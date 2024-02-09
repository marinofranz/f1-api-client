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

#### [`.getCurrentSchedule`](https://github.com/marinofranz/f1-api-client/blob/main/src/routes/schedule.ts#L26)
Fetches the schedule for this year's season.

**Returns**: A promise with an array of [`ScheduleItem`](https://github.com/marinofranz/f1-api-client/blob/main/src/types/index.d.ts#L47-L54)


#### [`.getRemainingEvents`](https://github.com/marinofranz/f1-api-client/blob/main/src/routes/schedule.ts#L36)
Fetches the remaining events of the current season.

**Returns**: A promise with an array of [`ScheduleItem`](https://github.com/marinofranz/f1-api-client/blob/main/src/types/index.d.ts#L47-L54)

#### [`.getScheduleBySeason`](https://github.com/marinofranz/f1-api-client/blob/main/src/routes/schedule.ts#L46)
Fetches the schedule for `year`.

**Requires:** `year` - [`Number`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)

**Returns**: A promise with an array of [`ScheduleItem`](https://github.com/marinofranz/f1-api-client/blob/main/src/types/index.d.ts#L47-L54)
