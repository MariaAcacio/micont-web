import React, { useState } from 'react';
import { FaPlus } from 'react-icons/fa6';
import RoundedButton from '../rounded-button/RoundedButton';
import ScheduleRow from './ScheduleRow';
import { MdOutlineRemove } from 'react-icons/md';
import { TimeSlot } from '@/types/scheduleRow';
import ServicesRow from './ServicesRow';

export default function CompanyForm() {
  const [formRows, setFormRows] = useState([
    {
      id: '0',
      selectedDay: '',
      timeSlots: [{ startTime: '', endTime: '', id: '0-0' }],
    },
  ]);

  function handleUpdateSelectedDay({
    rowId,
    selectedDay,
  }: {
    rowId: number;
    selectedDay: string;
  }) {
    const newState = [...formRows];
    newState[rowId].selectedDay = selectedDay;
    setFormRows(newState);
  }

  function handleUpdateTimeSlots({
    rowId,
    timeSlots,
  }: {
    rowId: number;
    timeSlots: TimeSlot[];
  }) {
    const newState = [...formRows];
    newState[rowId].timeSlots = timeSlots;
    setFormRows(newState);
  }

  console.log({ formRows });

  return (
    <form className="flex flex-col gap-4 ">
      {/* Company Name section */}
      <div>
        <label htmlFor="name">Company Name</label>
        <br />
        <input
          className="border border-gray-300 rounded-md p-2 bg-white"
          type="text"
          id="name"
          name="name"
        />
      </div>
      {/* Description section */}
      <div>
        <label htmlFor="description">Description</label>
        <br />
        <input
          className="border border-gray-300 rounded-md p-2 bg-white"
          type="text"
          id="description"
          name="description"
        />
      </div>
      {/* Services section */}
      <div>
        <label htmlFor="description">Services</label>
        <br />
        <ServicesRow />
      </div>
      <div className="flex flex-col gap-6">
        {/* Schedule section */}
        <label className="block mb-2" htmlFor="description">
          Schedule
        </label>
        {formRows.map((formRow, index) => {
          return (
            <ScheduleRow
              rowId={Number(formRow.id)}
              selectedDay={formRow.selectedDay}
              timeSlots={formRow.timeSlots}
              handleUpdateSelectedDay={handleUpdateSelectedDay}
              handleUpdateTimeSlots={handleUpdateTimeSlots}
              key={index}
            />
          );
        })}
        <div className="flex gap-3">
          {formRows.length > 1 && (
            <RoundedButton
              onClick={(event: React.MouseEvent<HTMLButtonElement>) => {
                event.preventDefault();
                setFormRows(formRows.slice(0, -1));
              }}
              icon={
                <MdOutlineRemove className="w-4 h-4 text-primary hover:text-primary-dark" />
              }
            />
          )}
          <RoundedButton
            onClick={(event: React.MouseEvent<HTMLButtonElement>) => {
              event.preventDefault();
              setFormRows([
                ...formRows,
                {
                  id: `${formRows.length}`,
                  selectedDay: '',
                  timeSlots: [
                    { startTime: '', endTime: '', id: `${formRows.length}-0` },
                  ],
                },
              ]);
            }}
            icon={
              <FaPlus className="w-4 h-4 text-primary hover:text-primary-dark" />
            }
          />
        </div>
      </div>
      <br />
      {/* <button
        className="bg-primary w-32 p-2 rounded-md text-white"
        type="submit"
      >
        Submit
      </button> */}
    </form>
  );
}
