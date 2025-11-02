import { daysOfTheWeek } from '@/share/constants/daySelector';
import { MenuItem, TextField } from '@mui/material';

export default function DaySelector({
  value,
  onChange,
}: {
  value: string;
  onChange: (value: string) => void;
}) {
  return (
    <>
      <TextField
        id="day"
        label="Choose day"
        select
        variant="outlined"
        value={value}
        onChange={event => {
          onChange(event.target.value);
        }}
        className="border border-gray-300 rounded-md p-2 bg-white w-64"
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
        {daysOfTheWeek.map(day => (
          <MenuItem key={day.day} value={day.day} className="h-10">
            {day.label}
          </MenuItem>
        ))}
      </TextField>
    </>
  );
}
