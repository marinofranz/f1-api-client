import { Base } from "./Base";
import { Event } from "./Event";

type SessionType =
  | "practice"
  | "qualifying"
  | "sprint_shootout"
  | "sprint"
  | "race";
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
  /**
   * The number of the session, in order. (e.g. 1 for "Practice 1")
   * @type {number}
   */
  public number: number;

  /**
   * The name of the session.
   * @type {string}
   */
  public name: string;

  /**
   * The start date of the session.
   * @type {Date}
   */
  public date: Date;

  /**
   * The event this session belongs to.
   * @type {Event}
   */
  public event: Event;

  constructor(data: SessionData, parent: Event) {
    super(data);

    this.event = parent;

    this.number = data.number;
    this.name = data.name;
    this.date = data.date;
  }

  /**
   * Get the type of the session.
   * @returns {SessionType} (e.g. "practice")
   * @readonly
   */
  get type(): SessionType {
    const lowerName = this.name.toLowerCase();

    if (lowerName.startsWith("practice")) return "practice";
    if (lowerName.startsWith("qualifying")) return "qualifying";
    if (lowerName.startsWith("sprint shootout")) return "sprint_shootout";
    if (lowerName.startsWith("sprint")) return "sprint";
    if (lowerName.startsWith("race")) return "race";

    return "practice";
  }

  /**
   * Get the estimated duration of the session in minutes.
   * @returns {number}
   * @readonly
   */
  get duration(): number {
    // Pre-season testing duration is 9 hours per day.
    if (this.event.isTesting) return 9 * 60;

    // Practice, qualifying & sprint are 1 hour.
    if (
      this.type === "practice" ||
      this.type === "qualifying" ||
      this.type === "sprint"
    )
      return 1 * 60;

    // Sprint shootout is 30 minutes.
    if (this.type === "sprint_shootout") return 0.5 * 60;

    // All other session types (race) are 2 hours.
    return 2 * 60;
  }
}
