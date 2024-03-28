import fleekStorage from '@fleekhq/fleek-storage-js';

const apiKey = process.env.REACT_APP_API_KEY;
const apiSecret = process.env.REACT_APP_API_SECRET;

export const getImageFromStorage = async (key: string) => {
  const input = {
    apiKey,
    apiSecret,
    key,
    getOptions: ['hash', 'data', 'publicUrl'],
  };

  try {
    const result = await fleekStorage.get(input);
    return result;
  } catch (e) {
    console.log('error', e);
  }
};

export const listFilesFromStorage = async () => {
  const input = {
    apiKey,
    apiSecret,
    getOptions: ['bucket', 'key', 'hash', 'publicUrl'],
  };

  try {
    const result = await fleekStorage.listFiles(input);
    result.map((file) => {
      return file;
    });
  } catch (e) {
    console.log('error', e);
  }
};

export const getImageFromSupabaseStorage = async (image: any) => {
  const response = await fetch(`/api/image/${image}`);
  const imgurl = await response.json();
  return imgurl;
};

export const getImagesFromSupabaseStorage = async () => {
  const response = await fetch(`/api/images/list`);
  console.log(response);
  return response;
};
