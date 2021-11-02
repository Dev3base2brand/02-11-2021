import React from 'react';
import style from './createNft.module.css';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Button from '@mui/material/Button';
export default function CreateNft({ open, handleClose }) {
  return (
    <Dialog fullWidth={true} maxWidth={'xl'} open={open} onClose={handleClose}>
      <DialogTitle>Create Nft Mdoal</DialogTitle>
      <DialogContent> Create Nft Content </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Close</Button>
      </DialogActions>
    </Dialog>
  );
}
