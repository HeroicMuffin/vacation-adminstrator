import React, {useState} from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import myHook from "../myHookers/customHook";
import DateFnsUtils from "@date-io/date-fns";
import {KeyboardDatePicker, MuiPickersUtilsProvider} from "@material-ui/pickers";
import "./index.css";
import {invokeUpdateCard} from "../../redux/actions";
import {connect} from "react-redux";

function MyVerticallyCenteredModal(props) {
    const {description, price, destination, id} = props.modeldata;
    const initState = {
        id: id,
        description: description,
        price: price
    };
    const [data, handleChange] = myHook(initState);
    const [selectedDeparture, handleDeparture] = useState(new Date());
    const [selectedReturning, handleReturning] = useState(
        new Date().getTime() + 86400000
    );

    function compileData(payload) {
        payload.departure = formatDate(selectedDeparture);
        payload.returning = formatDate(selectedReturning);
        // todo: sanity params check!
        if (payload.departure >= payload.returning || isNaN(payload.price)) {
            console.error("Insert valid parameters");

        } else return payload;
    }

    const formatDate = dateToFormat => {
        let d = new Date(dateToFormat),
            month = "" + (d.getMonth() + 1),
            day = "" + d.getDate(),
            year = d.getFullYear();

        if (month.length < 2) month = "0" + month;
        if (day.length < 2) day = "0" + day;


        return [year, month, day].join("-");
    };

    return (
        <Modal
            size="x2"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            show={props.show} onHide={props.onHide}>

            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Edit {destination} trip
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group
                        className="modalInput"
                        controlId="exampleForm.ControlInput2"
                    >
                        <Form.Label>Price</Form.Label>
                        <Form.Control
                            name="price"
                            type="text"
                            defaultValue={price}
                            onChange={handleChange}
                        />
                    </Form.Group>
                    <MuiPickersUtilsProvider utils={DateFnsUtils}>
                        <KeyboardDatePicker
                            className="modalInput"
                            label="Departing"
                            value={selectedDeparture}
                            onChange={date => handleDeparture(date)}
                            minDate={new Date()}
                            format="dd/MM/yyyy"
                        />
                    </MuiPickersUtilsProvider>
                    <MuiPickersUtilsProvider utils={DateFnsUtils}>
                        <KeyboardDatePicker
                            className="modalInput"
                            label="Returning"
                            value={selectedReturning}
                            onChange={date => handleReturning(date)}
                            minDate={selectedDeparture.getTime() + 86400000}
                            format="dd/MM/yyyy"
                            name="returning"
                        />
                    </MuiPickersUtilsProvider>
                    <Form.Group
                        className="modalInput"
                        controlId="exampleForm.ControlTextarea1"
                    >
                        <Form.Label>Description</Form.Label>
                        <Form.Control
                            as="textarea"
                            rows="3"
                            name="description"
                            defaultValue={description}
                            onChange={handleChange}
                        />
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button
                    onClick={() => {
                        props.updateModelCard(compileData(data));
                        props.onHide();
                    }}
                >
                    Save
                </Button>
                <Button onClick={props.onHide}>Cancel</Button>
            </Modal.Footer>
        </Modal>
    );
}

const mapDispatchToProps = (dispatch, ownProps) => ({
    updateModelCard: (payload) => dispatch(invokeUpdateCard(payload))
});


const editModal = connect(null, mapDispatchToProps)(MyVerticallyCenteredModal);

export default editModal;
