import useEffectOnce from './useEffectOnce';
import { useNavigate, useLocation } from "react-router-dom";
import { useCallback, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { obtainUsers } from '../redux/actions/user';

const useUser = () => {
  const [ loading, setLoading ] = useState<boolean>(false);
  const dispatch = useDispatch();
  const { user: { users } }: any = useSelector((state) => state);
  
  const fecthUsers = async () => {
    setLoading(true);
    await dispatch<any | unknown>(obtainUsers());
    setLoading(false);
  };

  useEffectOnce( ()=> {
    fecthUsers();
    return () => console.log('my effect is destroying');
  });

  return { loading, users };
};

export default useUser;