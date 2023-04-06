import fleekStorage from '@fleekhq/fleek-storage-js'

const apiKey = process.env.API_KEY
const apiSecret = process.env.API_SECRET

export const getImageFromStorage = async (key) => {
    const input = {
      apiKey,
      apiSecret,
      key,
      getOptions: ['hash', 'data', 'publicUrl']
    };
  
    try {
      const result = await fleekStorage.get(input);
      return result;
    } catch(e) {
      console.log('error', e);
    }
  }


export const listFilesFromStorage = async () => {
    const input = {
        apiKey,
        apiSecret,
      getOptions: [
        'bucket',
        'key',
        'hash',
        'publicUrl'
      ],
    };

    try {
        const result = await fleekStorage.listFiles(input);
        result.map( (file) => {            
            return file;
        });
      } catch(e) {
        console.log('error', e);
      }
}
