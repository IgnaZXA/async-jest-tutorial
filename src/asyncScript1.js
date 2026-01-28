
export async function getUserById(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (!id) {
        reject(new Error("Invalid user id"));
      } else {
        resolve({
          id,
          name: "John Doe",
          email: "john.doe@test.com"
        });
      }
    }, 100);
  });
}