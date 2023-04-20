const express = require('express');
const app = express();
const path = require('path');
const methodOverrid = require('method-override');
const mongoose = require('mongoose');

const Product = require('./models/product');

mongoose.connect('mongodb://localhost:27017/farmStand', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB is connected'))
    .catch((err) => console.log(err));


app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.urlencoded({ extended: true }));
app.use(methodOverrid('_method'));

const categories = ['fruit', 'vegetable', 'dairy'];

app.get('/products', async (req, res) => {
    const { category } = req.query;
    if (category) {
        const products = await Product.find({ category });
        // products/index 템플릿을 렌더링하면서 products 변수를 전달
        res.render('products/index', { products, category });
    } else {
        // 모든 제품을 찾아서 products 변수에 저장
        const products = await Product.find({});
        res.render('products/index', { products, category: 'All' });
    }
});

app.get('/products/new', (req, res) => {
    res.render('products/new')
});

app.post('/products', async (req, res) => {
    const newProduct = new Product(req.body);
    await newProduct.save();
    res.redirect(`/products/${newProduct._id}`);
    console.log(newProduct);
})

app.get('/products/:id', async (req, res) => {
    const { id } = req.params;
    const product = await Product.findById(id);
    console.log(product);
    res.render('products/show', { product });
});

app.get('/products/:id/edit', async (req, res) => {
    const { id } = req.params;
    const product = await Product.findById(id);
    res.render('products/edit', { product, categories });
});

app.put('/products/:id', async (req, res) => {
    const { id } = req.params;
    const product = await Product.findByIdAndUpdate(id, req.body, { runValidators: true, new: true });
    res.redirect(`/products/${product._id}`);
});

app.delete('/products/:id', async (req, res) => {
    const { id } = req.params;
    const deleteProduct = await Product.findByIdAndDelete(id);
    res.redirect('/products');
});

app.listen(3000, () => {
    console.log('App is listening on port 3000!');
});