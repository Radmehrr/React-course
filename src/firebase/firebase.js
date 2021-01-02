// child_added
// child_changed
// child_removed
// push
// on
// once
// update
// set
// remove
//

import * as firebase from "firebase";

const config = {
  apiKey: "AIzaSyA2T5ZKCh3HKmLWYJ21nPZh1k-VI0UZ5ts",
  authDomain: "expensify-r.firebaseapp.com",
  databaseURL: "https://expensify-r-default-rtdb.firebaseio.com",
  projectId: "expensify-r",
  storageBucket: "expensify-r.appspot.com",
  messagingSenderId: "756825479859",
};

firebase.initializeApp(config);

const database = firebase.database();
const googleProvider = new firebase.auth.GoogleAuthProvider();

export { firebase, database as default };

// // just child_removed
// database.ref("expenses").on("child_removed", (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// });

// database.ref("expenses").on("child_changed", (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// });

// database.ref("expenses").on("child_added", (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// });

// database.ref("expenses").on("value", (snapshot) => {
//   const expenses = [];
//   snapshot.forEach((childSnapshot) => {
//     expenses.push({
//       id: childSnapshot.key,
//       ...childSnapshot.val(),
//     });
//   });
//   console.log(expenses);
// });

// database
//   .ref("expenses")
//   .once("value")
//   .then((snapshot) => {
//     const expenses = [];
//     snapshot.forEach((childSnapshot) => {
//       expenses.push({
//         id: childSnapshot.key,
//         ...childSnapshot.val(),
//       });
//     });

//     console.log(expenses);
//   });

// database.ref("expenses").push({
//   description: "phone bill",
//   note: "",
//   amount: 5230,
//   createdAt: 1875623875,
// });

// database.ref("notes/-MPnQJmDtHLSNyhTMZep").remove();

// database.ref("notes").push({
//   title: "Coure toturials",
//   body: "React native,angular,python",
// });

// const notes = [
//   {
//     id: "12",
//     title: "First node!",
//     body: "this is my note",
//   },
//   {
//     id: "15ewe2w",
//     title: "another note",
//     body: "this is my notesssss",
//   },
// ];

// database.ref("notes").set(notes);

// database.ref().on("value", (snapshot) => {
//   const val = snapshot.val();
//   console.log(`${val.name} is a ${val.job.title} at ${val.job.company}.`);
// });

// database
//   .ref()
//   .once("value")
//   .then((snapshot) => {
//     const val = snapshot.val();
//     console.log(val);
//   })
//   .catch((e) => {
//     console.log("error fetching data: ", e);
//   });

// database
//   .ref()
//   .set({
//     name: "Radmehr dehghani",
//     age: 23,
//     stressLevel: 6,
//     job: {
//       title: "Software developer",
//       company: "Google",
//     },
//     location: {
//       city: "Shiraz",
//       country: "Iran",
//     },
//   })
//   .then(() => {
//     console.log("data is Saved");
//   })
//   .catch((e) => {
//     console.log("This failed.", e);
//   });

// database.ref().update({
//   stressLevel: 9,
//   "job/company": "Amazon",
//   "location/city": "seattle",
// });

// database.ref("isSingle").set("false");

// database.ref("isSingle").set(null);

// database
//   .ref()
//   .remove()
//   .then(() => {
//     console.log("data was removed!");
//   })
//   .catch((e) => {
//     console.log("did not remove data", e);
//   });

// database.ref().set("this is my data");

// database.ref("age").set(26);
// database.ref("location/city").set("New York");

// database
//   .ref("attributes")
//   .set({
//     height: 78,
//     weight: 150,
//   })
//   .then(() => {
//     console.log("second set call works. ");
//   })
//   .catch((e) => {
//     console.log("Things didnt for the second error:", e);
//   });
