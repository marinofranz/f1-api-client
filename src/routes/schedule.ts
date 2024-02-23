import axios from "axios";
import { RawScheduleItem } from "../types";
import { baseUrl } from "../constants";
import { Schedule } from "../structures/Schedule";

const rest = axios.create({
  baseURL: `${baseUrl}/schedule`,
});

/**
 * Get the F1 schedule for the current year.
 * @returns {Promise<ScheduleItem[]>}
 */
export async function current(): Promise<Schedule> {
  try {
    const { data } = await rest.get<RawScheduleItem[]>("/");
    return new Schedule(data);
  } catch (error) {
    console.error(error);
    throw new Error("Couldn't fetch schedule");
  }
}

/**
 * Get the remaining events on the F1 schedule for the current year.
 * @returns {Promise<ScheduleItem[]>}
 */
export async function remaining(): Promise<Schedule> {
  try {
    const { data } = await rest.get<RawScheduleItem[]>("/remaining");
    return new Schedule(data);
  } catch (error) {
    console.error(error);
    throw new Error("Couldn't fetch schedule");
  }
}

/**
 * Get the schedule by a specific season, by year.
 * @param {number} year The year to fetch from.
 * @returns {Promise<ScheduleItem[]>}
 */
export async function year(year: number): Promise<Schedule> {
  try {
    const { data } = await rest.get<RawScheduleItem[]>(`/season/${year}`);
    return new Schedule(data);
  } catch (error) {
    console.error(error);
    throw new Error("Couldn't fetch schedule");
  }
}
