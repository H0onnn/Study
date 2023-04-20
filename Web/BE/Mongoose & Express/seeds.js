const mongoose = require('mongoose');

const Product = require('./models/product');

mongoose.connect('mongodb://localhost:27017/farmStand', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB is connected'))
    .catch((err) => console.log(err));

// const p = new Product({
//     name: 'Ruby Grapefruit',
//     price: 1.99,
//     category: 'fruit'
// })

// p.save()
//     .then(p => console.log(p))
//     .catch(e => console.log(e));

const seedProducts = [
    {
        name: 'Ruby Grapefruit',
        price: 1.99,
        category: 'fruit'
    },
    {
        name: 'Carrots',
        price: 2.49,
        category: 'vegetable'
    },
    {
        name: 'Milk',
        price: 3.99,
        category: 'dairy'
    },
    {
        name: 'Broccoli',
        price: 1.29,
        category: 'vegetable'
    },
    {
        name: 'Blueberries',
        price: 4.99,
        category: 'fruit'
    },
    {
        name: 'Cheese',
        price: 5.99,
        category: 'dairy'
    },
    {
        name: 'Tomatoes',
        price: 0.99,
        category: 'vegetable'
    },
    {
        name: 'Oranges',
        price: 2.99,
        category: 'fruit'
    },
    {
        name: 'Eggs',
        price: 2.79,
        category: 'dairy'
    },
    {
        name: 'Green Beans',
        price: 1.49,
        category: 'vegetable'
    }
];

Product.insertMany(seedProducts)
    .then(res => console.log(res))
    .catch(e => console.log(e));