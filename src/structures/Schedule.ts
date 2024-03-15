import { Base } from "./Base";
import { RawScheduleItem } from "../types";
import { Event } from "./Event";

/**
 * Represents an F1 schedule.
 * @extends {Base}
 */
export class Schedule extends Base<RawScheduleItem[]> {
  /**
   * An array of events that belong to the schedule.
   * @type {Event[]}
   */
  public events: Event[];

  /**
   * @param {RawScheduleItem[]} data Data to process.
   */
  constructor(data: RawScheduleItem[]) {
    super(data);
    this.events = [];

    for (const eventData of data) {
      this.events.push(new Event(eventData, this));
    }
  }

  /**
   * Get an event by its round number on the schedule.
   * @param {number} number The round number.
   * @returns {(Event | null)}
   */
  round(number: number): Event | null {
    const foundEvent = this.events.find(
      (event) => event.roundNumber === number
    );
    return foundEvent || null;
  }
}
