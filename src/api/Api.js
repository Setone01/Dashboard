import axios from "axios";

export async function usersData() {
  const user = await axios.get("https://jsonplaceholder.typicode.com/users");
  return user;
}