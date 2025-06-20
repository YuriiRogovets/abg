import axios from "axios";

export const fetchCeiling = async () => {
  const { data } = await axios.get("https://dummyjson.com/products");

  return data;
};

export const fetchPutty = async () => {
  const { data } = await axios.get("http://localhost:8080/api/putty");
  // console.log(data);

  return data;
};

// const searchParams = {
//   client_id: API_KEY,
//   query: searchQuery,
//   page: numberPage,
//   per_page: 10,
// };

// const searchParams = new URLSearchParams({
//   client_id: API_KEY,
//   query: searchQuery,
//   per_page: 10,
//   page: numberPage,
// });

// export const getPhotos = async () => {
//   const response = await axios.get();
//   return response;
// };

// export const getPhotosByQuery = async (searchQuery, pageNumber) => {
//   const searchParams = {
//     client_id: API_KEY,
//     query: searchQuery,
//     per_page: 10,
//     page: pageNumber,
//   };
//   const response = await axios.get(
//     `/search/photos/?${new URLSearchParams(searchParams).toString()}`
//   );
//   return response;
// };
