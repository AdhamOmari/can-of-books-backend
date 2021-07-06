'use strict'
const mongoose = require('mongoose');
const BookSchema = require('./book.model')


const userSchema = new mongoose.Schema({

    email: { type: String },
    arryBooks: [BookSchema],

})
const userModels = mongoose.model('userModels', userSchema)
const seedUser = () => {
    const userAdham = new userModels({
        email: 'adhamOmaai@yahoo.com',
        arryBooks: [
            { name: 'take note', description: 'life', status: 'new' },
            { name: 'Da Vinci Code,The', description: 'crim', status: 'used' },
            { name: 'Fifty Shades of Grey', description: 'Fifty Shades of Grey', status: 'new' },

        ],
    });

    const forYou = new userModels({
        email: 'adhamOmaai@yahoo.com',
        arryBooks: [
            { name: 'take note', description: 'life', status: 'new' },
            { name: 'Da Vinci Code,The', description: 'crim', status: 'used' },
            { name: 'Fifty Shades of Grey', description: 'Fifty Shades of Grey', status: 'new' },

        ],
    });

    console.log(userAdham.arryBooks);

    userAdham.save();
    forYou.save();
}
seedUser();
module.exports = userModels;

