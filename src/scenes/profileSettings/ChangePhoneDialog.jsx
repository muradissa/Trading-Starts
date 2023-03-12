import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

export default function ChangePhoneDialog(props) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      {/* <Button variant="outlined" onClick={handleClickOpen}>
        Open form dialog
      </Button> */}
      <Dialog open={props.openPhoneDialog} onClose={props.handleClosePhoneDialog}>
        <DialogTitle>Change Phone Number</DialogTitle>
        <DialogContent>
          <DialogContentText>
            
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="oldemail"
            label="Old Phone Number"
            type="phone"
            fullWidth
            variant="standard"
          />
          <TextField
            autoFocus
            margin="dense"
            id="newemail"
            label="New Phone Number"
            type="phone"
            fullWidth
            variant="standard"
          />
          
         
        </DialogContent>
        <DialogActions>
          <Button onClick={props.handleClosePhoneDialog}>Cancel</Button>
          <Button onClick={props.handleClosePhoneDialog}>Change</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}