const express = require("express"); // require를 통한 express 불러오기
const app = express(); // expree 실행

// app.use((req, res) => {
//     console.log("We gat a new request");
//     res.send({ color: 'red' }); // res.send 메서드를 통해 요청에 의한 응답을 전송
// }) // app.use = 요청이 들어오면 콜백 실행

app.get('/', (req, res) => {
    res.send('Welcome to the homepage!');
}) // get을 통해 서버에서 클라이언트로 데이터를 가져온다. (데이터를 가져올 때)
// get은 정보를 가져오고 페이지를 가져와서 화면에 띄우는 것으로 백엔드에 영향을 주지 않는다.
// 경로 이름 없이 루트 리소스를 요청할 때 '/'만 입력

app.get('/r/:id', (req, res) => {
    const { id } = req.params;
    res.send(`Browsing the ${id} id!`);
})

app.get('/search', (req, res) => {
    const { q } = req.query;
    if (!q) {
        res.send('Noting found if nothing serch.');
    }
    res.send(`<h1>Search results for: ${q}<h1>`)
})

app.post('/cats', (req, res) => {
    res.send('Post request to /cats! This is different than get request!');
}) // post는 서버에 데이터를 보내 저장하거나 처리하는 요청을 한다. (정보를 올리거나 보낼 때)
// post는 회원가입과 같이 계정을 등록, 삭제하거나 댓글 등을 쓰기 위해 데이터를 보내는 용도로 사용한다.

app.get('/cats', (req, res) => {
    res.send('MEOW!');
})

app.get('/dogs', (req, res) => {
    res.send('WOOF!');
})

app.get('*', (req, res) => {
    res.send(`I don't know thah path!`);
}) // '*'를 경로로 보낼 경우, '/dogsss 와 같이 잘못된 경로로의 요청에 대한 응답을 받는다.
// 위 코드를 가장 첫번째 줄에 작성할 경우 아래 다른 요청들에 대한 모든 응답을 덮어버리니 주의하자.

app.listen(3000, () => {
    console.log('Listening on port 3000!');
})