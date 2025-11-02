'use client';

import React, { useState } from 'react';
import { FaPlus } from 'react-icons/fa6';
import RoundedButton from '../rounded-button/RoundedButton';
import ScheduleRow from './ScheduleRow';
import { MdOutlineRemove } from 'react-icons/md';
import { TimeSlot } from '@/types/scheduleRow';
import ServicesRow from './ServicesRow';
import {
  Box,
  FormControl,
  FormLabel,
  Input,
  TextareaAutosize,
  TextField,
} from '@mui/material';

export type Service = {
  serviceName: string;
  serviceDescription: string;
  duration: string;
};
export default function CompanyForm() {
  const [formRows, setFormRows] = useState([
    {
      id: '0',
      selectedDay: '',
      timeSlots: [{ startTime: '', endTime: '', id: '0-0' }],
    },
  ]);
  const [services, setServices] = useState<Service[]>([]);
  // const [data, setData] = useState<any>(null);
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

  // useEffect(() => {
  //   //org name + description
  //   //  id: cb9c338df90c41aeb3f29a4cebfa295c
  //   // id: b3b403a7997146e0abf93455249b447a
  //   const orgName = 'MiCont';
  //   const orgDescription = 'MiCont app';
  //   const getApi = async () => {
  //     // const apiUrl = `${process.env.NEXT_PUBLIC_API_URL}/org`;
  //     const apiUrl = `${process.env.NEXT_PUBLIC_API_URL}/org/b3b403a7997146e0abf93455249b447a`;
  //     if (!apiUrl) {
  //       console.error('NEXT_PUBLIC_API_URL is not defined');
  //       return;
  //     }
  //     try {
  //       const res = await fetch(apiUrl, {
  //         method: 'GET',
  //         headers: {
  //           'Content-Type': 'application/json',
  //         },
  //         // body: JSON.stringify({
  //         //   org_name: orgName,
  //         //   description: orgDescription,
  //         // }),
  //       });
  //       setData(res);
  //     } catch (error) {
  //       console.error('Error fetching API:', error);
  //     }
  //   };
  //   getApi();
  // }, []);

  console.log({ formRows });

  return (
    <FormControl className="flex flex-col gap-4 ">
      {/* Company Name section */}
      <FormLabel
        htmlFor="about-your-company"
        sx={{
          fontWeight: 'medium',
          paddingBottom: '6px',
          borderBottom: '1px solid var(--color-primary)',
          // width: 'fit-content',
          color: 'var(--color-primary)',
        }}
      >
        About your company
      </FormLabel>
      <Box>
        <TextField
          id="company-name"
          label="Company Name"
          variant="outlined"
          className="border border-gray-300 rounded-md p-4 placeholder:text-gray-100 w-full"
          // value={serviceName}
          // onChange={e => setServiceName(e.target.value)}
        />
      </Box>
      {/* Description section */}
      <div>
        <TextareaAutosize
          id="company-description"
          placeholder="Company Description"
          className="border border-gray-300 rounded-md p-4  min-h-20 placeholder:text-gray-400 w-full"
          // value={serviceDescription}
          // onChange={e => setServiceDescription(e.target.value)}
        />
      </div>
      {/* Services section */}
      <Box className="flex flex-col gap-4">
        <FormLabel
          htmlFor="services"
          sx={{
            fontWeight: 'medium',
            paddingBottom: '6px',
            borderBottom: '1px solid var(--color-primary)',
            // width: 'fit-content',
            color: 'var(--color-primary)',
          }}
        >
          Services
        </FormLabel>
        <ServicesRow
          services={services}
          onSave={newService => {
            return setServices([...services, newService]);
          }}
        />
      </Box>
      <div className="flex flex-col gap-6">
        {/* Schedule section */}
        <FormLabel
          htmlFor="schedule"
          sx={{
            fontWeight: 'medium',
            paddingBottom: '6px',
            borderBottom: '1px solid var(--color-primary)',
            // width: 'fit-content',
            color: 'var(--color-primary)',
          }}
        >
          Schedule
        </FormLabel>
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
        <Box className="flex gap-3">
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
        </Box>
      </div>
      <br />
      {/* <button
        className="bg-primary w-32 p-2 rounded-md text-white"
        type="submit"
      >
        Submit
      </button> */}
    </FormControl>
  );
}
