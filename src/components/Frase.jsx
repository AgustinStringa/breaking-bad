import React from "react";
import styled from "@emotion/styled";

const FraseStyle = styled.div`
  background-color: #fff;
  color: #222;
  font-family: "Orelega One", cursive;
  padding: 20px;
  min-width: 100%;
  font-size: 2rem;
  margin: 1rem 0 2rem 0;
  border-radius: 1.5rem;
`;

const Blockquote = styled.blockquote``;

const Address = styled.address`
  width: 100%;
  text-align: end;
  color: #57595b;
  margin-top: 1rem;
`;
const Q = styled.q`
  position: relative;
  padding-left: 4rem;
  &::before {
    content: open-quote;
    color: #57595b;
    font-size: 8rem;
    position: absolute;
    top: -2rem;
    left: -0.5rem;
  }
`;
const Frase = ({ phrase: { quote, author } }) => {
  return (
    <FraseStyle>
      <Blockquote>
        <Q>{quote}</Q>
        <Address>- {author}</Address>
      </Blockquote>
    </FraseStyle>
  );
};

export default Frase;
