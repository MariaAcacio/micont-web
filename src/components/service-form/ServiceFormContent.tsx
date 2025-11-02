import {
  DialogContentText,
  DialogTitle,
  FormControl,
  MenuItem,
  TextareaAutosize,
  TextField,
} from '@mui/material';
import { useState, useImperativeHandle, forwardRef } from 'react';

const durationOptions = [
  {
    value: '15',
    label: '15 min',
  },
  {
    value: '30',
    label: '30 min',
  },
  {
    value: '45',
    label: '45 min',
  },
  {
    value: '1',
    label: '1 hour',
  },
  {
    value: '1:15',
    label: '1 hour 15 min',
  },
  {
    value: '1:30',
    label: '1 hour 30 min',
  },
  {
    value: '1:45',
    label: '1 hour 45 min',
  },
  {
    value: '2',
    label: '2 hours',
  },
];

export type ServiceFormData = {
  serviceName: string;
  serviceDescription: string;
  duration: string;
};

export type ServiceFormContentRef = {
  getFormData: () => ServiceFormData;
};

const ServiceFormContent = forwardRef<ServiceFormContentRef>((props, ref) => {
  const [duration, setDuration] = useState('');
  const [serviceName, setServiceName] = useState('');
  const [serviceDescription, setServiceDescription] = useState('');

  useImperativeHandle(ref, () => ({
    getFormData: () => ({
      serviceName,
      serviceDescription,
      duration,
    }),
  }));

  return (
    <>
      <DialogTitle id="transition-modal-title" variant="h6">
        Create a service
      </DialogTitle>
      <DialogContentText
        id="transition-modal-description"
        sx={{ mt: 2 }}
        component={'div'}
      >
        <FormControl className="w-full flex flex-col gap-4" fullWidth>
          <TextField
            id="outlined-basic"
            label="Service Name"
            variant="outlined"
            className="border border-gray-300 rounded-md p-4 placeholder:text-gray-100"
            value={serviceName}
            onChange={e => setServiceName(e.target.value)}
          />
          <TextareaAutosize
            id="outlined-basic"
            placeholder="Service Description"
            className="border border-gray-300 rounded-md p-4  min-h-20 placeholder:text-gray-400"
            value={serviceDescription}
            onChange={e => setServiceDescription(e.target.value)}
          />
          <TextField
            id="duration-select"
            label="Duration"
            select
            variant="outlined"
            value={duration}
            onChange={e => setDuration(e.target.value)}
            className="border border-gray-300 rounded-md p-4 placeholder:text-gray-100"
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
            {durationOptions.map(option => (
              <MenuItem
                key={option.value}
                value={option.value}
                className="h-10"
              >
                {option.label}
              </MenuItem>
            ))}
          </TextField>
        </FormControl>
      </DialogContentText>
    </>
  );
});

ServiceFormContent.displayName = 'ServiceFormContent';

export default ServiceFormContent;
