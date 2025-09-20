export interface CalendarModelProperties {
  onSetVisible?: () => void;
  onFilter?: (dateSelected: Date) => void;
}
