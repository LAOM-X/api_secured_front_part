import { useContext } from 'react';
// eslint-disable-next-line import/no-cycle
import AuthContext from './AuthProvider';

const useAuth = () => useContext(AuthContext);

export default useAuth;
