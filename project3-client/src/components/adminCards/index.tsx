import React from "react";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import Carousel from "react-bootstrap/Carousel";
import IconButton from "@material-ui/core/IconButton";
import "./index.css";
import MyVerticallyCenteredModal from "../editModal/modal";
import { invokeDeleteCard } from "../../redux/actions";
import { connect } from "react-redux";

const AdminCard: React.FC = (props: any) => {
  let images = props.data.images.split(",");
  const {
    description,
    departure,
    returning,
    destination,
    price,
    id
  } = props.data;

  const [modalShow, setModalShow] = React.useState(false);

  const formatDate = (date: string) => {
    const parts = date.split("-");
    return `${parts[1]}/${parts[0]}/${parts[2]}`;
  };

  const insertSlide = (image: string, index: Number) => {
    return (
      <Carousel.Item key={`${image}${index}`}>
        <img
          className="cardImage"
          src={image}
          alt="https://vollrath.com/ClientCss/images/VollrathImages/No_Image_Available.jpg"
        />
        <Carousel.Caption>
          <h3>{destination}</h3>
        </Carousel.Caption>
      </Carousel.Item>
    );
  };

  return (
    <Card className="cardContainer">
      <CardActionArea>
        <Carousel>
          {images.map((image: string, index: Number) =>
            insertSlide(image, index)
          )}
        </Carousel>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {destination}
          </Typography>
          <Typography
            className="textArea"
            variant="body2"
            color="textSecondary"
            component="p"
          >
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>

      <CardActions>
        <IconButton
          onClick={() => setModalShow(true)}
          aria-label="edit"
          size="small"
        >
          <EditIcon />
        </IconButton>
        <IconButton
          aria-label="delete"
          size="small"
          onClick={() => {
            props.deleteCard({ destination, id });
          }}
        >
          <DeleteIcon />
        </IconButton>
        <div className="dateBoxAdmin">
          <span className="dateText">
            {formatDate(departure)}-{formatDate(returning)}
          </span>
          <p className="priceText">{price}$</p>
        </div>
      </CardActions>
      <MyVerticallyCenteredModal
        modeldata={props.data}
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </Card>
  );
};
const mapDispatchToProps = (dispatch: any, ownProps: any) => ({
  deleteCard: (payload: any) => {
    dispatch(invokeDeleteCard(payload));
  }
});

const AdminCardContainer = connect(null, mapDispatchToProps)(AdminCard);

export default AdminCardContainer;
