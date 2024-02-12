import fs from 'fs/promises';

export async function loadFile(fileName) {
  const fileBuffer = await fs.readFile(`./data/${fileName}`);
  const fileText = fileBuffer.toString();
  const fileData = JSON.parse(fileText);

  return fileData;
}

export function saveFile(fileName, data) {
  const fileText = JSON.stringify(data, null, 2);

  fs.writeFile(`./data/${fileName}`, fileText);
}