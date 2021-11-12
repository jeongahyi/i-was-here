import React, { useState } from "react";
import * as _ from "lodash";
import {
  Grid,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  TextField,
  Button,
  Checkbox,
} from "@material-ui/core";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";
import { setTrip } from "../utils/firestore";

const FormDialog = (props) => {
  const { open, onClose, countryInfo } = props;
  const [startDate, handleStartChange] = useState(new Date());
  const [endDate, handleEndChange] = useState(new Date());
  const handleClose = () => {
    onClose();
  };

  const handleSubmit = async (event) => {
    // dummy data
    const data = {
      id: "5",
      mapId: _.get(countryInfo, "id"),
      countryName: _.get(countryInfo, "properties.name"),
      title: "",
      startDate: startDate,
      endDate: endDate,
      tags: ["travel"],
      memo: "",
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
          <TextField autoFocus margin="dense" id="title" label="Title" />
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
          <Checkbox
            color="primary"
            inputProps={{ "aria-label": "secondary checkbox" }}
            label="travel"
          />
          <TextField margin="dense" id="memo" label="Memo" />
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
