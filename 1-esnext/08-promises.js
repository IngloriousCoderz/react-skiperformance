// console.log("Before");
// $.ajax(
//   url1,
//   (response1) => {
//     console.log(response1);
//   },
//   (error1) => {
//     console.error(error1);
//   }
// );
// console.log("After");

console.log("Before");
$.ajax(
  url1,
  (response1) => {
    console.log(response1);
    $.ajax(
      url2,
      (response2) => {
        console.log(response2);
        $.ajax(
          url3,
          (response3) => {
            console.log(response3);
          },
          (error3) => {}
        );
      },
      (error2) => {}
    );
  },
  (error1) => {}
);
console.log("After");

console.log("Before");
$.ajax(url1, callback1);
function callback1(response1) {
  console.log(response1);
  $.ajax(url2, callback2, error1);
}
function error1(err) {}
function callback2(response2) {
  console.log(response2);
  $.ajax(url3, callback3);
}
function callback3(response3) {
  console.log(response3);
}
console.log("After");

console.log("Before");
$.ajax(url1, callback1);
$.ajax(url2, callback2);
console.log("After");

$.ajax(url1)
  .then((response1) => {
    console.log(response1);
    return $.ajax(url2);
  })
  .then((response2) => {
    console.log(response2);
  })
  .catch((error) => {
    console.error(error);
  })
  .finally(() => {});

{
  const promise = new Promise((resolve, reject) => {
    $.ajax(
      url,
      (response) => {
        resolve(response.body);
      },
      (error) => {
        reject(error.message);
      }
    );
  });

  promise
    .then((body) => {
      console.log(body);
    })
    .catch((errorMessage) => {
      console.error(errorMessage);
    });
}

{
  setTimeout(() => {
    console.log("Hello world!");
  }, 1000);

  new Promise((resolve) => {
    setTimeout(resolve, 1000);
  }).then(() => console.log("Hello world!"));
}

Promise.all([promise1, promise2, promise2])
  .then(([response1, response2, response3]) => {})
  .catch((error) => {});

Promise.allSettled([promise1, promise2, promise2]).then(
  ([result1, result2, result3]) => {}
);

Promise.race([promise1, promise2]).then((responseOfTheFastest) => {});
