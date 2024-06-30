import React from "react";
import { Card, CardContent, Grid, Typography } from "@mui/material";
import styled from "@emotion/styled";

const Image = styled("img")({
  height: 250,
  width: 250,
  borderRadius: 5,
  objectFit: "cover",
});

const CardComponent = styled(Card)`
  margin-bottom: 20px;
  box-shadow: 0 2px 5px 0 rgb(0 0 0 / 16%), 0 2px 10px 0 rgb(0 0 0 / 12%);
`;

const Container = styled(CardContent)`
  padding: 8px;
  padding-bottom: 4px !important;
`;

const Text = styled(Typography)`
  font-weight: 300;
  font-size: 22px;
  line-height: 27px;
`;

const RightContainer = styled(Grid)`
  margin: 5px;
`;

const Author = styled(Typography)`
  color: #808290;
  font-size: 12px;
  line-height: 22px;
`;

const Description = styled(Typography)`
  line-height: 22px;
  color: #44444d;
  margin-top: 5px;
  font-weight: 300;
`;

const Publisher = styled(Typography)`
  font-size: 12px;
  margin-top: auto;
  margin-top: 10px;
  margin-bottom: 10px;
`;
const Article = ({ data }) => {
  return (
    <CardComponent>
      <Container>
        <Grid container>
          <Grid md={3} xs={12} item>
            <Image src={data?.url} alt="news img" />
          </Grid>
          <RightContainer md={9} xs={12} item>
            <Text>{data?.title}</Text>
            <Author>
              <b>short</b> by {data?.author} /{" "}
              {new Date(data?.timestamp).toDateString()}
            </Author>
            <Typography>{data?.description}</Typography>
            <Publisher>
              Read more at{" "}
              <a href={data?.link} target="_blank">
                {data?.publisher}
              </a>
            </Publisher>
          </RightContainer>
        </Grid>
      </Container>
    </CardComponent>
  );
};

export default Article;
