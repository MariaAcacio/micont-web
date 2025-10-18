export type TimeSlot = {
  startTime: string;
  endTime: string;
  id: string;
};

export type ScheduleRowProps = {
  rowId: number;
  selectedDay: string;
  timeSlots: TimeSlot[];
  handleUpdateSelectedDay: ({
    rowId,
    selectedDay,
  }: {
    rowId: number;
    selectedDay: string;
  }) => void;
  handleUpdateTimeSlots: ({
    rowId,
    timeSlots,
  }: {
    rowId: number;
    timeSlots: TimeSlot[];
  }) => void;
};

export type ScheduleSelectorProps = {
  slotId: string;
  scheduleValues: TimeSlot;
  updateScheduleValues: (slotId: string, newScheduleValues: TimeSlot) => void;
};
