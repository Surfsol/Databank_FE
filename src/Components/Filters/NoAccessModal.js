import React, { useState, useEffect } from "react";
import "../../Components/scss/dataSeries.scss";
import { makeStyles } from "@material-ui/core/styles";
import SeriesFilterModal from "./SeriesFilterModal";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";

const NoAccessModal = ({ noAccess, setNoAccess }) => {
  console.log("open NO Acc", noAccess);
  //const [open, setOpen] = useState(true);
  const classes = useStyles();
  const handleClose = () => {
    setNoAccess(false);
  };

  return (
    <>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={noAccess}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500
        }}
      >
        <Fade in={noAccess}>
          <SeriesFilterModal handleClose={handleClose} />
        </Fade>
      </Modal>
    </>
  );
};
export default NoAccessModal;

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  }
}));
