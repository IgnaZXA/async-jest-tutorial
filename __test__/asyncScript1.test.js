// userService.test.js
import { getUserById } from "./../src/asyncScript1";

test("async function works", async () => {
  const user = await getUserById(1);
  expect(user.id).toBe(1);
});