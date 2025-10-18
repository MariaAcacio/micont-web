import React from 'react';
import DaySelector from './DaySelector';
import ScheduleSelector from './ScheduleSelector';
import RoundedButton from '../rounded-button/RoundedButton';
import { MdOutlineRemove } from 'react-icons/md';
import { FaPlus } from 'react-icons/fa6';
import { ScheduleRowProps, TimeSlot } from '@/types/scheduleRow';

export default function ScheduleRow({
  rowId,
  selectedDay,
  timeSlots,
  handleUpdateSelectedDay,
  handleUpdateTimeSlots,
}: ScheduleRowProps) {
  function handleUpdateScheduleValues(slotId: string, newTimeSlot: TimeSlot) {
    const slotIndex = Number(slotId.at(-1));
    const newTimeSlots = [...timeSlots];
    newTimeSlots[slotIndex] = newTimeSlot;
    handleUpdateTimeSlots({
      rowId,
      timeSlots: newTimeSlots,
    });
  }

  return (
    <div className="flex gap-3">
      <DaySelector
        value={selectedDay}
        onChange={value =>
          handleUpdateSelectedDay({ rowId, selectedDay: value })
        }
      />
      {timeSlots.map((timeSlot, index) => {
        const isLast = index === timeSlots.length - 1;
        const hasMultipleSlots = timeSlots.length > 1;

        return (
          <React.Fragment key={timeSlot.id}>
            {index !== 0 && <span>-</span>}
            <ScheduleSelector
              slotId={timeSlot.id}
              scheduleValues={timeSlot}
              updateScheduleValues={handleUpdateScheduleValues}
              key={timeSlot.id}
            />
            {hasMultipleSlots && isLast && (
              <RoundedButton
                icon={
                  <MdOutlineRemove className="w-4 h-4 text-primary hover:text-primary-dark" />
                }
                onClick={(event: React.MouseEvent<HTMLButtonElement>) => {
                  event.preventDefault();
                  handleUpdateTimeSlots({
                    rowId,
                    timeSlots: timeSlots.slice(0, -1),
                  });
                }}
              />
            )}
          </React.Fragment>
        );
      })}

      <RoundedButton
        onClick={(event: React.MouseEvent<HTMLButtonElement>) => {
          event.preventDefault();
          handleUpdateTimeSlots({
            rowId,
            timeSlots: [
              ...timeSlots,
              {
                startTime: '',
                endTime: '',
                id: `${rowId}-${timeSlots.length}`,
              },
            ],
          });
        }}
        icon={
          <FaPlus className="w-4 h-4 text-primary hover:text-primary-dark" />
        }
      />
    </div>
  );
}
