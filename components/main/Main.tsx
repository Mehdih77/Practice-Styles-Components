import styled, { keyframes } from "styled-components";

// const Wrapper = styled.section`
//   padding: 164px 68px;
// `;

const FlexContainer = styled.div`
  padding: 164px 68px;
  position: absolute;
  /* height: 100vh; */
  width: 100%;
  display: flex;
  overflow: hidden;
`;
const FlexTitle = styled.div`
  color: #f1f1f1;
  position: relative;
  font-size: 30px;
  margin: auto;
  text-align: center;
  transform: rotate(90deg);
  top: 15%;
  transition: all 500ms ease;
`;
const FlexAbout = styled.div`
  opacity: 0;
  color: #f1f1f1;
  position: relative;
  width: 70%;
  font-size: 2vw;
  padding: 5%;
  top: 20%;
  border: 2px solid #f1f1f1;
  border-radius: 10px;
  line-height: 1.3;
  margin: auto;
  text-align: left;
  transform: rotate(0deg);
  transition: all 500ms ease;
`;
const FlexSlide = styled.div`
  flex: 1;
  height: 720px;
  background: url("/images/common/one.svg");
  background-repeat: no-repeat;
  /* background-repeat: no-repeat; */
  background-position: center;
  background-size: cover;
  margin: 0 24px;
  /* width: 100px; */
  /* height: 100px; */
  filter: grayscale(1);
  cursor: pointer;
  transition: all 500ms ease;
  border-radius: 12px;
  &:hover {
    flex-grow: 3;
    filter: grayscale(0);
  }
`;

const AboutFlexSlide = keyframes`
    0%{
        flex-grow: 1;
    }
    50%{
        flex-grow: 3;
    }
    100%{
        flex-grow: 1;
    }
`;

const Home = styled.div`
  /* height: 70vh; */
  /* background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)); */
  /* background: url("/images/common/Tower.svg"); */
  /* width: 200px; */
  animation: ${AboutFlexSlide} 2s;
`;
const FlexTitleHome = styled(FlexTitle)`
  transform: rotate(90deg);
  top: 15%;
  animation: ${AboutFlexSlide} 2s;
`;

const Main: React.FC = () => {
  return (
    <FlexContainer>
      <FlexSlide>
        <Home>
          <FlexTitleHome>Home</FlexTitleHome>
          <FlexAbout>Click Here</FlexAbout>
        </Home>
      </FlexSlide>
      <FlexSlide>
        <Home>
          <FlexTitleHome>Home</FlexTitleHome>
          <FlexAbout>Click Here</FlexAbout>
        </Home>
      </FlexSlide>
      <FlexSlide>
        <Home>
          <FlexTitleHome>Home</FlexTitleHome>
          <FlexAbout>Click Here</FlexAbout>
        </Home>
      </FlexSlide>
      <FlexSlide>
        <Home>
          <FlexTitleHome>Home</FlexTitleHome>
          <FlexAbout>Click Here</FlexAbout>
        </Home>
      </FlexSlide>
      <FlexSlide>
        <Home>
          <FlexTitleHome>Home</FlexTitleHome>
          <FlexAbout>Click Here</FlexAbout>
        </Home>
      </FlexSlide>
      <FlexSlide>
        <Home>
          <FlexTitleHome>Home</FlexTitleHome>
          <FlexAbout>Click Here</FlexAbout>
        </Home>
      </FlexSlide>
    </FlexContainer>
  );
};

export default Main;
