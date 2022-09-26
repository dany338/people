import ListUser from '../../components/ListUser';
import useUser from '../../hooks/useUser';
import { Content } from '../Login/styled';
import { Card, Container } from './styled';

const People = () => {
  const { users, loading } = useUser();
  return (
    <Container>
      <Card>
        <Content>
          <h4>Dashboard</h4>
          <ListUser data={users} loading={loading} />
        </Content>
      </Card>
    </Container>
  );
};

export default People;