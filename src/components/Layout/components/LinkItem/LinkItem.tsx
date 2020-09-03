import React, { FC, useMemo } from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { Link, LinkProps } from 'react-router-dom';
import { Omit } from '@material-ui/types';

import { ListItemProps } from 'components/types/listItem.types';

const LinkItem: FC<ListItemProps> = ({ icon, primary, to }) => {
  const renderLink = useMemo(
    () =>
      React.forwardRef<any, Omit<LinkProps, 'to'>>((itemProps, ref) => (
        <Link to={to} ref={ref} {...itemProps} />
      )),
    [to]
  );

  return (
    <li>
      <ListItem button component={renderLink}>
        {icon ? <ListItemIcon>{icon}</ListItemIcon> : null}
        <ListItemText primary={primary} />
      </ListItem>
    </li>
  );
};

export default LinkItem;
