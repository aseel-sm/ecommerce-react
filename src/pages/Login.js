import styled from "styled-components";
const Contaianer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Wrapper = styled.div`
  padding: 20px;
  width: 25%;
  background-color: white;
`;
const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
`;
const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 0px;
  padding: 10px;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
`;

const Link = styled.a`
  margin: 5px 0px;
  text-decoration: underline;
  font-size: 12px;
`;
const Login = () => {
  return (
    <Contaianer>
      <Wrapper>
        <Title>Login</Title>
        <Form>
          <Input placeholder="Username" />

          <Input placeholder="Password" />
          <Link>Forget Password?</Link>
          <Link>Create new account</Link>
          <Button>Login</Button>
        </Form>
      </Wrapper>
    </Contaianer>
  );
};

export default Login;
