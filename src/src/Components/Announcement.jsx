import React from "react"
import styled from "styled-components"

const Container = styled.div`
    height:30px;
    background-color: lightpurple;
    color:white;
    display:flex;
    align-items: center;
    justify-content: center;
    font-size:14px;
    font-weight: 500;

`
const Announcement = () => {
  return (
    <Container>
      GET THE NEW BTS ANTHOLOGY ALBUM 50%!!!!
    </Container>
  )
}

export default Announcement