import { RawScheduleItem } from "../types";
import { Base } from "./Base";
import { Schedule } from "./Schedule";
import { Session, SessionData } from "./Session";

type EventFormat = "conventional" | "sprint" | "sprint_shootout" | "testing";
type TemporarySession = Partial<SessionData>;

/**
 * Represents an event that belongs to a schedule.
 * @param {RawScheduleItem} data Data to process.
 * @param {Schedule} parent Parent schedule to set.
 * @extends {Base}
 */
export class Event extends Base<RawScheduleItem> {
  public roundNumber: number;
  public country: string;
  public location: string;
  public schedule: Schedule;
  public officialEventName: string;
  public eventDate: Date;
  public eventName: string;
  public eventFormat: EventFormat;
  public sessions: Session[];

  constructor(data: RawScheduleItem, parent: Schedule) {
    super(data);

    /**
     * The schedule this event belongs to.
     * @type {Schedule}
     */
    this.schedule = parent;

    /**
     * The round number of the event.
     * @type {number}
     */
    this.roundNumber = data.RoundNumber;

    /**
     * The country the event takes place in.
     * @type {string}
     */
    this.country = data.Country;

    /**
     * The location the event takes place in. This is usually a city or an area.
     * @type {string}
     */
    this.location = data.Location;

    /**
     * The official event name, with sponsors, etc.
     * @type {string}
     */
    this.officialEventName = data.OfficialEventName;

    /**
     * The date of the event, which is always at midnight of the same day, in UTC.
     * @type {Date}
     */
    this.eventDate = new Date(data.EventDate);

    /**
     * The name of the event, without sponsors. This is shorter than the official event name.
     * @type {string}
     */
    this.eventName = data.EventName;

    /**
     * The format of the event.
     * @type {EventFormat}
     */
    this.eventFormat = data.EventFormat as EventFormat;

    /**
     * An array of sessions that take place throughout the event.
     * @type {Session[]}
     */
    this.sessions = [];

    let currentSession: TemporarySession = {};
    for (const [key, value] of Object.entries(data)) {
      if (key.startsWith("Session")) {
        if (value === "None" || value === "NaT") continue;
        if (key.endsWith("Utc")) continue;

        const sessionNumber = parseInt(key.charAt(7));

        currentSession.number = sessionNumber;
        if (key.endsWith(sessionNumber.toString())) {
          currentSession.name = value as string;
        } else if (key.endsWith("Date")) {
          currentSession.date = new Date(value as string);
        }

        if (
          currentSession.number &&
          currentSession.name &&
          currentSession.date
        ) {
          this.sessions.push(new Session(currentSession as SessionData, this));
          currentSession = {};
        }
      }
    }
  }

  /**
   * Whether the event is pre-season testing.
   * @returns {boolean}
   * @readonly
   */
  get isTesting(): boolean {
    return this.eventFormat === "testing";
  }

  /**
   * Whether the event is a sprint weekend.
   * @returns {boolean}
   * @readonly
   */
  get isSprint(): boolean {
    return (
      this.eventFormat === "sprint" || this.eventFormat === "sprint_shootout"
    );
  }

  /**
   * Get a practice session by its number.
   * @param {number} practiceNumber The number of the practice session. (e.g. 1 for "Practice 1")
   * @returns {(Session | null)}
   */
  practice(practiceNumber: number): Session | null {
    if (practiceNumber > 3)
      throw new Error("Sessions are no less than 1 or more than 3.");

    const foundSession = this.sessions.find(
      (session) =>
        session.name.startsWith("Practice") && session.number === practiceNumber
    );
    return foundSession || null;
  }

  /**
   * Get a session by its number,
   * @param {number} sessionNumber The number of the session.
   * @returns {(Session | null)}
   */
  session(sessionNumber: number): Session | null {
    if (sessionNumber > 5)
      throw new Error("Sessions are no less than 1 or more than 5.");

    const foundSession = this.sessions.find(
      (session) => session.number === sessionNumber
    );
    return foundSession || null;
  }
}
