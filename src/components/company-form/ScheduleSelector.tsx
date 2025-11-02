import { timeOfTheDay } from '@/share/constants/daySelector';
import { ScheduleSelectorProps } from '@/types/scheduleRow';
import { MenuItem, TextField } from '@mui/material';

export default function ScheduleSelector({
  slotId,
  scheduleValues,
  updateScheduleValues,
}: ScheduleSelectorProps) {
  function handleChange(
    slotName: string,
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    updateScheduleValues(slotId, {
      ...scheduleValues,
      [slotName]: event.target.value,
    });
  }
  return (
    <div className="flex gap-2">
      <TextField
        id="start-time-select"
        label="From"
        select
        variant="outlined"
        value={scheduleValues.startTime}
        onChange={event => {
          handleChange('startTime', event);
        }}
        className="border border-gray-300 rounded-md p-2 bg-white w-32"
        SelectProps={{
          MenuProps: {
            PaperProps: {
              sx: {
                maxHeight: 150,
              },
            },
          },
        }}
      >
        {timeOfTheDay.map(hour => (
          <MenuItem key={hour.time} value={hour.time} className="h-10">
            {hour.label}
          </MenuItem>
        ))}
      </TextField>

      <TextField
        className="border border-gray-300 rounded-md p-2 bg-white w-32"
        id="end-time"
        name="end-time"
        label="To"
        select
        variant="outlined"
        value={scheduleValues.endTime}
        onChange={event => {
          handleChange('endTime', event);
        }}
        SelectProps={{
          MenuProps: {
            PaperProps: {
              sx: {
                maxHeight: 150,
              },
            },
          },
        }}
      >
        {timeOfTheDay.map(hour => {
          return (
            <MenuItem key={hour.time} value={hour.time} className="h-10">
              {hour.label}
            </MenuItem>
          );
        })}
      </TextField>
    </div>
  );
}
