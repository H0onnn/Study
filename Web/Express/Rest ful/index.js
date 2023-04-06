const express = require('express');
const app = express();
const path = require("path");

app.set('views', path.join(__dirname, 'views')); // 뷰 파일들의 경로 설정. '__dirname'은 현재 실행 중인 파일의 디렉토리 경로를 나타냄.
// 예를 들어, 현재 파일의 경로가 /Users/username/Desktop/project/app.js라면, __dirname은 /Users/username/Desktop/project를 반환
// __dirname을 사용하여 파일 경로를 동적으로 지정하면, 파일의 위치가 변경되어도 코드를 수정하지 않고도 파일에 접근할 수 있다.

app.set('view engine', 'ejs'); // 뷰 엔진을 EJS로 설정하여, express에서 .ejs 확장자를 가지는 파일들을 뷰 파일로 인식 및 렌더링

const comments = [
    {
        username: 'Todd',
        comment: 'lol that is so funny!'
    },
    {
        username: 'Skyler',
        comment: 'I like to go birdwatching with my dog'
    },
    {
        username: 'H0onnn',
        comment: 'Plz delete my remember'
    },
    {
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

app.listen(3000, () => {
    console.log('On port 3000!');
})