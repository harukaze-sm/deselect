import { Button, createStyles, TextField } from "@material-ui/core";
import { withStyles } from "@material-ui/styles";
import axios from "axios";
import React, { useState, ChangeEvent, FormEvent } from "react";
import { API_URL } from "../constants";

const styles = createStyles({
  container: {
    width: "100vw",
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  form: {
    width: 250,
    display: "flex",
    flexDirection: "column",
  },
  textField: {
    width: 250,
    height: 50,
  },
});

interface Props {
  classes: any;
}

interface StudentsI {
  id: number | undefined;
  firstName: string;
  lastName: string;
  age: number | undefined;
  nationality: string;
}

const Create: React.FC<Props> = (props) => {
  const { classes } = props;

  const [student, setStudent] = useState<StudentsI>({
    id: undefined,
    firstName: "",
    lastName: "",
    age: undefined,
    nationality: "",
  });

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    axios
      .post(`${API_URL}/new`, student)
      .then(() => {
        window.location.reload();
      })
      .catch((error) => {
        console.info(error);
      });
  };

  const handleStateUpdate = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setStudent({
      ...student,
      [name]: value,
    });
  };

  return (
    <div className={classes.container}>
      <form className={classes.form} onSubmit={handleSubmit}>
        <TextField
          className={classes.textField}
          placeholder="ID"
          required
          name="id"
          onChange={handleStateUpdate}
          value={student.id}
          type="number"
          inputProps={{
            autoComplete: "new-email",
          }}
        />
        <TextField
          className={classes.textField}
          placeholder="First Name"
          onChange={handleStateUpdate}
          value={student.firstName}
          type="text"
          name="firstName"
          required
          inputProps={{
            autoComplete: "new-firstname",
          }}
        />
        <TextField
          className={classes.textField}
          placeholder="Last Name"
          value={student.lastName}
          name="lastName"
          onChange={handleStateUpdate}
          type="text"
          required
          inputProps={{
            autoComplete: "new-lastname",
          }}
        />
        <TextField
          className={classes.textField}
          placeholder="Age"
          value={student.age}
          onChange={handleStateUpdate}
          name="age"
          type="number"
          required
          inputProps={{
            autoComplete: "new-age",
          }}
        />
        <TextField
          className={classes.textField}
          placeholder="Nationality"
          name="nationality"
          value={student.nationality}
          onChange={handleStateUpdate}
          type="text"
          required
          inputProps={{
            autoComplete: "new-nationality",
          }}
        />
        <Button variant="contained" style={{ width: "100%" }} type="submit">
          Create
        </Button>
      </form>
    </div>
  );
};

export default withStyles(styles)(Create);
