const promis = new Promise((resolve, reject) => {
  setTimeout(() => {
    // resolve("this is my data");
    reject("something went wrong!");
  }, 5000);
});

promis.then(
  (data) => {
    console.log(data);
  },
  (error) => {
    console.log("error: ", error);
  }
);
