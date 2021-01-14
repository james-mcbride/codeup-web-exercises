
const options= {
    headers: {'Authorization': `token ${githubToken}`},
}

function getUserActivity (username) {
    fetch(`https://api.github.com/users/${username}/events/public`, options)
        .then(response => response.json())
        .then(data =>{
            console.log(data)
            console.log(data[0].created_at)
        })
        .catch(error => console.log(error))
}
getUserActivity("james-mcbride")



function wait(time){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() > 0.1) {
                resolve(`You'll see this after ${time} milliseconds unless we have some bad luck!`);
            } else {
                reject('Shoot some bad luck occurred!');
            }
        }, time);
    })
}
wait(1000).then(message => console.log(message));
wait(3000).then(message => console.log(message));

