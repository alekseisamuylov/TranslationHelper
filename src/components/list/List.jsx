import { shape } from 'prop-types';

import ListItem from '../listItem/ListItem';

import { ListWrapper, ObjectData, Title } from './style';

export default function List({ listRU, listEN }) {
  return (
    <ListWrapper>
      {Object.entries(listRU).map(obj => (
        <ObjectData key={obj[0]}>
          <Title>{obj[0]}</Title>
          <ListItem itemRU={obj[1]} itemEN={listEN[obj[0]]} />
        </ObjectData>
      ))}
    </ListWrapper>
  );
}

List.propTypes = {
  listRU: shape({}).isRequired,
  listEN: shape({}).isRequired,
};
