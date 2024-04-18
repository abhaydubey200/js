<<<<<<< HEAD
// function getgo() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             const car = "get car:----";
//             resolve(car);
//         }, 2000);
//     });
// }

// function getcar(car) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             const takecar = "take car:----";
//             resolve(takecar);
//         }, 2000);
//     });
// }

// function getdrive(takecar) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             const drivedrive = "drive car:----";
//             resolve(drivedrive);
//         }, 2000);
//     });
// }

// getgo()
//     .then((car) => {
//         console.log("Go to get car", car);
//         return getcar(car);
//     })
//     .then((takecar) => {
//         console.log("Go to take car", takecar);
//         return getdrive(takecar);
//     })
//     .then((drivedrive) => {
//         console.log("Go to drive car", drivedrive);
//     })
//     .catch((error) => {
//         console.error("Error occurred:", error);
//     })
    


    // const arr=[1,2,3,4,5,6,7,8,9];
    //  console.log(arr);
    //  const arr2=arr.push(10);
    //  console.log(arr);
    
    // arr.pop( );
    // console.log(arr);
    console.log(1 + +"2"+"2")



=======
function getgo() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const car = "get car:----";
            resolve(car);
        }, 2000);
    });
}

function getcar(car) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const takecar = "take car:----";
            resolve(takecar);
        }, 2000);
    });
}

function getdrive(takecar) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const drivedrive = "drive car:----";
            resolve(drivedrive);
        }, 2000);
    });
}

getgo()
    .then((car) => {
        console.log("Go to get car", car);
        return getcar(car);
    })
    .then((takecar) => {
        console.log("Go to take car", takecar);
        return getdrive(takecar);
    })
    .then((drivedrive) => {
        console.log("Go to drive car", drivedrive);
    })
    .catch((error) => {
        console.error("Error occurred:", error);
    })
    
    
>>>>>>> a663cde2770fae5f610cc7e8101ef3a2c06ae52f
