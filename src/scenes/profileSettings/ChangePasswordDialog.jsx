import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

export default function ChangePasswordDialog(props) {
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
      <Dialog open={props.openPasswordDialog} onClose={props.handleClosePasswordDialog}>
        <DialogTitle>Change Password</DialogTitle>
        <DialogContent>
          <DialogContentText>
            
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="oldPassword"
            label="Old Password"
            type="password"
            fullWidth
            variant="standard"
          />
          <TextField
            autoFocus
            margin="dense"
            id="newPassword1"
            label="New Password"
            type="password"
            fullWidth
            variant="standard"
          />
          <TextField
            autoFocus
            margin="dense"
            id="newPassword2"
            label="Confirm Password"
            type="password"
            fullWidth
            variant="standard"
            // color="white"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={props.handleClosePasswordDialog}>Cancel</Button>
          <Button onClick={props.handleClosePasswordDialog}>Change</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}