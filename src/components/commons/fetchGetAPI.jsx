import React, { Component } from "react";
const fetchGetAPI = async url => {
  let res = await fetch(url, {
    method: "GET", // *GET, POST, PUT, DELETE, etc.
    mode: "cors", // no-cors, cors, *same-origin
    headers: {
      "Content-Type": "application/json;charset=utf-8"
    },
    cache: "no-cache" // *default, no-cache, reload, force-cache, only-if-cached // body data type must match "Content-Type" header
  }).then(response => response.json());
  return res;
};

export default fetchGetAPI;
