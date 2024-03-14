import { schedule } from "..";
import { Schedule } from "../structures/Schedule";

describe("Current year's schedule", () => {
  let response: Schedule;

  beforeAll(async () => {
    response = await schedule.current();
  });

  it("should not be empty", () => {
    expect(response.events.length > 0).toBe(true);
  });
});

describe("Remaining events", () => {
  let response: Schedule;

  beforeAll(async () => {
    response = await schedule.remaining();
  });

  it("should not be empty", () => {
    expect(response.events.length > 0).toBe(true);
  });
});

describe("Previous year's schedule", () => {
  const previousYear = new Date().getUTCFullYear() - 1;
  let response: Schedule;

  beforeAll(async () => {
    response = await schedule.year(previousYear);
  });

  it("should not be empty", () => {
    expect(response.events.length > 0).toBe(true);
  });

  it("should return events from the previous year", () => {
    let fromPreviousYear = true;

    for (const event of response.events) {
      if (!event.session(1)) return;
      if (event.session(1)!.date.getUTCFullYear() !== previousYear)
        fromPreviousYear = false;
    }

    expect(fromPreviousYear).toBe(true);
  });
});
