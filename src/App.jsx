import { useState, useEffect } from 'react';

import { getFiles, saveTranslate } from './api';

import List from './components/list/List';
import SaveButton from './components/saveButton/SaveButton';

function App() {
  const [translatedValues, setTranslatedValues] = useState({});
  const [originalValues, setOriginalValues] = useState({});

  useEffect(() => {
    async function init() {
      const data = await getFiles();

      const preparedData = {};
      const originalData = {};

      Object.keys(data.en).forEach(key => {
        preparedData[key] = {
          name: {
            op: 'replace',
            path: `/${key}/senderName`,
            value: data.en[key].senderName,
          },
          text: {
            op: 'replace',
            path: `/${key}/text`,
            value: '',
          },
        };

        const preparedTranslation = data.ru.filter(
          el => el.path.includes(`/${key}/`) && el.value,
        );

        const [first, second] = preparedTranslation;

        if (preparedTranslation.length) {
          if (first.path.includes('text')) {
            preparedData[key].name = second;
            preparedData[key].text = first || preparedData[key].text;
          } else {
            preparedData[key].name = first;
            preparedData[key].text = second || preparedData[key].text;
          }
        }

        originalData[key] = {
          name: data.en[key].senderName,
          text: data.en[key].text,
        };
      });

      setTranslatedValues(preparedData);
      setOriginalValues(originalData);
    }
    init();
  }, []);

  // useEffect(() => {
  //   setInterval(() => {
  //     onSave();
  //     console.log(123);
  //   }, 10000);
  // }, [])

  function onSave() {
    const result = [];
    Object.values(translatedValues).forEach(item => {
      result.push(item.name);
      result.push(item.text);
    });

    saveTranslate(result);
  }

  return (
    <>
      <List listRU={translatedValues} listEN={originalValues} />
      <SaveButton onSave={() => onSave()} />
    </>
  );
}

export default App;
