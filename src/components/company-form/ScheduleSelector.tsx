import { timeOfTheDay } from '@/share/constants/daySelector';
import { ScheduleSelectorProps } from '@/types/scheduleRow';

export default function ScheduleSelector({
  slotId,
  scheduleValues,
  updateScheduleValues,
}: ScheduleSelectorProps) {
  function handleChange(
    slotName: string,
    event: React.ChangeEvent<HTMLSelectElement>
  ) {
    updateScheduleValues(slotId, {
      ...scheduleValues,
      [slotName]: event.target.value,
    });
  }
  return (
    <div className="flex gap-2">
      <select
        className="border border-gray-300 rounded-md p-2 bg-white"
        id="start-time"
        name="start-time"
        about="select the time of the day"
        value={scheduleValues.startTime}
        onChange={(event: React.ChangeEvent<HTMLSelectElement>) => {
          handleChange('startTime', event);
        }}
      >
        <option value="" disabled>
          From
        </option>
        {timeOfTheDay.map(hour => {
          return (
            <option key={hour.time} value={hour.time}>
              {hour.label}
            </option>
          );
        })}
      </select>
      <select
        className="border border-gray-300 rounded-md p-2 bg-white"
        id="end-time"
        name="end-time"
        about="select the time of the day"
        value={scheduleValues.endTime}
        onChange={(event: React.ChangeEvent<HTMLSelectElement>) => {
          handleChange('endTime', event);
        }}
      >
        <option value="" disabled>
          To
        </option>
        {timeOfTheDay.map(hour => {
          return (
            <option key={hour.time} value={hour.time}>
              {hour.label}
            </option>
          );
        })}
      </select>
    </div>
  );
}
