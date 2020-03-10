import React from "react";
import { Checkbox } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Carousel from "react-bootstrap/Carousel";
import Typography from "@material-ui/core/Typography";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Favorite from "@material-ui/icons/Favorite";
import FavoriteBorder from "@material-ui/icons/FavoriteBorder";
import tokenHandler from "../../axios/tokenHandler";
import "./index.css";

export default class VacationCard extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      followersCount: props.data.followers,
      checked: props.data.checked
    };
  }

  public follow = () => {
    tokenHandler
      .get("/follow", {
        params: {
          id: this.props.data.id,
          intent: !this.state.checked
        }
      })
      .then((res: any) => {
        const { checked, followersCount } = this.state;
        const currentCount = checked ? followersCount - 1 : followersCount + 1;
        this.setState({ checked: !checked, followersCount: currentCount });
      });
  };

  insertSlide = (image: string) => {
    return (
      <Carousel.Item key={image}>
        <img
          className="cardImage"
          src={image}
          alt="https://vollrath.com/ClientCss/images/VollrathImages/No_Image_Available.jpg"
        />
        <Carousel.Caption>
          <h3>{this.props.data.destination}</h3>
        </Carousel.Caption>
      </Carousel.Item>
    );
  };

  private formatDate = (date: string) => {
    const parts = date.split("-");
    return `${parts[1]}/${parts[0]}/${parts[2]}`;
  };

  public render() {
    let images = this.props.data.images.split(",");
    const { checked } = this.state;
    const {
      description,
      departure,
      returning,
      destination,
      price
    } = this.props.data;

    return (
      <Card className="cardContainer">
        <CardActionArea>
          <Carousel>
            {images.map((image: string) => this.insertSlide(image))}
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
          <span></span>
          <FormControlLabel
            control={
              <Checkbox
                onClick={() => {
                  this.follow();
                }}
                icon={<FavoriteBorder />}
                checkedIcon={<Favorite />}
                checked={checked}
              />
            }
            label={this.state.followersCount}
          />
          <div className="dateBoxUser">
            <span className="dateText">
              {this.formatDate(departure)}-{this.formatDate(returning)}
            </span>
            <p className="priceText">{price}$</p>
          </div>
        </CardActions>
      </Card>
    );
  }
}
