/* Schedule */

export interface RawScheduleItem {
  RoundNumber: number;
  Country: string;
  Location: string;
  OfficialEventName: string;
  EventDate: string;
  EventName: string;
  EventFormat: string; // TODO: enums

  Session1: string;
  Session1Date: string;
  Session1DateUtc: string;

  Session2: string;
  Session2Date: string;
  Session2DateUtc: string;

  Session3: string | null;
  Session3Date: string | null;
  Session3DateUtc: string | null;

  Session4: string | null;
  Session4Date: string | null;
  Session4DateUtc: string | null;

  Session5: string | null;
  Session5Date: string | null;
  Session5DateUtc: string | null;

  F1ApiSupport: boolean;
}
