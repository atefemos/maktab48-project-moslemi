import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import Btn from "../components/Btn";

const useStyles = makeStyles({
  root: {
    // maxWidth: 345,
  },
  media: {
    height: 240,
  },
});

const BasicCard = ({ txtTitle, txtPrice, txtUrl, ...props }) => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={txtUrl}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {txtTitle}
          </Typography>
          <Typography variant="h3" color="textSecondary" component="p">
            {txtPrice}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Btn size="large" color="primary" text={"افزودن به سبد خرید"} />
      </CardActions>
    </Card>
  );
};

export default BasicCard;
