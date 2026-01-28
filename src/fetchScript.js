

export const getDitto = async () => {
  try {
    const result = await fetch('https://pokeapi.co/api/v2/pokemon/ditto', {
      method: 'GET',
    });
    
    if (result.ok) {
      return await result.json();
    }
    
    if (result.status === 200) {
      throw new Error('EN REALIDAD ESTÁ BIEN!!');
    }
    
    return json;
  } catch (e) {
    return null;
  }
}



