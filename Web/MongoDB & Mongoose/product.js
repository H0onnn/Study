const mongoose = require('mongoose'); // mongoose 모듈 require로 불러오기

main().catch(err => console.log(err)); // mongoose에 연결이 정상적으로 실행되지 않을 경우 오류 처리

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/shopApp'); // MongoDB 기본 port '27017'
    console.log('Connection Open!');

    const productSchema = new mongoose.Schema({
        name: {
            type: String, // 스키마 객체 속성의 타입 지정 (String, Number, Boolean 등 다양한 타입 지정 가능)
            required: true // required: true로 지정함으로써 필수값으로 지정
        },
        price: {
            type: Number
        },
        onSale: {
            type: Boolean,
            default: false // default 값 설정
        },
        categories: {
            type: [String], // type을 String으로 이루어진 배열로 지정
            default: ['Cycling']
        },
        qty: {
            online: {
                type: Number, // 속성 안에 자식 속성 지정
                default: 0
            },
            inStore: {
                type: Number,
                default: 0
            }
        }

    });

    const Product = mongoose.model('Product', productSchema);

    // Product 모델을 이용한 새로운 객체 생성
    const newProduct = new Product({
        name: 'Road Bike',
        price: 799,
        onSale: true,
        categories: ['Cycling', 'Outdoor'],
        qty: {
            online: 20,
            inStore: 10
        }
    });
    // save 메서드를 사용하여 MongoDB에 저장
    await newProduct.save();

    // ---Find
    // 전체 제품 검색
    const productsAll = await Product.find();
    console.log(productsAll);

    // 이름으로 제품 검색
    const productName = 'Road Bike';
    const product = await Product.findOne({ name: productName });
    console.log(product);
};



