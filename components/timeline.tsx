"use client";

import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';
import LaptopMacIcon from '@mui/icons-material/LaptopMac';
import HotelIcon from '@mui/icons-material/Hotel';
import RepeatIcon from '@mui/icons-material/Repeat';
import Typography from '@mui/material/Typography';

import HomeWorkIcon from '@mui/icons-material/HomeWork';

import Link from "next/link"

import workData from "@/src/data/workData";


type Props = {
  setCompany: (company: string) => void;
}

export function CustomizedTimeline({ setCompany }: Props) {

  const onSetCompany = (company: string) => {
    setCompany(company);
  }

  return (
    <Timeline sx={{ width:'450px', backgroundColor: 'rgba(0, 0, 0, 0.05)'}}>
    {workData.map((item, i) => (
      <TimelineItem key={i}>
        <TimelineOppositeContent
          sx={{ m: 'auto 0', backgroundColor: 'rgba(0, 0, 0, 0.05)', textAlign: 'left', flex: '0 0 90px'}}
          align="right"
          variant="body2"
          color="text.secondary"
        >
          <div className="text-center">{item.startDate}</div>
          <div className="text-center">|</div>
          <div className="text-center">{item.endDate}</div>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot>
            <HomeWorkIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px:'20px', m:'10px', backgroundColor: 'rgba(0, 0, 0, 0.05)', display: 'flex', flexDirection: 'column', gap: 2}}>
          <Typography variant="h6" component="span">
            <p onClick={() => onSetCompany(item.company)}>{item.company}</p>
          </Typography>
          {item.job.map((job, j) => (
            <Typography key={j} variant="subtitle1">{job.title}</Typography>
          ))}
        </TimelineContent>
      </TimelineItem>
    ))}
    </Timeline>
  );
}
