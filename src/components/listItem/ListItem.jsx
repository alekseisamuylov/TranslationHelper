/* eslint-disable no-param-reassign */
import { useState } from 'react';
import { shape } from 'prop-types';

import { Wrapper, NameEN, NameRU, TextEN, TextRU } from './style';

export default function ListItem({ itemEN, itemRU }) {
  const [name, setName] = useState(itemRU.name.value);
  const [text, setText] = useState(itemRU.text.value);

  function onNameChange(value) {
    setName(value);
    itemRU.name.value = value;
  }

  function onTextChange(value) {
    setText(value);
    itemRU.text.value = value;
  }

  const updatedText = itemEN.text.replace(/\r\n/g, '\r\n$');

  return (
    <Wrapper>
      <NameEN>{itemEN.name}</NameEN>
      <NameRU value={name} onChange={e => onNameChange(e.target.value)} />

      <TextEN>{updatedText}</TextEN>
      <TextRU value={text} onChange={e => onTextChange(e.target.value)} />
    </Wrapper>
  );
}

ListItem.propTypes = {
  itemEN: shape({}).isRequired,
  itemRU: shape({}).isRequired,
};
