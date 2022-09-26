import { FC } from 'react';
import { useLocation } from 'react-router-dom';
import { IDataResponse } from '../../entities/Login';
import { Container, Wrapper, Menu, MenuItem, Button, MenuItemLink  } from './styled';

interface INavigationProps {
  user: IDataResponse,
  logout: () => void,
}

const Navigation: FC<INavigationProps> = ({ user, logout }) => {
  const location = useLocation();
  const pathname = location.pathname;
  return (
    <Container>
      <Wrapper>
        <Menu open={false}>
          {!user && (
            <MenuItem>
              <MenuItemLink to="/" active={(pathname === '/').toString()}>
                Login
              </MenuItemLink>
            </MenuItem>
          )}
          {user && (
            <>
              <MenuItem>
                <MenuItemLink to="/dashboard" active={(pathname === '/dashboard').toString()}>
                  Dashboard
                </MenuItemLink>
              </MenuItem>
              <MenuItem>
                <Button onClick={logout}>Logout ({user.name})</Button>
              </MenuItem>
            </>
          )}
        </Menu>
      </Wrapper>
    </Container>
  );
};

  export default Navigation;