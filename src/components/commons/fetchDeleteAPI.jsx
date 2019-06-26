const fetchDeleteAPI = async url => {
  await fetch(url, {
    method: "DELETE",
    mode: "cors", // no-cors, cors, *same-origin
    headers: {
      "Content-Type": "application/json;charset=utf-8"
    },
    cache: "no-cache" // *default, no-cache, reload, force-cache, only-if-cached // body data type must match "Content-Type" header
  });
};

export default fetchDeleteAPI;
