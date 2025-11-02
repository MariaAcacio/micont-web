'use client';
import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Button from '@mui/material/Button';
import { useModal } from './ModalProvider';
import { Dialog, DialogActions, DialogContent } from '@mui/material';

export default function ModalWrapper() {
  const { isModalOpen, closeModal, modalContent, onSave } = useModal();

  if (!isModalOpen) return null;

  const handleSave = () => {
    if (onSave) {
      onSave();
    }
    closeModal();
  };

  const DialogStyles = {
    '& .MuiDialog-paper': {
      borderRadius: '10px',
      padding: '10px',
    },
  };

  return (
    <div>
      <Dialog
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={isModalOpen}
        onClose={closeModal}
        closeAfterTransition
        sx={DialogStyles}
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <DialogContent className="px-4 mb-6 rounded-lg w-lg">
          {modalContent}
        </DialogContent>
        <DialogActions className={'flex justify-between gap-2 mb-6'}>
          <Button variant="outlined" color="error" onClick={closeModal}>
            Cancel
          </Button>
          <Button variant="contained" color="primary" onClick={handleSave}>
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
