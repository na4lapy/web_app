// @flow

const apiBaseUrl = 'http://localhost:8123/animals?size=10';

const fetchAnimal = async (): Promise<any> => {
  try {
    const data = await fetch(apiBaseUrl);
    const responseJson = await data.json();
    return responseJson;
  } catch (err) {
    return null;
  }
};

export default fetchAnimal;
