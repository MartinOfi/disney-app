import styled from "styled-components";

export const CarouselItemStyled = styled.div<{ image?: string }>`
  cursor: pointer;
  border-radius: 10px;
  text-align: center;
  img {
    height: 40%;
    max-height: 350px;
    width: 100%;
  }
  h1 {
    color: white;
  }
`;
