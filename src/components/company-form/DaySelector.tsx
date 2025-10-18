import { daysOfTheWeek } from '@/share/constants/daySelector';

export default function DaySelector({
  value,
  onChange,
}: {
  value: string;
  onChange: (value: string) => void;
}) {
  return (
    <>
      <select
        className="border border-gray-300 rounded-md p-2 bg-white"
        id="day"
        name="Day of the week"
        about="select the day of the week"
        value={value}
        onChange={(event: React.ChangeEvent<HTMLSelectElement>) => {
          onChange(event.target.value);
        }}
      >
        <option value="" disabled>
          Choose the day
        </option>
        {daysOfTheWeek.map(day => {
          return (
            <option key={day.day} value={day.day}>
              {day.label}
            </option>
          );
        })}
      </select>
    </>
  );
}
