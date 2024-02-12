import { object } from 'prop-types';

import ListItem from '../listItem/ListItem.jsx';

import { ListWrapper, ObjectData, Title } from './style.js';

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
    )
}

List.propTypes = {
    listRU: object.isRequired,
    listEN: object.isRequired
};