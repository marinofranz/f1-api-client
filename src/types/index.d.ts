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

type NullableDateProperties = "Session4Date" | "Session5Date";
type NonNullableDateProperties =
  | "Session1Date"
  | "Session2Date"
  | "Session3Date";
type OmittedUtcProperties =
  | "Session1DateUtc"
  | "Session2DateUtc"
  | "Session3DateUtc"
  | "Session4DateUtc"
  | "Session5DateUtc";

export type ScheduleItem = Omit<
  RawScheduleItem,
  NullableDateProperties | OmittedUtcProperties
> & {
  [K in NonNullableDateProperties]: Date;
} & {
  [K in NullableDateProperties]?: Date | null;
};
