import React, { useState } from "react";
import {
  Grid,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  TextField,
  Button,
} from "@material-ui/core";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";
import { setTrip } from "../utils/firestore";

const FormDialog = (props) => {
  const { open, onClose } = props;
  const [startDate, handleStartChange] = useState(new Date());
  const [endDate, handleEndChange] = useState(new Date());
  const handleClose = () => {
    onClose();
  };

  const handleSubmit = async () => {
    // dummy data
    const data = {
      id: "4",
      mapId: "752",
      countryName: "Sweden",
      startDate: startDate,
      endDate: endDate,
      tags: ["travel"],
      imageUrl: "",
    };
    await setTrip(data);
    onClose();
  };

  return (
    <Dialog
      open={open}
      aria-labelledby="simple-dialog-title"
      onClose={handleClose}
    >
      <DialogTitle id="simple-dialog-title">
        Add country to the list
      </DialogTitle>
      <DialogContent>
        <Grid item xs container direction="column" spacing={2}>
          <DialogContentText>Please add new trip.</DialogContentText>
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <KeyboardDatePicker
              disableToolbar
              variant="inline"
              format="MM/dd/yyyy"
              margin="dense"
              id="start"
              label="Start Date"
              value={startDate}
              onChange={handleStartChange}
              KeyboardButtonProps={{
                "aria-label": "change date",
              }}
            />
            <KeyboardDatePicker
              disableToolbar
              variant="inline"
              format="MM/dd/yyyy"
              margin="dense"
              id="start"
              label="End Date"
              value={endDate}
              onChange={handleEndChange}
              KeyboardButtonProps={{
                "aria-label": "change date",
              }}
            />
          </MuiPickersUtilsProvider>
          <TextField
            autoFocus
            margin="dense"
            id="tags"
            label="Tags"
            type="tags"
          />
        </Grid>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="primary">
          Cancel
        </Button>
        <Button onClick={handleSubmit} color="secondary">
          Submit
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default FormDialog;
