import { FC } from 'react';
import { IUser } from '../../entities/User';
import moment from 'moment';
import DefaultAvatarMale from '../assets/images/default_avatar_male.jpg';
import { Image } from './styled';

const User: FC<IUser> = ({
  name,
  surnames,
  birthDate,
  photo
}) => (
  <>
    <td>{name}</td>
    <td>{moment(birthDate).format('LL')}</td>
    <td><Image src={photo ?? DefaultAvatarMale} alt={surnames} title={surnames} /></td>
  </>
);

export default User;