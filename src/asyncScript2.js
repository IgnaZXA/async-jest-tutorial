const myPromise = new Promise((resolve, reject) => {
  // Aquí va la operación asíncrona
  const success = true; // simula resultado

  if (success) {
    resolve("Todo salió bien!"); // estado fulfilled
  } else {
    reject(new Error("Algo falló")); // estado rejected
  }
});

export const getPromise = (hasSucceded) => {
  const createPromise = new Promise((resolve, reject) => {
    if (hasSucceded){
      resolve("Good Promise");
    }else{
      reject(new Error('Bad Promise'));
    }
  }
  );

  return createPromise;
}


getPromise(false)
  .then(data => console.log(data))
  .catch(err => console.log(err.message));