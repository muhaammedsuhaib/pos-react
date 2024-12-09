import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { selectUserToken, userActions } from '../../reducer/login/reducer';
import { loginRequestFromToken } from '../../reducer/login/actions';
import Loader from '../../components/loader/loader';
import { setLoginToken } from '../../components/utils/utils';
import { pettycashActions } from '../../reducer/pettycash/reducer';
import { expensesActions } from '../../reducer/expense/reducer';
function Auth(props) {
  const params = useParams();
  const dispatch = useDispatch();
  const userTokenData = useSelector(selectUserToken);
  const navigate = useNavigate();
  useEffect(() => {
    if (userTokenData.status && userTokenData.data && userTokenData.data.token) {
      dispatch(pettycashActions.clearAllPettyCash());
      dispatch(expensesActions.clearAllExepenses());
      setLoginToken(userTokenData.data.token);
      if (params.redirect) {
        navigate('/' + params.redirect);
      } else {
        navigate('/expense');
      }
    }
  }, [userTokenData])
  useEffect(() => {
    if (params.token) {
      dispatch(loginRequestFromToken({ token: params.token }));
    }
  }, []);
  return (
    <div className='relative'>
      <Loader />
    </div>
  );
}

export default Auth;