const express = require("express");
const app = express();

app.use(express.urlencoded({ extended: true }));
// 위 코드는 express app에서 미들웨어 함수를 바인딩 하는 코드
// req.body에서 urlencoded 데이터를 추출할 수 있도록 하는 미들웨어 함수를 바인딩한다
// (urlencoded 데이터란 WebApp에서 폼form을 통해 제출된 데이터를 전송할 때 사용하는 인코딩 방식을 말한다.)
// extended가 true인 경우, 다음과 같은 데이터를 파싱할 수 있다.
// name=John+Doe&age=25 => { name: 'John Doe', age: '25' }
// 즉, 위 코드는 요청의 req의 body에서 urlencoded 데이터를 추출하여 JS 객체로 만들어주며, 이렇게 만들어진 객체는 'req.body'를 통해 접근할 수 있다.

app.use(express.json());
// express에서 제공하는 미들웨어중 하나로 서버로 전송된 json 형식의 데이터를 파싱하여 JS 객체로 변환한다.
// 클라이언트가 서버로 요청을 보내면, express는 req.body를 읽어 json 형식으로 변환 후 req.body에 저장한다.

app.get('/tacos', (req, res) => {
    res.send('GET /tacos response');
})
// get은 전송하는 데이터가 url 내에 한정되어 있는데 url은 최대 2048자 까지 허용된다.

app.post('/tacos', (req, res) => {
    const { meat, qty } = req.body;
    res.send(`OK, here are your ${qty} ${meat} tacos.`)
})
// post의 경우 get에 비해 더 많은 양의 데이터를 전송할 수 있고, 데이터가 url에 한정되어 있지 않다는 차이점이 있다.

app.listen(3000, () => {
    console.log('On prot 3000!');
})

