import React from "react";
import { Dialog, DialogTitle } from "@material-ui/core";

const FormDialog = (props) => {
  const { open, onClose } = props;

  const handleClose = () => {
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
    </Dialog>
  );
};

export default FormDialog;
