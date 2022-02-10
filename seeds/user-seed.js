const { User } = require("../models");

const usersInfo = [
    {
        username: "David Dave",
        email: "David@dave.com",
        password: "1234"
    },
    {
        username: "Joesph Joe",
        email: "Joseph@joe.com",
        password: "4321"
    },
    {
        username: "Mr Foot",
        email: "Mr@foot.com",
        password: "abcd"
    },
    {
        username: "The Head",
        email: "Head@head.com",
        password: "efgh"
    }
];

const seedTheUsers = () => User.bulkCreate(usersInfo);
module.exports = seedTheUsers;