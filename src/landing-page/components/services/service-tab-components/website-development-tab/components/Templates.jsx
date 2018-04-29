import React from 'react';
import { GridList, GridTile } from 'material-ui/GridList';

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around'
  },
  gridList: {
    width: '90%',
    height: 600,
    overflowY: 'auto'
  }
};

const tilesData = [
  {
    img: 'images/template-images-cover/img_temp_band.jpg',
    title: 'Band Template',
    url: 'templates/band-template.html'
  },
  {
    img: 'images/template-images-cover/img_temp_gourmet_catering.jpg',
    title: 'Gourmet Catering Template',
    url: 'templates/gourmet-catering-template.html'
  },
  {
    img: 'images/template-images-cover/img_temp_architect.jpg',
    title: 'Architect Template',
    url: 'templates/architect-template.html'
  },
  {
    img: 'images/template-images-cover/img_temp_parallax.jpg',
    title: 'Parallax Template',
    url: 'templates/parallax-template.html'
  },
  {
    img: 'images/template-images-cover/img_temp_blog.jpg',
    title: 'Blog Template',
    url: 'templates/blog-template.html'
  },
  {
    img: 'images/template-images-cover/img_temp_food_blog.jpg',
    title: 'Food Blog Template',
    url: 'templates/food-blog-templates.html'
  }
];

export default function Tempaltes() {
  return (
    <div>
      <h4>Templates</h4>
      <div style={styles.root}>
        <GridList cellHeight={180} style={styles.gridList}>
          {tilesData.map(tile => (
            <GridTile key={tile.img} title={tile.title} url={tile.url}>
              <a href={tile.url} target="blank">
                <img src={tile.img} />
              </a>
            </GridTile>
          ))}
        </GridList>
      </div>
    </div>
  );
}
