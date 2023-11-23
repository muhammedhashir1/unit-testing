import axios from "axios";

export const add = (num1, num2) => {
  return num1 + num2;
};

export const reverseString = (value) => {
  return value.split("").reverse().join("");
};

export const USER_API = "http://api/user.com";

export const languages = ["js", "react", "html"];

export const userDetails = {
  name: "John Doe",
  age: "25",
};

export const fetchUser = async () => {
  const response = await axios("https://jsonplaceholder.typicode.com/todos/2");
  return response.data;
};

export const isAuthenticated = (isLogged = false) => {
  if (isLogged) {
    return "welcome makkale";
  }
  throw new Error("user is not logged in");
};
