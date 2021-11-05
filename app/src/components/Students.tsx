import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Button,
} from "@material-ui/core";
import { createStyles, withStyles } from "@material-ui/styles";
import axios from "axios";
import React, { ChangeEvent, useEffect, useState } from "react";
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
  wrapper: {
    width: 400,
    display: "flex",
    flexDirection: "column",
  },
  textField: {
    width: 250,
    height: 50,
  },
  students: {
    marginTop: 20,
    height: 250,
    width: "100%",
    overflow: "auto",
    backgroundColor: "#add8e6",
  },
  student: {
    height: 25,
    margin: "5px 0px",
    backgroundColor: "white",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
});

interface Props {
  classes: any;
}

interface StudentsI {
  id: number;
  firstName: string;
  lastName: string;
  age: number;
  nationality: string;
}

const Students: React.FC<Props> = (props) => {
  const { classes } = props;
  const [nationality, setNationality] = useState<string[]>([]);
  const [value, setValue] = useState<string>("");
  const [data, setData] = useState<StudentsI[]>([]);
  const [clicked, setClicked] = useState<number>(0);

  useEffect(() => {
    axios.get(`${API_URL}/getNationality`).then((res) => {
      setNationality(res.data);
      setValue(res.data.length > 0 ? res.data[0] : "");
    });
  }, []);

  useEffect(() => {
    axios
      .get(`${API_URL}/getStudents/${value.length > 0 ? value : ""}`)
      .then((res) => setData(res.data));
  }, [value]);

  const handleNationalityChange = (e: ChangeEvent<any>) => {
    setValue(e.target.value);
  };

  const sort = (data: StudentsI[] | [], asc: boolean) => {
    if (data.length) {
      if (asc) {
        return data.sort((a, b) => {
          let fa = a.firstName.toLowerCase(),
            fb = b.firstName.toLowerCase();

          if (fa < fb) {
            return 1;
          }
          if (fa > fb) {
            return -1;
          }
          return 0;
        });
      }
      return data.sort((a, b) => {
        let fa = a.firstName.toLowerCase(),
          fb = b.firstName.toLowerCase();

        if (fa < fb) {
          return -1;
        }
        if (fa > fb) {
          return 1;
        }
        return 0;
      });
    }
    return [];
  };

  const handleSort = () => {
    setClicked(clicked + 1);
    if (clicked % 2 === 0) {
      setData(sort(data, true));
    } else {
      setData(sort(data, false));
    }
  };

  return (
    <div className={classes.container}>
      <FormControl className={classes.wrapper}>
        <InputLabel id="nationality">Nationality</InputLabel>
        <Select
          labelId="nationality"
          value={value}
          label="Age"
          onChange={handleNationalityChange}
        >
          {nationality.map((n) => (
            <MenuItem key={n} value={n}>
              {n}
            </MenuItem>
          ))}
        </Select>
        <div className={classes.students}>
          {data.map((t, i) => (
            <div className={classes.student} key={i}>
              {t.firstName} {t.lastName} ({t.age})
            </div>
          ))}
        </div>
        <Button
          style={{ marginTop: 10 }}
          variant="contained"
          onClick={handleSort}
        >
          Sort
        </Button>
      </FormControl>
    </div>
  );
};

export default withStyles(styles)(Students);
