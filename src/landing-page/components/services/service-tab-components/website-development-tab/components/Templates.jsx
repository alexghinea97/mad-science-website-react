import React from 'react';
import { GridList, GridTile } from 'material-ui/GridList';
import { Card, CardHeader, CardText } from 'material-ui/Card';
import tilesData from './templates.json';

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

export default function Tempaltes() {
  return (
    <div>
      <Card style={{ padding: '15px' }}>
        <CardHeader
          title="Templates"
          actAsExpander={true}
          showExpandableButton={true}
          className="templates-header"
        />
        <CardText expandable={true}>
          <div style={styles.root}>
            <GridList cellHeight={180} style={styles.gridList}>
              {tilesData.map(tile => (
                <GridTile key={tile.img} title={tile.title} url={tile.url}>
                  <a href={tile.url} target="blank">
                    <img src={tile.img} alt={tile.alt} />
                  </a>
                </GridTile>
              ))}
            </GridList>
          </div>
        </CardText>
      </Card>
    </div>
  );
}
