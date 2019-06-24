import React, { Component } from "react";
const fetchPostAPI = async (url, method, body) => {
  await fetch(url, {
    method: method, // *GET, POST, PUT, DELETE, etc.
    mode: "cors", // no-cors, cors, *same-origin
    headers: {
      "Content-Type": "application/json;charset=utf-8"
    },
    body: body,
    cache: "no-cache" // *default, no-cache, reload, force-cache, only-if-cached // body data type must match "Content-Type" header
  });
};

export default fetchPostAPI;
