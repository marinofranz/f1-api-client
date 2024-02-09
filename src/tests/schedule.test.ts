import { schedule } from "..";
import { ScheduleItem } from "../types";

describe("Current year's schedule", () => {
  let response: ScheduleItem[];

  beforeAll(async () => {
    response = await schedule.getCurrentSchedule();
  });

  it("should contain round numbers", () => {
    let hasRoundNumbers = true;

    for (const event of response) {
      if (typeof event.RoundNumber !== "number") hasRoundNumbers = false;
    }

    expect(hasRoundNumbers).toBe(true);
  });

  it("should not be empty", () => {
    expect(response.length > 0).toBe(true);
  });
});

describe("Remaining events", () => {
  let response: ScheduleItem[];

  beforeAll(async () => {
    response = await schedule.getRemainingEvents();
  });

  it("should contain round numbers", () => {
    let hasRoundNumbers = true;

    for (const event of response) {
      if (typeof event.RoundNumber !== "number") hasRoundNumbers = false;
    }

    expect(hasRoundNumbers).toBe(true);
  });

  it("should not be empty", () => {
    expect(response.length > 0).toBe(true);
  });
});

describe("Previous year's schedule", () => {
  const previousYear = new Date().getUTCFullYear() - 1;
  let response: ScheduleItem[];

  beforeAll(async () => {
    response = await schedule.getScheduleBySeason(previousYear);
  });

  it("should contain round numbers", () => {
    let hasRoundNumbers = true;

    for (const event of response) {
      if (typeof event.RoundNumber !== "number") hasRoundNumbers = false;
    }

    expect(hasRoundNumbers).toBe(true);
  });

  it("should actually return from the previous year", () => {
    let fromPreviousYear = true;

    for (const event of response) {
      if ((!event.Session1Date as any) instanceof Date)
        fromPreviousYear = false;
      if (event.Session1Date.getUTCFullYear() !== previousYear)
        fromPreviousYear = false;
    }

    expect(fromPreviousYear).toBe(true);
  });
});
