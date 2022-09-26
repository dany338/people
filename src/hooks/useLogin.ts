import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { authUser, logoutUser } from '../redux/actions/login';
import { ILoginProps } from "../entities/Login";
import { useNavigate } from 'react-router-dom';

const initialLoginProps = {
  username: '',
  password: '',
};

const useLogin = () => {
  // const navigate = useNavigate();
  const [ loading, setLoading ] = useState<boolean>(false);
  const [ data, setData ] = useState<ILoginProps>(initialLoginProps);
  const dispatch = useDispatch();
  const { login: { user, logged } }: any = useSelector((state) => state);

  const onChangeInput = (e: any) => {
    const { value, name } = e.target;
    setData(prevState => ({ ...prevState, [name]: value }));
  };

  const authLogin = async () => {
    if (data.password !== '' && data.username !== '') {
      setLoading(true);
      await dispatch<any | unknown>(authUser(data));
      setLoading(false);
      // navigate('/dashboard');
    }
  };

  const logout = async () => {
    setLoading(true);
    setData(initialLoginProps);
    await dispatch<any | unknown>(logoutUser(data));
    setLoading(false);
  };

  return { loading, authLogin, user, logged, onChangeInput, data, logout };
};

export default useLogin;