import React from "react"
import { Add, Remove } from "@material-ui/icons";
import styled from "styled-Components";
import Announcement from "../Components/Announcement";
import Footer from "../src/Components";
import Navbar from "../Components/Navbar";
import Newsletter from "../Components/Newsletter";
import { mobile } from "../reponsive";

const Container = styled.div``;

const Wrapper = styled.div`
  padding: 50px;
  display: flex;
  ${mobile({ padding: "10px", flexDirection:"column" })}
`;

const ImgContainer = styled.div`
  flex: 1;
`;

const Image = styled.img`
  width: 100%;
  height: 90vh;
  object-fit: cover;
  ${mobile({ height: "40vh" })}
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 0px 50px;
  ${mobile({ padding: "10px" })}
`;

const Title = styled.h1`
  font-weight: 200;
`;

const Desc = styled.p`
  margin: 20px 0px;
`;

const Price = styled.span`
  font-weight: 100;
  font-size: 40px;
`;

const FilterContainer = styled.div`
  width: 50%;
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  ${mobile({ width: "100%" })}
`;

const Filter = styled.div`
  display: flex;
  align-items: center;
`;

const FilterTitle = styled.span`
  font-size: 20px;
  font-weight: 200;
`;

const FilterColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  margin: 0px 5px;
  cursor: pointer;
`;

const FilterSize = styled.select`
  margin-left: 10px;
  padding: 5px;
`;

const FilterSizeOption = styled.option``;

const AddContainer = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({ width: "100%" })}
`;

const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
`;

const Amount = styled.span`
  width: 30px;
  height: 30px;
  border-radius: 10px;
  border: 1px solid teal;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px 5px;
`;

const Button = styled.button`
  padding: 15px;
  border: 2px solid white;
  background-color: purple;
  cursor: pointer;
  font-weight: 500;
  &:hover{
      background-color:#9932cc	 ;
  }
`;

const Product = () => {
  return (
    <Container>
      <Navbar />
      { <Announcement />}
      <Wrapper>
        <ImgContainer>
          <Image src="https://cdn.shopify.com/s/files/1/0469/3927/5428/products/bts-wings-540525_1200x1200.jpg?v=1627927464" />
        </ImgContainer>
        <InfoContainer>
          <Title>BTS WINGS ALBUM</Title>
          <Desc>
          Wings is the second Korean and fourth overall studio album by South Korean boy band BTS. The album was released on October 10, 2016, by Big Hit Entertainment. 
          It is available in four versions and contains fifteen tracks, with "Blood Sweat & Tears" serving as its lead single
          </Desc>
          <Price>$ 20</Price>
          <FilterContainer>
            <Filter>
              <FilterTitle>Color</FilterTitle>
              <FilterColor color="black" />
              <FilterColor color="darkblue" />
              <FilterColor color="gray" />
            </Filter>
            <Filter>
              <FilterTitle>Album VERSION</FilterTitle>
              <FilterSize>
                <FilterSizeOption>W</FilterSizeOption>
                <FilterSizeOption>I</FilterSizeOption>
                <FilterSizeOption>N</FilterSizeOption>
                <FilterSizeOption>G</FilterSizeOption>
              </FilterSize>
            </Filter>
          </FilterContainer>
          <AddContainer>
            <AmountContainer>
              <Remove />
              <Amount>1</Amount>
              <Add />
            </AmountContainer>
            <Button>ADD TO CART</Button>
          </AddContainer>
        </InfoContainer>
      </Wrapper>
      <Newsletter />
      <Footer />
    </Container>
  );
};

export default Product;