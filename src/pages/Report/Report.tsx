import React, { FC, useLayoutEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getMessage } from 'redux/actions/message';
import { getSetting } from 'redux/selectors';
import Container from '@material-ui/core/Container';

import { ReportCount } from './components';

const Report: FC = () => {
  const dispatch = useDispatch();
  const { hasSetting } = useSelector(getSetting);

  useLayoutEffect(() => {
    if (hasSetting) {
      dispatch(getMessage());
    }
  }, [hasSetting, dispatch]);

  return (
    <Container maxWidth='sm'>
      <ReportCount />
    </Container>
  );
};

export default Report;
