import React from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  TextField,
  Button,
} from "@material-ui/core";
import { setTrip } from "../utils/firestore";

const FormDialog = (props) => {
  const { open, onClose } = props;

  const handleClose = () => {
    onClose();
  };

  const handleSubmit = async () => {
    console.log("submit");
    // dummy data
    const data = {
      id: "4",
      mapId: "752",
      countryName: "Sweden",
      startDate: "",
      endDate: "",
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
        <DialogContentText>Please add new trip.</DialogContentText>
        <TextField
          autoFocus
          margin="dense"
          id="name"
          label="Country"
          type="country"
        />
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
