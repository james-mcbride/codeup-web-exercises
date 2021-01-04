function usernameCommits (username){
    return fetch("https://api.github.com/users/{username}/events/public", {headers: {'Authorization': 'token 1e08ec360fae644562b2ba618d5a145990e3df87'}},{
        username: username
    })
        .then(response=>console.log(response))
        .catch(error=> console.log("Something went wrong" + error))
}

console.log(usernameCommits("james-mcbride"));


//wait(1000).then(() => console.log('You\'ll see this after 1 second'));
// wait(3000).then(() => console.log('You\'ll see this after 3 seconds'));

// function wait(time){
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (Math.random() > 0.1) {
//                 resolve(console.log("You'll see this after ${time} seconds"));
//             } else {
//                 reject(console.log('Network Connection Error!'));
//             }
//         }, time);
//     })
// }
// wait(1000)

