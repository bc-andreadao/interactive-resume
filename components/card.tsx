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
    <section className="flex items-start justify-center gap-7 bg-gray-100 p-10 m-8 w-full h-screen rounded-lg shadow-lg">
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
                <Button size="small" color="primary" component={Link} href={`/samples/${sample.filename}`} scroll={false}>
                    Learn more
                </Button>
            </CardActions>
            </Card>            
        ))}
    </section>

  );
}
