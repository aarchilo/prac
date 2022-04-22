var users = [
    {
        "name": "Akhil",
        dateOfBirth: "2001-10-05T14:48:00.000Z",
        address: {
            hno: 104,
            street: "Nagarkat road",
            city: "Pune",
            state: "Maharashtra"
        },
        occupation: "Engineer",
        company: "Reliance Jio"
    },
    {
        "name": "Rohit",
        dateOfBirth: "1988-10-05T14:48:00.000Z",
        address: {
            hno: "37b",
            city: "Kolkata",
            state: "West bengal"
        },
        occupation: "Doctor",
        company: "Jipmer"
    },
    {
        "name": "Shanmuk",
        dateOfBirth: "2001-10-05T14:48:00.000Z",
        address: {
            hno: 104,
            street: "Tech Market",
            state: "Haryana"
        },
        occupation: "Software Engineer",
        company: "Google inc"
    },
]




/*
Input Object: 
{
        "name": "Akhil",
        dateOfBirth: "2001-10-05T14:48:00.000Z",
        address: {
            hno: 104,
            street: "Nagarkat road",
            city: "Pune",
            state: "Maharashtra"
        },
        occupation: "Engineer",
        company: "Reliance Jio"
    }

Return the following
{
    userName: "Akhil",
    age: 20,
    userAddress: "104 Nagarkat road, Pune, Maharashtra",
    profile: "Engineer | Reliance Jio"
}

*/

var today=new Date();
const printuser=new Map();
//here map is being used in order to create key value pair
const getUserInfo = (printuser) => {

  var s=users[0].dateOfBirth;
        printuser.set("username",users[0]['name']);
        printuser.set("age",today.getFullYear()-Number(s.substring(0,4)));
        printuser.set("profile",users[0].occupation+"|"+users[0].company);
     printuser.set("address",users[0].address.hno+users[0].address.street+","+users[0].address.city+","+users[0].address.state);
        return printuser;
}

getUserInfo(printuser);
console.log(printuser);
/*
Loop through users array and prints(console.log) userInfo object for eact user element
*/

const printAllUserInfo=()=> {
    for(var i=0;i<users.length;i++)
    {
        console.log(users[i]['name']);
        console.log(users[i].dateOfBirth);
        console.log(users[i].address);
        console.log(users[i].occupation);
        console.log(users[i].company);
    }
   //all the users info is being printed 
}
printAllUserInfo();
