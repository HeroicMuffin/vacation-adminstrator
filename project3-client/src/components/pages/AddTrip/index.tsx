import React, { useState } from "react";
import myHook from "../../myHookers/customHook";
import DateFnsUtils from "@date-io/date-fns";
import {
  KeyboardDatePicker,
  MuiPickersUtilsProvider
} from "@material-ui/pickers";
import "./index.css";
import tokenHandler from "../../../axios/tokenHandler";

const AddTrip: React.FC = (props: any) => {
  const initState = { image1: "", image2: "", image3: "" };
  const [data, handleChange] = myHook(initState);
  const [selectedDeparture, handleDeparture] = useState<any>(new Date());
  const [selectedReturning, handleReturning] = useState<any>(
    new Date().getTime() + 86400000
  );

  const AddTrip = async () => {
    data.departure = formatDate(selectedDeparture);
    data.returning = formatDate(selectedReturning);
    const { returning, departure, price, description, destination } = data;
    //todo: validate parameter
    if (
      departure >= returning ||
      isNaN(price) ||
      !description ||
      !destination
    ) {
      alert("insert valid parameters");
    } else {
      const result = await tokenHandler.post(
        "/admin/addtrip",
        {
          ...data
        }
      );

      const { data: response } = result;
      props.history.push("/");
    }
  };

  const formatDate = (dateToFormat: any) => {
    let d = new Date(dateToFormat),
      month = "" + (d.getMonth() + 1),
      day = "" + d.getDate(),
      year = d.getFullYear();

    if (month.length < 2) month = "0" + month;
    if (day.length < 2) day = "0" + day;

    return [year, month, day].join("-");
  };

  return (
    <div>
      <h3 className="addTripHeader">Add Trip</h3>
      <form className="addTripForm">
        <div className="addFormLeft">
          <div className="form-group">
            <label>Destination</label>
            <input
              type="text"
              className="form-control"
              placeholder="Destination"
              name="destination"
              onChange={handleChange}
            />
          </div>

          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <KeyboardDatePicker
              label="Departing"
              value={selectedDeparture}
              onChange={date => handleDeparture(date)}
              minDate={new Date()}
              format="dd/MM/yyyy"
            />
          </MuiPickersUtilsProvider>
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <KeyboardDatePicker
              label="Returning"
              value={selectedReturning}
              onChange={date => handleReturning(date)}
              minDate={selectedDeparture.getTime() + 86400000}
              format="dd/MM/yyyy"
              name="returning"
            />
          </MuiPickersUtilsProvider>

          <div className="form-group">
            <br />
            <textarea
              rows={7}
              cols={40}
              className="form-control"
              placeholder="Description"
              name="description"
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="addFormRight">
          <div className="form-group">
            <label>Price</label>
            <input
              type="text"
              className="form-control"
              placeholder="Price"
              name="price"
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label>First Image Link</label>
            <input
              type="text"
              className="form-control"
              placeholder="First Image"
              name="image1"
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label>Second Image Link</label>
            <input
              type="text"
              className="form-control"
              placeholder="Second Image"
              name="image2"
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label>Third Image Link</label>
            <input
              type="text"
              className="form-control"
              placeholder="Third Image"
              name="image3"
              onChange={handleChange}
            />
          </div>
          <button
            type="button"
            className="btn btn-primary btn-block"
            onClick={AddTrip}
          >
            Save
          </button>
        </div>
      </form>
    </div>
  );
};
export default AddTrip;
