const url = "https://demo.flexmms.com/v3/api/incidents/";

const params = {
  view: "detailed",
  start: Math.floor(new Date("01/01/2015").getTime() / 1000),
  end: Date.now(),
};
const options = {
  method: "POST",
  // mode: "no-cors",
  headers: {
    "api-key": "SzVlZGUwYzdjMTg1Y2M4LjM2NTM5MzYw",
    "Content-Type": "application/json",
  },
  body: JSON.stringify(params),
};

export const fetchData = () => {
  return fetch(url, options)
    .then((response) => response.json())
    // .then((data) => {
    //   console.log(
    //     "OUT ==>>> ",
    //     data.results,
    //     Math.floor(new Date("01/01/2016").getTime() / 1000),
    //     Date.now()
    //   );
    // });
};
