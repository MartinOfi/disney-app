import styled from "styled-components";

export const MoviePageWrapper = styled.div<{ bgImage: string }>`
  position: relative;
  width: 100%;
  height: 100%;
  padding: 30px;
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: ${(props) => `url(${props.bgImage})`};
    background-size: cover;
    background-position: top center;
    opacity: 0.25;
  }
`;
export const MoviePage = styled.div`
  position: relative;
  width: 100%;
  color: #fff;
  padding: 0 20px;
  img {
    width: 300px;
    border-radius: 15px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
  }
  h1,
  h2,
  p {
    color: white;
  }
  h1 {
    font-size: 2.5rem;
    font-weight: bold;

    border-radius: 10px;
    margin: 0;
    padding: 10px;
  }
`;
export const DistributionCard = styled.div`
  margin: 5px 5px;
  width: 100%;
  min-height: 100px;

  max-width: 250px !important;
  margin-bottom: 50px;
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: center;
  padding: 10px;
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
  img {
    width: 100%;
    max-width: 250px !important;
    margin-right: 0 !important;
  }
  p {
    color: black;
  }
`;
