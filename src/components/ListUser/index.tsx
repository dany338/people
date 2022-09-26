import { FC } from 'react';
import { IData } from '../../entities/User';
import { Container } from './styled';
import User from '../User';

const ListUser: FC<IData> = ({
  users,
  loading,
}) => {

  if (loading) {
    <div>Loading...</div>
  }

  return (
    <Container>
      <table>
        <thead>
          <tr className="head">
            <th>Name</th>
            <th>Birth Date</th>
            <th>Photo</th>
          </tr>
        </thead>
        <tbody>
          {users.length === 0 && (
            <tr>
              <td colSpan={3}>No rows</td>
            </tr>
          )}
          {users.map(user => <User key={user.contactId} {...user} />)}
        </tbody>
      </table>
    </Container>
  );
};

export default ListUser;