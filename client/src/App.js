import { Box } from "@mui/material";
import "./App.css";
import Header from "./compponents/Header";
import InfoHeader from "./compponents/InfoHeader";
import styled from "@emotion/styled";
import Articles from "./compponents/Articles";

const Container = styled(Box)`
  width: 60%;
  margin: 40px auto 0 auto;
`;

function App() {
  return (
    <Box>
      <Header />
      <Container className="container">
        <InfoHeader />
        <Articles />
      </Container>
    </Box>
  );
}

export default App;
