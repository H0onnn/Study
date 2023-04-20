const express = require('express');
const app = express();
const path = require("path");
const methodOverride = require('method-override');
const { v4: uuid } = require('uuid');

app.use(methodOverride('_method'));
app.use(express.urlencoded({ extended: true }));

app.set('views', path.join(__dirname, 'views')); // 뷰 파일들의 경로 설정. '__dirname'은 현재 실행 중인 파일의 디렉토리 경로를 나타냄.
// 예를 들어, 현재 파일의 경로가 /Users/username/Desktop/project/app.js라면, __dirname은 /Users/username/Desktop/project를 반환
// __dirname을 사용하여 파일 경로를 동적으로 지정하면, 파일의 위치가 변경되어도 코드를 수정하지 않고도 파일에 접근할 수 있다.

app.set('view engine', 'ejs'); // 뷰 엔진을 EJS로 설정하여, express에서 .ejs 확장자를 가지는 파일들을 뷰 파일로 인식 및 렌더링

let comments = [
    {
        id: uuid(),
        username: 'Todd',
        comment: 'lol that is so funny!'
    },
    {
        id: uuid(),
        username: 'Skyler',
        comment: 'I like to go birdwatching with my dog'
    },
    {
        id: uuid(),
        username: 'H0onnn',
        comment: 'Plz delete my remember'
    },
    {
        id: uuid(),
        username: 'cheol_xx',
        comment: 'woof woof woof'
    }
];

app.get('/comments', (req, res) => {
    res.render('comments/index', { comments });
})
// res.render()는 뷰 템플릿 파일을 렌더링하여 HTML 페이지를 생성, 해당 HTML을 클라이언트에게 반환.
// 첫 번째 인자로 뷰 템플릿 파일명, 두 번째 인자로 뷰 템플릿 파일에서 사용할 데이터를 전달.
// 위 코드에서는 views/comments 경로에 있는 index.ejs 뷰 템플릿 파일을 렌더링하여, { comments } 객체를 전달한다.
// READ - 댓글 읽어오기

app.get('/comments/new', (req, res) => {
    res.render('comments/new');
})

app.post('/comments', (req, res) => { // '/comments' 경로로 post 요청
    const { username, comment } = req.body; // req.body를 통해 요청의 body에서 username, comment 데이터 추출
    comments.push({ username, comment, id: uuid() }); // js 객체 형태로 comments 배열에 추가
    res.redirect('/comments'); // redirect 메서드를 통해 '/comments' 경로로 redirect 함으로써, 새로운 GET 요청 생성 => 추가된 댓글 정보를 가져와 브라우저에 표시
})
// CREATE - 새로운 댓글 달기

app.get('/comments/:id', (req, res) => { // :id는 동적인 url 파라미터를 의미하며, 어떤 값이던 들어올 수 있음
    const { id } = req.params; // req.params를 통해 url 파라미터를 불러와 params 객체에서 id 값 추출
    const comment = comments.find(c => c.id === id); // Array.find 메서드를 이용하여 comments 배열에서 id 값이 req.params.id와 일치하는 요소를 찾음
    res.render('comments/show', { comment }); // comment 객체를 뷰에 전달하여 해당 ID 값을 가진 댓글을 보여줌
})

app.patch('/comments/:id', (req, res) => {
    const { id } = req.params; // 요청의 params 객체에서 id 값 추출. 이는 수정할 댓글의 id 값이 된다.
    const newCommentText = req.body.comment; // 요청의 body 객체에서 comment 값 추출하여 변수에 저장. 이는 새로 입력된 댓글의 내용
    const foundComment = comments.find(c => c.id === id); // comments 배열에서 해당 id 값을 가진 댓글 객체를 찾아서 foundComment 변수에 할당
    foundComment.comment = newCommentText; // 찾은 댓글 객체의 comment 속성값을 새로운 댓글 내용으로 변경
    res.redirect('/comments'); // 댓글을 수정한 뒤, /comments 경로로 리다이렉트
})

app.get('/comments/:id/edit', (req, res) => {
    const { id } = req.params;
    const comment = comments.find(c => c.id === id);
    res.render('comments/edit', { comment })
})
// UPDATE - 댓글 수정하기

app.delete('/comments/:id', (req, res) => {
    const { id } = req.params;
    comments = comments.filter(c => c.id !== id);
    res.redirect('/comments');
})
// DELETE - 댓글 삭제하기

app.listen(3000, () => {
    console.log('On port 3000!');
})