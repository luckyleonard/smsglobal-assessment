import React, { FC } from 'react';
import { useSelector } from 'react-redux';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { makeStyles } from '@material-ui/core/styles';

import { getAllMessages, getMessageSummary } from 'redux/selectors';

const useStyles = makeStyles({
  marginSide: {
    margin: '0 30px',
  },
});

export const ReportHistory: FC = () => {
  const allMessages = useSelector(getAllMessages);
  const messageSummery = useSelector(getMessageSummary);
  const classes = useStyles();

  if (!allMessages) {
    return null;
  }
  return (
    <Card style={{ marginTop: 30, maxWidth: 1000 }}>
      <CardContent>
        <Typography variant='h6'>
          Message history Total: {messageSummery.total}
        </Typography>
        {allMessages.map((message) => (
          <Accordion key={message.id}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <span className={classes.marginSide}>
                <b>Date: </b>
                {message.dateTime}
              </span>
              <span className={classes.marginSide}>
                <b>From: </b>
                {message.origin}
              </span>
              <span className={classes.marginSide}>
                <b>To: </b>
                {message.destination}
              </span>
              <span className={classes.marginSide}>
                <b>Status: </b>
                {message.status}
              </span>
            </AccordionSummary>
            <AccordionDetails>
              <Typography className={classes.marginSide}>
                <b>Content:</b> {message.message}
              </Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </CardContent>
    </Card>
  );
};
