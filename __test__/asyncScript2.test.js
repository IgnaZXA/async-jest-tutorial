import {getPromise} from './../src/asyncScript2'

describe('getPromise()', () => {
  it('should get a good promise response', async () => {
    const response = await getPromise(true);
    expect(response).toBe('Good Promise');
  });

  it ('should throw an error when promise is rejected', async() => { // con try/catch --> await lanza una excepción al detectar que la promesa ha sido rejected
    try{
      const response = await getPromise(false);
    }catch(error){
      expect(error.message).toBe('Bad Promise')
    }
  });

  it('should throw an error when promise is rejected', async() => {
    await expect(getPromise(false)).rejects.toThrow();
  });

    it('should throw an error when promise is rejected', async() => {
    await expect(getPromise(false)).rejects.toThrow('Bad Promise');
  });
});