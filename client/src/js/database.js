import { openDB } from 'idb';

const initdb = async () =>
  openDB('jate', 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains('jate')) {
        console.log('jate database already exists');
        return;
      }
      db.createObjectStore('jate', { keyPath: 'id', autoIncrement: true });
      console.log('jate database created');
    },
  });

// TODO: Add logic to a method that accepts some content and adds it to the database
export const putDb = async (content) => {
  console.log('Post to the database');
  const textDB = await openDB('text', 1);
  const tx = textDB.transaction('text', 'readwrite');
  const store = tx.objectStore('text');
  const request = store.add(content);
  const result = await request;
  console.log('Data has been saved to the database!', result);
}

// TODO: Add logic for a method that gets all the content from the database
export const getDb = async () => {
  console.log('Get data from the database.');
  const textDB = await openDB('text', 1);
  const tx = textDB.transaction('text', 'readonly');
  const store = tx.objectStore('text');
  const request = store.getAll();
  const result = await request;
  console.log('result.value', result);
  return result;
}

initdb();
