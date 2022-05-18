import styled from "styled-components";

const Container = styled.div``;
const Wrapper = styled.div``;
const Title = styled.h1``;
const Form = styled.div``;
const Input = styled.div``;
const Aggrement = styled.div``;
const Button = styled.div``;

const Register = () => {
  return (
    <Container>
      <Wrapper>
        <Title>Create an Account</Title>
        <Form>
          <Input placeholder="name" />
          <Input placeholder="last name" />
          <Input placeholder="username" />
          <Input placeholder="email" />
          <Input placeholder="password" />
          <Input placeholder="confirm password" />
          <Aggrement>
            By creating an account, I consent to the processing of my personal
            data in accordance with the <b>PRIVACY POLICY</b>
          </Aggrement>
          <Button>Create</Button>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Register;
