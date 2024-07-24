import "./App.css";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import Button from "@mui/material/Button";
import Navbar from "./Navbar";




function App() {
  return (
    <><div><Navbar /></div>
    <div className="App">



      <h1>Registration Form</h1>

      <TextField id="standard-basic" label="First Name" variant="outlined" />
      <div>
        {" "}
        <TextField
          id="standard-basic"
          label="Middle Name"
          variant="outlined" />{" "}
      </div>
      <div>
        {" "}
        <TextField
          id="standard-basic"
          label="Last Name"
          variant="outlined" />{" "}
      </div>
      <div>
        {" "}
        <TextField id="standard-basic" label="Email" variant="outlined" />{" "}
      </div>

      <FormControl component="fieldset">
        <FormLabel component="legend">Gender</FormLabel>
        <RadioGroup row aria-label="gender" name="gender" defaultValue="male">
          <FormControlLabel value="female" control={<Radio />} label="Female" />
          <FormControlLabel value="male" control={<Radio />} label="Male" />
        </RadioGroup>
      </FormControl>

      <div>
        {" "}
        <TextField
          id="standard-basic"
          label="Password"
          variant="outlined" />{" "}
      </div>
      <div>
        {" "}
        <TextField
          id="standard-basic"
          label="Confirm Password"
          variant="outlined" />{" "}
      </div>

      <div id="btn">
        <Button variant="contained" color="success">
          Submit

        </Button>

      </div>

    </div></>
  );
}

export default App;
