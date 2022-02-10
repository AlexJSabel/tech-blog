const { Post } = require('../models');

const postsInfo = [
    {
        title: "Give it up",
        post_content: "What is done is done.",
        user_id: 1
    },
    {
        title: "How about No?",
        post_content: "It is what it is.",
        user_id: 2
    },
    {
        title: "Is a hotdog a sandwich",
        post_content: "Yes obviously.",
        user_id: 3,
    },
    {
        title: "Get outta my way",
        post_content: "I gotta find the bathroom.",
        user_id: 4
    }
];

const seedThePosts = () => Post.bulkCreate(postsInfo);
module.exports = seedThePosts;