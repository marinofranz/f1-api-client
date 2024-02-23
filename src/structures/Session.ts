import { Base } from "./Base";
import { Event } from "./Event";

export interface SessionData {
  number: number;
  name: string;
  date: Date;
}

/**
 * Represents a session that belongs to an event.
 * @param {SessionData} data Data to process.
 * @param {Event} parent Parent event to set.
 * @extends {Base}
 */
export class Session extends Base<SessionData> {
  public number: number;
  public name: string;
  public date: Date;
  public event: Event;

  constructor(data: SessionData, parent: Event){
    super(data)

    /**
     * The event this session belongs to.
     * @type {Event}
     */
    this.event = parent

    /**
     * The number of the session, in order. (e.g. 1 for "Practice 1")
     * @type {number}
     */
    this.number = data.number;

    /**
     * The name of the session.
     * @type {string}
     */
    this.name = data.name;

    /**
     * The start date of the session.
     * @type {Date}
     */
    this.date = data.date;
  }
}
