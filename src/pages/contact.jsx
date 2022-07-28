import React from "react"
import { Add, Remove } from "@material-ui/icons";
import styled from "styled-components";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { mobile } from "../responsive"; 
import Validation from "../Components/Validation";
import { Container } from "@material-ui/core";

const input=styled.div` {
  color: black;
  font-family: Helvetica, Arial, sans-serif;
  font-weight: 500;
  font-size: 18px;
  border-radius: 5px;
  line-height: 22px;
  border: 2px solid black;

  padding: 13px;
  margin-bottom: 15px;
  width: 100%;
  box-sizing: border-box;
  outline: 0;

}
`
const Form =styled.div` {
  color: white;
  font-size: 40px;
  text-align: center;
  font-family: "Montserrat", sans-serif;
  margin-bottom: 20px;
}
`
const form =styled.div`{
  max-width: 600px;
  margin: 50px auto;
  background: #7d9069;
  padding: 30px;
  border-radius: 3%;
}

.feedback-input:focus {
  border: 2px solid #664ee045;
}

`
const Wrapper = styled.div`
    
    padding:20px;
    background-color:white;
    

`;
const Title = styled.h1`
    font-size:24px;
    font-weight:300;
`;
// textarea=styled.div` {
//   height: 150px;
//   line-height: 150%;
//   resize: vertical;
//   color: white;
// }
// `

// //   font-family: "Montserrat", sans-serif;
// //   width: 100%;
// //   background: #333d29;
// //   cursor: pointer;
// //   color: white;
// //   font-size: 24px;
// //   padding-top: 10px;
// //   padding-bottom: 10px;
// //   transition: all 0.3s;
// //   margin-top: -4px;
// //   font-weight: 700;
// //   border-radius: 70px;
// // }
// // 


const Contact = () => {
  return (
    <>
    <Navbar/>
    <Container>
    <Wrapper>
    <Title>GET IN TOUCH WITH US!</Title>
   <Validation/>  
    </Wrapper>        
    </Container>
    <Footer/>
</>  )
}
export default Contact;