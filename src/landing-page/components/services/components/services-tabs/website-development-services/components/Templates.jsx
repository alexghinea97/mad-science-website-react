import React from 'react';
import { GridList, GridTile } from 'material-ui/GridList';
import { Card, CardHeader, CardText } from 'material-ui/Card';
import tilesData from './templates.json';
import LocalizedStrings from '../../../../../../../LocalizedStrings';

const styles = {
  gridList: {
    width: '95%',
    height: 600,
    overflowY: 'auto'
  }
};

export default function Tempaltes() {
  return (
    <div>
      <Card style={{ padding: '7px' }}>
        <CardHeader
          title={
            LocalizedStrings.body.services.websiteDevelopmentDialog.textLabel
          }
          actAsExpander={true}
          showExpandableButton={true}
          className="templates-header"
        />
        <CardText expandable={true}>
          <div>
            <GridList className="grid-list" style={styles.gridList}>
              {tilesData.map(tile => (
                <GridTile
                  className="grid-tile"
                  key={tile.img}
                  title={tile.title}
                  url={tile.url}
                >
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
