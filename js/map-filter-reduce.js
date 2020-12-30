const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }
];

const filteredUsers=users.filter(user => user.languages.length>=3)
console.log(filteredUsers)

const emailAddresses=users.map(user => user.email)
console.log(emailAddresses)

const totalExperience = users.reduce((total, user) => {
    return total+user.yearsOfExperience
},0)
console.log(totalExperience)

const averageExperience = totalExperience/users.length;

const longestEmail = users.reduce((longest, user) => {
    if (user.email.length>longest.length){
        return user.email
    } else{
        return longest
    }
}, "a")
console.log(longestEmail)

const usersString = users.reduce((str, user, index)=>{
    if (index<users.length-1){
            return str + user.name+ ", "
    } else{
        return str + user.name+ "."
    }
}, "Your instructors are: ")
console.log(usersString)

const uniqueLanguages = users.reduce((array, user) =>{
    for (let i=0; i<user.languages.length; i++){
        console.log(user.languages[i])
        if (array.indexOf(user.languages[i])===-1){
            array.push(user.languages[i])
        }
    }
    return array;

},[])
console.log(uniqueLanguages)