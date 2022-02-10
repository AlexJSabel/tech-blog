const { Comment } = require('../models');

const commentsInfo = [
    {
        comment_text: "Ive got such bad gas.",
        user_id: 1,
        post_id: 2
    },
    {
        comment_text: "This is quite unfortunate.",
        user_id: 2,
        post_id: 1
    },
    {
        comment_text: "How else would I do that?",
        user_id: 3,
        post_id: 4
    },
    {
        comment_text: "Is a hotdog a sandwich?",
        user_id: 4,
        post_id: 3
    }
];

const seedTheComments = () => Comment.bulkCreate(commentsInfo);
module.exports = seedTheComments;