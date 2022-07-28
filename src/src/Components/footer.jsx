import React from "react"
import MailOutlineIcon from '@mui/icons-material/MailOutline';
// import InstagramIcon from '@mui/icons-material/Instagram';
// import FacebookIcon from '@mui/icons-material/Facebook';
// import TwitterIcon from '@mui/icons-material/Twitter';
import { Phone } from "@material-ui/icons";
  import styled from "styled-components";
  import { mobile } from '../reponsive';
  import LocationOnIcon from '@mui/icons-material/LocationOn';
  
  const Container = styled.div`
    display: flex;
    ${mobile({ flexDirection: "column" })}
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
  
  const SocialIcon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color: white;
    background-color: #${(props) => props.color};
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px;
  `;
  
  const Center = styled.div`
    flex: 1;
    padding: 20px;
    ${mobile({ display: "none" })}
  `;
  
  const Title = styled.h3`
    margin-bottom: 30px;
  `;
  
  const List = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
  `;
  
  const ListItem = styled.li`
    width: 50%;
    margin-bottom: 10px;
  `;
  
  const Right = styled.div`
    flex: 1;
    padding: 20px;
    ${mobile({ backgroundColor: "#fff8f8" })}
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
          <Logo>I purple you!</Logo>
          <Desc>
            
          </Desc>
          <SocialContainer>
            <SocialIcon color="3B5999">
              {/* <FacebookIcon /> */}
            </SocialIcon>
            <SocialIcon color="E4405F">
              {/* <InstagramIcon /> */}
            </SocialIcon>
            <SocialIcon color="55ACEE">
              {/* <TwitterIcon /> */}
            </SocialIcon>
          </SocialContainer>
        </Left>
        <Center>
          <Title>Useful Links</Title>
          <List>
            <ListItem>Home</ListItem>
            <ListItem>Cart</ListItem>
            <ListItem>Albums</ListItem>
            <ListItem>Tiny Tan</ListItem>
            <ListItem>Bt21</ListItem>
            <ListItem>My Account</ListItem>
            <ListItem>Order Tracking</ListItem>
            <ListItem>Wishlist</ListItem>
            <ListItem>Terms</ListItem>
          </List>
        </Center>
        <Right>
          <Title>Contact</Title>
          <ContactItem>
            <LocationOnIcon style={{marginRight:"10px"}}/> 42 Teheran-ro 108-gil, Gangnam-gu 3F Seoul, 06176,
South Korea

          </ContactItem>
          <ContactItem>
            <Phone style={{marginRight:"10px"}}/> +82-02-1544-0790
          </ContactItem>
          <ContactItem>
            <MailOutlineIcon style={{marginRight:"10px"}} /> bighit@ibighit.com
          </ContactItem>
          <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
        </Right>
      </Container>
    );
  };
  
  export default Footer;