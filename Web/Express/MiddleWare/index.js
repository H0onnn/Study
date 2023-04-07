const express = require('express');
const app = express();
const morgan = require('morgan'); // morgan 미들웨어 사용하기

morgan('tiny');

app.use(morgan('tiny'));

app.use((req, res, next) => {
    console.log(req.method, req.path);
    next();
})

app.use('/dogs', (req, res, next) => { // app.use에 문자열이나 경로, 정규식 등을 인자로 받을 수 있다. 이 코드의 경우 '/dogs'로 들어오는 요청에 대해서만 미들웨어가 실행된다.
    console.log('I love dogs!');
    next();
})

const verifyPassword = (req, res, next) => {
    const { password } = req.query;
    if (password === 'chickennugget') {
        next();
    }
    res.send('Sorry we need a password!');
}

// app.use((req, res, next) => {
//     console.log('My first middelware !!');
//     next(); // next()를 통해 다음 미들웨어 혹은 라우터 핸들러를 호출, 다음 미들웨어가 없을 시 요청 종료.
// })

// app.use((req, res, next) => {
//     console.log('My second middelware !!');
//     next();
// })

app.get('/', (req, res) => {
    res.send('Home page!');
})

app.get('/dogs', (req, res) => {
    res.send('Woof Woof!');
})

app.get('/secret', verifyPassword, (req, res) => {
    res.send('My secret is: Sometimes I think about die');
}) // 특정한 요청에 대해 미들웨어를 실행하고 싶을시, 미들웨어를 함수로 선언하여 해당 요청의 첫번째 미들웨어로 넣어줄 수 있다.
// '/secret' 경로에 대한 get 요청에서 verifyPassword 미들웨어 함수를 실행하여 password가 일치할시만 다음 요청으로 넘어가는 코드 예시

app.use((req, res) => {
    res.status(404).send('NOT FOUND');
}) // app.use 미들웨어를 맨 마지막에 작성 함으로써, 잘못된 경로로의 요청이 들어왔을 시 실행되는 함수를 선언한다.
// .status()를 이용하여 상태 코드를 설정한다. 404의 경우 잘못된 요청이 들어왔을 시 상태코드

app.listen(3000, () => {
    console.log('App is running on localhost:3000');
})