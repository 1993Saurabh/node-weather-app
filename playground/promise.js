var asyncAdd = (a, b) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (typeof a === 'number' && typeof b === 'number') {
                resolve(a + b);
            } else {
                reject('Arguments must be numbers');
            }
        }, 1500);
    });
};

asyncAdd(5, 2).then((msg) => {
    console.log(msg);
    return asyncAdd(msg, 33);
}).then((result) => {
    console.log(result);
}).catch(errorHandler=>{
    console.log(errorHandler);
});

// var somePromise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         //resolve('Hey. It worked!');
//         reject('Unable to fulfill promise');
//     }, 2500);
// });

// somePromise.then((message) => {
//     console.log('Success', message);
// }, (errorMessage) => {
//     console.log('Error : ', errorMessage);
// });