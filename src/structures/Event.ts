import { RawScheduleItem } from "../types";
import { Base } from "./Base";
import { Schedule } from "./Schedule";
import { Session, SessionData } from "./Session";

type EventFormat = "conventional" | "sprint" | "sprint_shootout" | "testing";
type TemporarySession = Partial<SessionData>;

/**
 * Represents an event that belongs to a schedule.
 * @extends {Base}
 */
export class Event extends Base<RawScheduleItem> {
  /**
   * The round number of the event.
   * @type {number}
   */
  public roundNumber: number;

  /**
   * The country the event takes place in.
   * @type {string}
   */
  public country: string;

  /**
   * The location the event takes place in. This is usually a city or an area.
   * @type {string}
   */
  public location: string;

  /**
   * The schedule this event belongs to.
   * @type {Schedule}
   */
  public schedule: Schedule;

  /**
   * The official event name, with sponsors, etc.
   * @type {string}
   */
  public officialEventName: string;

  /**
   * The date of the event, which is always at midnight of the same day, in UTC.
   * @type {Date}
   */
  public eventDate: Date;
  /**
   * The name of the event, without sponsors. This is shorter than the official event name.
   * @type {string}
   */
  public eventName: string;
  /**
   * The format of the event.
   * @type {EventFormat}
   */
  public eventFormat: EventFormat;

  /**
   * An array of sessions that take place throughout the event.
   * @type {Session[]}
   */
  public sessions: Session[];

  /**
   * @param {RawScheduleItem} data Data to process.
   * @param {Schedule} parent Parent schedule to set.
   */
  constructor(data: RawScheduleItem, parent: Schedule) {
    super(data);

    this.schedule = parent;

    this.roundNumber = data.RoundNumber;
    this.country = data.Country;
    this.location = data.Location;
    this.officialEventName = data.OfficialEventName;
    this.eventDate = new Date(data.EventDate);
    this.eventName = data.EventName;
    this.eventFormat = data.EventFormat as EventFormat;

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
