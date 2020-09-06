import React, { FC } from 'react';

import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';

export const LinkToSetting: FC = () => {
  return (
    <div style={{ width: 300 }}>
      <div style={{ textAlign: 'center', width: 300 }}>
        Please config your API key first
      </div>
      <Link to={'/setting'} style={{ textDecoration: 'none' }}>
        <Button
          variant='contained'
          style={{ margin: '20px auto', display: 'block' }}>
          Setting
        </Button>
      </Link>
    </div>
  );
};
