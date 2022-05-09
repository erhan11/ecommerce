import {
  KeyboardArrowLeftOutlined,
  KeyboardArrowRightOutlined,
} from "@mui/icons-material";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  background-color: coral;
  position: relative;
`;

const Arrow = styled.div`
  width: 50px;
  height: 50px;
  background-color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto;
  left: ${(props) => props.direction === "left" && "10px"};
  right: ${(props) => props.direction === "right" && "10px"};
  cursor: pointer;
  opacity: 0.5;
`;

const Wrapper = styled.div`
  height: 100%;
  display: flex;
`;

const Slide = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
`;

const ImgContainer = styled.div`
  flex: 1;
  height: 100%;
`;

const Image = styled.img`
  height: 80%;
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 50px;
`;

const Title = styled.h1`
  font-size: 70px;
`;
const Desc = styled.p`
  margin: 50px 0px;
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 3px;
`;
const Button = styled.button`
  padding: 10px;
  font-size: 20px;
  background-color: transparent;
  cursor: pointer;
`;

const Slider = () => {
  return (
    <Container>
      <Arrow direction="left">
        <KeyboardArrowLeftOutlined />
      </Arrow>
      <Wrapper>
        <Slide>
          <ImgContainer>
            <Image
              src="https://picsum.photos/200/300
"
            />
          </ImgContainer>
          <InfoContainer>
            <Title>baslik2</Title>
            <Desc>Info here!2</Desc>
            <Button>Shop Now!2</Button>
          </InfoContainer>
        </Slide>
        <Slide>
          <ImgContainer>
            <Image
              src="https://picsum.photos/200/300
"
            />
          </ImgContainer>
          <InfoContainer>
            <Title>baslik2</Title>
            <Desc>Info here!2</Desc>
            <Button>Shop Now!2</Button>
          </InfoContainer>
        </Slide>{" "}
        <Slide>
          <ImgContainer>
            <Image
              src="https://picsum.photos/200/300
"
            />
          </ImgContainer>
          <InfoContainer>
            <Title>baslik3</Title>
            <Desc>Info here!3</Desc>
            <Button>Shop Now!3</Button>
          </InfoContainer>
        </Slide>
      </Wrapper>

      <Arrow direction="right">
        <KeyboardArrowRightOutlined />
      </Arrow>
    </Container>
  );
};

export default Slider;
