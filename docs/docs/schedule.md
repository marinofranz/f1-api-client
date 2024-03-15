---
sidebar_position: 2
---

# Schedule

## Importing

```ts
import { schedule } from "@marinocodes/f1-api-client"
```

## Methods

### `.current`
Get the F1 schedule for the current year.

#### Returns
[Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) that resolves to [Schedule](../reference/schedule)

#### Example

```ts
await schedule.current()
```


### `.remaining`
Get the remaining events on the F1 schedule for the current year.

#### Returns
[Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) that resolves to [Schedule](../reference/schedule)

#### Example

```ts
await schedule.remaining()
```


### `.year`
Get the schedule by a specific season, by year.

#### Requires
`year` ([Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)) - The year to fetch from.

#### Returns
[Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) that resolves to [Schedule](../reference/schedule)

#### Example

```ts
await schedule.year(2023)
```
