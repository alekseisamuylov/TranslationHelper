import { func } from 'prop-types';

import { Button } from './style';

export default function SaveButton({ onSave }) {
  return (
    <Button type="button" onClick={() => onSave()}>
      save
    </Button>
  );
}

SaveButton.propTypes = {
  onSave: func.isRequired,
};
