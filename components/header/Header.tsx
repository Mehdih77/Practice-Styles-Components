import styled, { css, keyframes } from "styled-components";

// TYPES //
type ButtonColor = {
  primary: Boolean;
};

// STYLES //

const Section = styled.section`
  display: flex;
  flex-direction: column;
  & > button {
    margin: 20px;
  }
`;

const Title = styled.h2`
  /* color: #ff1100; */
  color: ${props => props.theme.color900};
  font-size: 62px;
`;

const Button = styled.button`
  width: 180px;
  min-height: 56px;
  border: 2px solid #000;
  border-radius: 20px;
`;

const PrimaryButton = styled(Button)<ButtonColor>`
  padding: 20px;
  font-weight: bolder;
  transition: 0.4s linear;
  font-size: 30px;
  &:hover {
    background-color: blue;
    color: red;
  }
  color: ${(props) => (props.primary ? "#be830e" : "black")};
`;

const fadeIn = keyframes`
  0% {
    opacity: 0;
    transform: 0;
  }
  100% {
    opacity: 1;
    transform: translateX(125px);
  }
`;

const FadeInButton = styled(Button)`
  animation: 2s ${fadeIn} ease-out infinite;
`;

// const Header: React.FC<{ items: string }> = (props) => {}

const Header: React.FC = (props) => {
  return (
    <Section>
      <Title>Headerr</Title>
      <PrimaryButton primary className="btn">
        Hello
      </PrimaryButton>
      <FadeInButton className="btn">Hello</FadeInButton>
    </Section>
  );
};

export default Header;
