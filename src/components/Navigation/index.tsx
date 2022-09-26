import { Container, Wrapper, Menu, MenuItem } from './styled';

const Navigation = () => {
  return (
    <Container>
      <Wrapper>
        <Menu>
          <MenuItem to="/"></MenuItem>
        </Menu>
        <Menu>
          <MenuItem to="/dashboard"></MenuItem>
        </Menu>
      </Wrapper>
    </Container>
  );
};

  export default Navigation;