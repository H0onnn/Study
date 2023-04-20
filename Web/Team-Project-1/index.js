const express = require('express'); // express 불러오기
const app = express(); // express 실행
const mongoose = require('mongoose'); // mongoose 불러오기
const { User } = require('./models'); // User 모델 불러오기 (윤주님 작성 Schema 모델로 수정 필요)

mongoose.connect('mongodb://localhost:27017/HOLO', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB is connected'))
    .catch((err) => console.log(err)); // MongoDB 연결

// bodyParser 미들웨어 사용
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
