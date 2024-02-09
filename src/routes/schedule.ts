import { http } from "../lib/http";
import { deleteProps, nullify, stringsToDates } from "../lib/mutation";
import { RawScheduleItem, ScheduleItem } from "../types";

const obsoleteProps: (keyof RawScheduleItem)[] = [
  "Session1DateUtc",
  "Session2DateUtc",
  "Session3DateUtc",
  "Session4DateUtc",
  "Session5DateUtc",
];

function processScheduleArray(array: RawScheduleItem[]): ScheduleItem[] {
  const newArray: ScheduleItem[] = [];

  for (const item of array) {
    const processed = nullify(stringsToDates(item));
    const finalItem = deleteProps(processed, obsoleteProps) as ScheduleItem;

    newArray.push(finalItem);
  }

  return newArray;
}

async function getCurrentSchedule() {
  try {
    const { data } = await http.get<RawScheduleItem[]>("/schedule/");
    return processScheduleArray(data);
  } catch (error) {
    console.error(error);
    throw new Error("Couldn't fetch schedule");
  }
}

async function getRemainingEvents() {
  try {
    const { data } = await http.get<RawScheduleItem[]>("/schedule/remaining");
    return processScheduleArray(data);
  } catch (error) {
    console.error(error);
    throw new Error("Couldn't fetch schedule");
  }
}

async function getScheduleBySeason(year: number) {
  if (typeof year !== "number") throw new Error("'year' is not a number");

  try {
    const { data } = await http.get<RawScheduleItem[]>(
      `/schedule/season/${year}`
    );
    return processScheduleArray(data);
  } catch (error) {
    console.error(error);
    throw new Error("Couldn't fetch schedule");
  }
}

export const schedule = {
  getCurrentSchedule,
  getRemainingEvents,
  getScheduleBySeason,
};
