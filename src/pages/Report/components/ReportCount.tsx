import React, { FC, useState, useLayoutEffect } from 'react';
import { useSelector } from 'react-redux';
import { getAllMessages, isMessageSent } from 'redux/selectors';
import countMessages, { countTypes } from 'helpers/countMessage';

export const ReportCount: FC = () => {
  const [period, setPeriod] = useState(24);
  const allMessages = useSelector(getAllMessages);
  const hasSent = useSelector(isMessageSent);

  useLayoutEffect(() => {
    if (hasSent && allMessages) {
      const count: countTypes = countMessages(allMessages, period);
    }
  }, [hasSent, allMessages, period]);

  return <div>ReportCount Page</div>;
};
