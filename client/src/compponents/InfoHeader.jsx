import React from "react";
import { Box, Typography } from "@mui/material";
import appstore from "../assets/appstore.png";
import playstore from "../assets/playstore.png";
import styled from "@emotion/styled";
import "./InfoHeader.css";

const Container = styled(Box)`
  background: #f44336;
  color: #fff;
  display: flex;
  align-items: center;
  height: 50px;
  margin-bottom: 20px;
`;

const Image = styled("img")({
  height: 35,
  "&:last-child": {
    margin: "0 50px 0 20px",
  },
});

const Text = styled(Typography)`
  font-size: 14px;
  font-weight: 300;
  margin-left: 50px;
`;

const InfoHeader = () => {
  return (
    <Container className="infomedia">
      <Text className="text">
        For the best experience use news India app on smartphone
      </Text>
      <Box style={{ display: "flex", marginLeft: "auto" }}>
        <Image src={appstore} alt="appstore" className="img1" />
        <Image src={playstore} alt="googlestore" className="img1" />
      </Box>
    </Container>
  );
};

export default InfoHeader;
