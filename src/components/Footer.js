import React from "react";
import styled from "styled-components";
import {
  Facebook,
  Twitter,
  Instagram,
  Pinterest,
  Room,
  Phone,
  MailOutline,
  PaymentTwoTone,
} from "@material-ui/icons";
const Container = styled.div`
  display: flex;
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const Logo = styled.h1``;
const Desc = styled.p`
  margin: 20px 0px;
`;
const SocialContainer = styled.div`
  display: flex;
`;
const SocailIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  margin-right: 20px;
  background-color: #${(props) => props.bg};
`;

const Center = styled.div`
  flex: 1;
  padding: 20px;
`;

const Right = styled.div`
  flex: 1;
  padding: 20px;
`;

const Title = styled.h3`
  margin-bottom: 30px;
`;
const List = styled.ul`
  margin: 0;
  padding: 0px;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;
const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
`;
const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`;
const Payment = styled.img`
  width: 50%;
`;
const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>AURANGAH.</Logo>
        <Desc>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo
          repellendus in provident ipsa dolorum corrupti qui ad exercitationem
          nulla ullam! Temporibus officia eos modi delectus, sapiente distinctio
          vitae neque. Laudantium!
        </Desc>
        <SocialContainer>
          <SocailIcon bg="385999">
            <Facebook />
          </SocailIcon>
          <SocailIcon bg="E4405F">
            <Instagram />
          </SocailIcon>
          <SocailIcon bg="55ACEE">
            <Twitter />
          </SocailIcon>

          <SocailIcon bg="E60023">
            <Pinterest />
          </SocailIcon>
        </SocialContainer>
      </Left>
      <Center>
        <Title>Useful Links</Title>
        <List>
          <ListItem>Home</ListItem>
          <ListItem>Cart</ListItem>
          <ListItem>Man Fashion</ListItem>
          <ListItem>Women Fashion</ListItem>
          <ListItem>Accessories</ListItem>
          <ListItem>My Account</ListItem>
          <ListItem>Order tracking</ListItem>
          <ListItem>Wishlist</ListItem>
          <ListItem>Terms</ListItem>
        </List>
      </Center>
      <Right>
        <Title>Contact</Title>
        <ContactItem>
          <Room style={{ marginRight: "10px" }} />
          MCA,CET ,Sreekaryamm
        </ContactItem>
        <ContactItem>
          <Phone style={{ marginRight: "10px" }} /> 00919207418150
        </ContactItem>
        <ContactItem>
          <MailOutline style={{ marginRight: "10px" }} /> test@gmail.com
        </ContactItem>
        <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
      </Right>
    </Container>
  );
};

export default Footer;
