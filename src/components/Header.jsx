import { Button, HStack , Box} from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <HStack justifyContent = {"center"} p={"4"} shadow={"base"} bgColor={"blackAlpha.900"} >
      <Button variant={"unstyled"} color={"white"}>
        <Link to="/">Home</Link>
      </Button>
      <Box>
        <Button variant={"unstyled"} color={"white"} mx = {8}>
          <Link to="/exchanges">Exchanges</Link>
        </Button>
      </Box>
      <Button variant={"unstyled"} color={"white"}>
        <Link to="/coins">Coins</Link>
      </Button>
    </HStack>
  );
};

export default Header;
