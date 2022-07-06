import { Box } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();
  return (
    <div className="footer">
      <Box style={{ margin: "15px" }}>
        <Box
          onClick={() => navigate("/")}
          sx={{ display: { xs: "none", md: "flex" }, mr: 1, width: "125px" }}
        >
          <img
            src="https://allmix.kg/templates/rt_protean/custom/images/logowhite.png"
            width={"100%"}
          />
        </Box>
        <Box
          style={{
            margin: "15px",
            width: "105px",
            fontSize: "12px",
            lineHeight: "1",
            marginBottom: "0",
            background: "#e42534",
            color: "#f1f1f1",
            borderRadius: "0 0 20px",
            padding: "3px 5px",
          }}
        >
          Стройте свое будущее вместе с нами
        </Box>
      </Box>
      <Box className="footer-text">
        <h6>Мы находимся:</h6>
        <p>
          г. Бишкек, ул. Интергельпо, 6/2 <br />
          г. Балыкчы, уч. Кызыл-Саз
          <br />
          г. Каракол, ул. Кыдыр Аке, 71
        </p>
      </Box>
      <Box className="footer-text">
        <h6>Контактные данные:</h6>
        <p>
          +996 702 222 999 <br />
          +996 559 143 455
          <br />
          allmix.kg@gmail.com
        </p>
      </Box>
      <Box className="footer-text">
        <h6>© allmix.kg 2014 - 2021</h6>
        <p>
          <br />
          Все права защищены.
        </p>
      </Box>
    </div>
  );
};

export default Footer;
