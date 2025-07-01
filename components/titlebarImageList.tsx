import Image from 'next/image';

import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import ListSubheader from '@mui/material/ListSubheader';
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';

import itemData from '@/src/data/itemData';

type Props = {
    changeSelectedItem: Function
}

export function TitlebarImageList( {changeSelectedItem}: Props) {
  return (
    <ImageList sx={{ width: 500, height: 700 }}>
      <ImageListItem key="Subheader" cols={2}>
        <ListSubheader component="div">Click the info icon to learn more</ListSubheader>
      </ImageListItem>
      {itemData.map((item, i) => (
        <ImageListItem key={item.img}>
          <Image
            src={item.img}
            alt={item.title}
            width={300}
            height={300}
          />
          <ImageListItemBar
            title={item.title}
            subtitle={item.keyword}
            actionIcon={
              <IconButton
                sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                aria-label={`info about ${item.title}`}
                onClick={ () => changeSelectedItem(i) }
              >
                <InfoIcon />
              </IconButton>
            }
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}

