import React, { FC, useState, ChangeEvent } from 'react';
import { useSelector } from 'react-redux';
import { getAllMessages } from 'redux/selectors';

import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CircularProgress from '@material-ui/core/CircularProgress';
import Divider from '@material-ui/core/Divider';
import { makeStyles } from '@material-ui/core/styles';

import countMessages from 'helpers/countMessage';

const ReportPeriod = [
  { name: '24 hours', value: 24 },
  { name: '3 days', value: 72 },
  { name: 'Last week', value: 168 },
];

const useStyles = makeStyles({
  table: {
    margin: 30,
  },
  formControl: {
    margin: 30,
    minWidth: 120,
  },
});

export const ReportCount: FC = () => {
  const classes = useStyles();
  const [period, setPeriod] = useState(24);
  const allMessages = useSelector(getAllMessages);

  let count = null;

  if (allMessages) {
    count = { ...countMessages(allMessages, period) };
  }

  const handlePeriodChange = (event: ChangeEvent<{ value: unknown }>) => {
    setPeriod(event.target.value as number);
  };

  return (
    <>
      {allMessages && count ? (
        <>
          <FormControl className={classes.formControl}>
            <InputLabel id='report-period-label'>Period</InputLabel>
            <Select
              labelId='report-period-label'
              value={period}
              onChange={handlePeriodChange}>
              {ReportPeriod.map((period) => (
                <MenuItem value={period.value} key={period.value}>
                  {period.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <Card style={{ width: 500 }}>
            <CardContent>
              <Typography variant='h6'>
                Total Outgoing: {count.total}
              </Typography>
              <Divider />
              <Typography variant='body1'>
                Delivered: {count.delivered}
              </Typography>
              <Typography variant='body1'>Sent: {count.sent}</Typography>
              <Typography variant='body1'>
                Scheduled: {count.scheduled}
              </Typography>
              <Typography variant='body1'>
                Undelivered: {count.undelivered}
              </Typography>
            </CardContent>
          </Card>
        </>
      ) : (
        <CircularProgress color='inherit' />
      )}
    </>
  );
};
