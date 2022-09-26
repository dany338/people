import { FC } from 'react';
import { IDataResponse } from '../../entities/Login';
import { Container, Wrapper, Menu, MenuItem } from './styled';

interface INavigationProps {
  user: IDataResponse,
  logout: () => void,
}

const Navigation: FC<INavigationProps> = ({ user, logout }) => {
  return (
    <Container>
      <Wrapper>
        <Menu>
          <MenuItem to="/"></MenuItem>
        </Menu>
        <Menu>
          <MenuItem to="/dashboard"></MenuItem>
        </Menu>
        {user && (
          <Menu>
            <button onClick={logout}>Logout ({user.name})</button>
          </Menu>
        )}
      </Wrapper>
    </Container>
  );
};

  export default Navigation;