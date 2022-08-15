import styled from "styled-components";

export const GenreStyle = styled.div`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  overflow: hidden;
  height: 100px;
  margin-bottom: 50px;
  border: 1px solid rgba(249, 249, 249, 0.1);
  border-radius: 10px;
  -webkit-box-shadow: 0px 14px 20px 0px rgba(0, 0, 0, 0.9);
  box-shadow: 0px 14px 20px 0px rgba(0, 0, 0, 0.9);
  transition: all ease-in-out;
  &:hover {
    border: 2px rgba(249, 249, 249, 0.3) solid;
  }
`;
export const GenreGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(5, minmax(250px, 1fr));
  grid-auto-rows: 100px;
  grid-gap: 20px;
`;
