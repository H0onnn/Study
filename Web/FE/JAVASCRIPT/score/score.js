const p1 = {
    score: 0,
    button: document.querySelector('#p1Button'),
    display: document.querySelector('#p1Display')
};

const p2 = {
    score: 0,
    button: document.querySelector('#p2Button'),
    display: document.querySelector('#p2Display')
};

const resetButton = document.querySelector('#reset');

const winningScoreSelect = document.querySelector('#playto');

let winningScore = 3;

let isGameOver = false;

function updateScores(player, opponent) {
    if (!isGameOver) { // gameover가 아닐 경우 즉, 점수가 winningScore에 도달하지 못한 경우
        player.score += 1; // 점수 추가 버튼 클릭시 점수 +1
        if (player.score === winningScore) { // 한 명의 플레이어가 winningScore에 도달한 경우
            isGameOver = true; // game을 끝냄
            player.display.classList.add('has-text-success'); // 플레이어(승자)의 점수판을 초록색으로 변경
            opponent.display.classList.add('has-text-danger'); // 상대방(패자)의 점수판을 빨간색으로 변경
            player.button.disabled = true;
            opponent.button.disabled = true; // 플레이어, 상대만의 점수 추가 버튼을 비활성화
        }
        player.display.textContent = player.score; // 점수 추가 버튼 클릭시 +된 점수를 점수판(display)에 출력
    }
};


p1.button.addEventListener('click', function () {
    updateScores(p1, p2) // p1 점수 추가 버튼 클릭시 updateScores 함수가 실행되는 이벤트 리스너 등록, 이때 함수 매개변수의 player = p1, opponent = p2가 됨
});

p2.button.addEventListener('click', function () {
    updateScores(p2, p1) // 위와 같으나 매개변수만 반대
});


winningScoreSelect.addEventListener('change', function () {
    winningScore = parseInt(this.value);
    reset(); // Change 이벤트를 통한 Select의 값이 변경될 때 실행되는 이벤트 리스너 등록, 여기서 this의 값은 option에 부여된 value 값을 지정함. text 형태이기 때문에 parseInt를 통해 숫자로 변환
});

resetButton.addEventListener('click', reset); // Reset 버튼 클릭시 reset 함수 실행하는 이벤트 리스너 등록

function reset() {
    isGameOver = false; // Reset 버튼 클릭시 게임을 초기화 하고 다시 실행 시켜야 함으로, gameover를 false로 변환
    for (let p of [p1, p2]) { // 위에서 선언한 p1, p2 객체의 값을 p 로 받아옴
        p.score = 0; // 점수 0으로 초기화
        p.display.textContent = 0; // 점수판에 출력되는 값 0으로 초기화
        p.display.classList.remove('has-text-success', 'has-text-danger'); // 적용됐던 textColor 스타일 초기화
        p.button.disabled = false; // 비활성화된 버튼 활성화
    }
};