import Link from 'next/link';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import CardActionArea from '@mui/material/CardActionArea';
import CardActions from '@mui/material/CardActions';


import sampleData from "@/src/data/sampleData";

type Props = {
  company: string
};

export function MultiActionAreaCard( {company}: Props) {
    const samples = sampleData.find( (item) => item.company === company)?.samples || [];

  return (
    <section className="grid grid-cols-2 gap-4">
        {samples.map( (sample, i) => (
            <Card sx={{ maxWidth: 345 }} key={i}>
            <CardActionArea>
                <CardMedia
                component="img"
                height="140"
                image="/assets/flower-background.jpg"
                alt="green iguana"
                />
                <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {sample.title}
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    {sample.description}
                </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="small" color="primary" component={Link} href={sample.link}>
                Learn more
                </Button>
                <Button size="small" color="primary" component={Link} href={sample.link} scroll={false}>
                View PDF
                </Button>
            </CardActions>
            </Card>            
        ))}
    </section>

  );
}
