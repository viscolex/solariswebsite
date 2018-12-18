
const fetch = require("node-fetch");

const url = "https://solaris.blockexplorer.pro/api/getblockcount";

const getData = async url => {
  try {
    const response = await fetch(url);
    const json = await response.json();
    console.log(json);
  } catch (error) {
    console.log(error);
  }
};

letgetData(url);