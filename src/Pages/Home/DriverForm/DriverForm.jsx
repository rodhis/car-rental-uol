import { TextField, ThemeProvider } from "@mui/material";

import formImage from "../../../assets/img/form-image.svg";

import styles from "./DriverForm.module.css";
import { driverFormTheme } from "./driverFormTheme.js";

export default function DriverForm() {
  return (
    <>
      <div className={styles.formHeader}>
        <img src={formImage} alt="driver form car image" />
        <div className={styles.headerText}>
          <h1>Drive with MyRide</h1>
          <p>
            Register as a driver using the form below. Our team will assess and
            get back to you within 48 hours.
          </p>
        </div>
      </div>
      <div className={styles.formBody}>
        <ThemeProvider theme={driverFormTheme}>
          <TextField
            fullWidth
            id="outlined-basic"
            variant="outlined"
            defaultValue="Full Name"
          />
          <TextField
            fullWidth
            id="outlined-basic"
            variant="outlined"
            defaultValue="Full Name"
          />
          <TextField
            fullWidth
            id="outlined-basic"
            variant="outlined"
            defaultValue="Full Name"
          />
          <TextField
            id="outlined-basic"
            variant="outlined"
            defaultValue="Full Name"
          />
          <TextField
            id="outlined-basic"
            variant="outlined"
            defaultValue="Full Name"
          />
        </ThemeProvider>
      </div>
    </>
  );
}