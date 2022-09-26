import { FC } from 'react';
import { ILoginPropsAuthLogin } from '../../entities/Login';
import { Card, Container, Content, Button } from './styled';

const Login: FC<ILoginPropsAuthLogin> = ({ username, password, authLogin, onChangeInput }) => {
  return (
    <Container>
      <Card>
        <Content>
          <h4>Login</h4>
          <input type="text" name="username" value={username} onChange={onChangeInput} /><br />
          <input type="password" name="password" value={password} onChange={onChangeInput} /><br />
          <Button onClick={authLogin}>Ingresar</Button>
        </Content>
      </Card>
    </Container>
  );
};

export default Login;