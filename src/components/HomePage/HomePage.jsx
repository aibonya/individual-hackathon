import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Container,
  Typography,
  CardActions,
  Button,
} from "@mui/material";
import React, { useEffect } from "react";
import HomeCarousel from "../Carousel/HomeCarousel";
import AOS from "aos";
import "aos/dist/aos.css";
import LandscapeIcon from "@mui/icons-material/Landscape";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import ProductsList from "../ProductsList/ProductsList";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  const navigate = useNavigate();
  return (
    <>
      <HomeCarousel />
      <Container
        maxWidth="lg"
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          flexFlow: "wrap",
        }}
      >
        <div data-aos="flip-up">
          <Box
            className="info-boxes"
            display={"flex"}
            flexDirection={"column"}
            justifyContent={"center"}
            alignItems={"center"}
            textAlign={"center"}
          >
            <LandscapeIcon color="error" fontSize="large" />
            Сырьевая база
          </Box>
        </div>
        <div data-aos="flip-up">
          <Box
            className="info-boxes"
            display={"flex"}
            flexDirection={"column"}
            justifyContent={"center"}
            alignItems={"center"}
            textAlign={"center"}
          >
            <ThumbUpIcon color="error" fontSize="large" />
            Контроль качества продукции в современной лаборатории
          </Box>
        </div>
        <div data-aos="flip-up">
          <Box
            className="info-boxes"
            display={"flex"}
            flexDirection={"column"}
            justifyContent={"center"}
            alignItems={"center"}
            textAlign={"center"}
          >
            <LocalShippingIcon color="error" fontSize="large" />
            Собственная транспортная компания TezTransLogistic
          </Box>
        </div>
        <h2>Продукция</h2>
        <ProductsList />
        <section style={{ height: "500px" }}>
          <h2>О компании</h2>
          <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image="https://allmix.kg/images/about3.jpg"
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Известняк с карьера Молтой
                </Typography>
                {/* <Typography variant="body2" color="text.secondary">
                  Lizards are a widespread group of squamate reptiles, with over
                  6,000 species, ranging across all continents except Antarctica
                </Typography> */}
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button
                size="small"
                color="primary"
                onClick={() => navigate("/about-us")}
              >
                Подробнее о компании
              </Button>
            </CardActions>
          </Card>
        </section>
      </Container>
    </>
  );
};

export default HomePage;
