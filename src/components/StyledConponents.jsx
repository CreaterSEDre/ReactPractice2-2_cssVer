import Styled from "styled-components";

export const StyledConponents = () => {
  return (
    <>
      <SContainer>
        <STitle>-StyledConponents-</STitle>
        <SButton>FIGHT!!</SButton>
      </SContainer>
    </>
  );
};

const SContainer = Styled.div`
  border: solid 2px #392eff;
  border-radius: 20px;
  padding: 8px;
  margin: 8px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  `;

const STitle = Styled.p`
  margin: 0;
  color: #3d8408;
  `;

const SButton = Styled.button`
  background-color: #abedd8;
  border: none;
  padding: 8px;
  border-radius: 8px;
  &:hover {
    background-color:aqua;
    color: #fff;
    cursor: pointer;
  }
`;
