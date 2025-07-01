import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import { BasicList } from './basicList'

type AccordionItem = {
    title: string;
    description: string;
}

type Props = {
    work: {
      company: string;
      job: AccordionItem[]
    }
}

export function AccordionUsage({work}: Props) {

  

  return (
    <div>
      <h2>{work.company}</h2>
      {work.job.map( (item, i) => (
      <Accordion key={i}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls={`panel${i}-content`}
          id={`panel${i}-header`}
        >
          <Typography component="span">{item.title}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <BasicList list={item.description} listType={"ul"} />
        </AccordionDetails>
      </Accordion>
      ))}

    </div>
  );
}
