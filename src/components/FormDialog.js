import React, { useState } from "react";
import * as _ from "lodash";
import {
  Grid,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  FormGroup,
  FormControlLabel,
  TextField,
  Button,
  Checkbox,
} from "@material-ui/core";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";
import { setTrip, getList } from "../utils/firestore";

const FormDialog = (props) => {
  const { open, onClose, countryInfo, setTrips } = props;
  const countryName = _.get(countryInfo, "properties.name");

  const [title, setTitle] = useState("");
  const [startDate, handleStartChange] = useState(new Date());
  const [endDate, handleEndChange] = useState(new Date());
  const [memo, setMemo] = useState("");
  const [tags, setTags] = useState({
    travel: false,
    work: false,
    study: false,
  });

  const handleChange = (event) => {
    if (event.target.id == "title") {
      setTitle(event.target.value);
    } else if (event.target.id == "memo") {
      setMemo(event.target.value);
    }
  };

  const handleTagsChange = (event) => {
    setTags({ ...tags, [event.target.name]: event.target.checked });
  };

  const handleSubmit = async () => {
    const data = {
      mapId: _.get(countryInfo, "id"),
      countryName: countryName,
      title: title,
      startDate: startDate,
      endDate: endDate,
      tags: tags,
      memo: memo,
    };
    await setTrip(data);
    const tripList = await getList("trips");
    setTrips(tripList);
    onClose();
  };

  const handleClose = () => {
    onClose();
  };

  // TO DO: Create form
  // TO DO: Display image
  return (
    <Dialog
      open={open}
      aria-labelledby="simple-dialog-title"
      onClose={handleClose}
    >
      <DialogTitle id="simple-dialog-title">
        Add {countryName} to my list
      </DialogTitle>
      <DialogContent>
        <Grid item xs container direction="column" spacing={2}>
          <TextField
            autoFocus
            margin="dense"
            id="title"
            label="Title"
            value={title}
            onChange={handleChange}
          />
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <KeyboardDatePicker
              disableToolbar
              variant="inline"
              format="MM/dd/yyyy"
              margin="dense"
              id="start"
              label="Start Date"
              KeyboardButtonProps={{
                "aria-label": "change date",
              }}
              value={startDate}
              onChange={handleStartChange}
            />
            <KeyboardDatePicker
              disableToolbar
              variant="inline"
              format="MM/dd/yyyy"
              margin="dense"
              id="start"
              label="End Date"
              KeyboardButtonProps={{
                "aria-label": "change date",
              }}
              value={endDate}
              onChange={handleEndChange}
            />
          </MuiPickersUtilsProvider>
          <FormGroup row>
            <FormControlLabel
              control={
                <Checkbox
                  checked={tags.travel}
                  onChange={handleTagsChange}
                  name="travel"
                  color="primary"
                />
              }
              label="Travel"
            ></FormControlLabel>
            <FormControlLabel
              control={
                <Checkbox
                  checked={tags.work}
                  onChange={handleTagsChange}
                  name="work"
                  color="secondary"
                />
              }
              label="Work"
            ></FormControlLabel>
            <FormControlLabel
              control={
                <Checkbox
                  checked={tags.study}
                  onChange={handleTagsChange}
                  name="study"
                  color="primary"
                />
              }
              label="Study"
            ></FormControlLabel>
          </FormGroup>
          <TextField
            margin="dense"
            id="memo"
            label="Memo"
            value={memo}
            onChange={handleChange}
          />
          <DialogContentText>
            Please press submit button to add a new trip.
          </DialogContentText>
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
