// 자바스크립트 연산자
//    +, -, *, /, %(나머지 연산자), **(제곱 연산자)
// 자바스크립트 변수
//    let(변수 이름 지정), const(let과 같은나 상대값으로 값을 변경할 수 없음), var(let과 const의 등장으로 사용하지 않음)

// console 코드, console.log() -> print 의 역활
// alert 코드 -> 팝업창 생성, 확인 버튼만 표시됨
// prompt 코드 -> 팝업창 생성, 확인 및 취소 버튼이 표시되며 값을 받을 수 있음

// --- #if문과 논리 연산자 &&, !, || ---
const dayOfweek = 'monday';

if (dayOfweek === 'monday') {
    console.log("I hate monday");
} else if (dayOfweek === 'saturday') {
    console.log("I love saturday !");
} else {
    console.log("X");
}
// 조건문 if, if (조건) {조건이 참일시 실행되는 값}, else if -> if 문이 거짓일시 실행되며 갯수 상관없이 추가 가능
// else -> 모든 조건이 거짓일시 마지막에 실행

const password = prompt("비밀번호를 입력하세요");
if (password.length >= 6 && password.indexOf(' ') === -1) {
    console.log("유효한 비밀번호 입니다.");
} else {
    console.log("비밀번호가 유효하지 않습니다.");
}
// 조건문 AND && 두가지 조건이 모두 참이어야 실행

const age = 90;
if (age >= 0 && age < 5 || age >= 65) {
    console.log("무료");
} else if (age >= 5 && age < 10) {
    console.log("$10");
} else if (age >= 10 && age < 65) {
    console.log("$20");
} else {
    console.log("나이가 유효하지 않습니다.");
}
// 조건문 OR || 두가지 조건 중 하나만 참이어도 실행

const firstName = prompt("나이를 입력하세요.");
if (!firstName) {
    firstName = prompt("다시 시도하세요.");
}
// 조건문 NOT ! 조건의 true, false 값을 뒤집는다

// --- #switch문 ---
const day = 2;
switch (day) {
    case 1:
        console.log("월요일");
        break;
    case 2:
        console.log("화요일");
        break;
    case 3:
        console.log("수요일");
        break;
    case 4:
        console.log("목요일");
        break;
    case 5:
        console.log("금요일");
        break;
    default:
        console.log("잘못되었습니다.")
}
// 조건문 SWITCH if, else if 와 같은 조건문으로 switch () {case ?: 출력값}의 형태로 사용한다.
// break 를 만나기 전 까지 계속해서 코드가 실행되기 때문에 각 case 마다 break 를 걸어주어야 한다.
// default 는 else 와 같은 의미

// --- #배열 ---
let days = ['Monday', 'Tuesday', 'Wendnesday'];
// 배열 Array, JS 에서 배열은 '[]'를 사용하여 지정한다.
// 배열에는 문자, 숫자, 참/거짓 등 모든 집합을 넣을 수 있다. 즉, 동질성이 필요 없다.

days[0] // Monday 출력
days[0][0] // M 출력
// 배열의 각 요소는 인덱스 값을 가진다. 문자열과 마찬가지로 0 부터 시작한다.

let colors = ['rad', 'orange', 'yalloww'];
colors[0] = 'red';
colors[2] = 'yellow';
// 배열은 해당 요소를 지정하여 요소의 값을 변경할 수 있다. 일반 문자열에서는 불가능하다.

// --- #배열 메서드 ---
let movieLine = ['tom', 'nancy'];
movieLine[2] = 'pablo'; // = movieLine.push('oliver','eva');
movieLine.pop() // -> 맨 마지막 요소가 삭제됨 / let person = movieLine.pop() -> pop 은 변수로 지정 가능함
// 배열에서 push 는 맨 마지막 부터 요소 추가 (여러개 한 번에 가능), pop 은 맨 마지막 요소 삭제 (괄호 안에 인수 x, 변수로 지정 가능)

let movieLine = ['tom', 'nancy'];
movieLine.shift() // -> 맨 첫번째 요소가 삭제됨 / let nextPatner = movieLine.shift() -> pop 과 마찬가지로 변수로 지정 가능함
movieLine.unshift('VIP')
// shift 는 맨 첫번째 요소 삭제 pop 과 마찬가지로 괄호 안에 인수 x, 변수로 지정 가능 / unshift 는 맨 앞에 요소 추가

let cats = ['blue', 'kitty'];
let dogs = ['rust', 'carry'];
cats.concat(dogs);
let comboParty = cats.concat(dogs); // -> ['blue', 'kitty', 'rust', 'carry']
// concat 메서드는 배열과 배열을 합쳐서 새로운 배열을 만들어 준다.

cats.includes('blue'); // = true
// includes 메서드는 해당 배열에 해당 요소가 포함되어 있는지 불리언(참/거짓) 값으로 반환한다.

comboParty.indexOf('rust'); // = 2
// indexOf 메서드는 문자열과 마찬가지로 해당 배열에서의 해당 요소의 인덱스 값을 출력한다. 요소가 해당 배열에 없을시엔 -1

comboParty.reverse(); // -> ['carry', 'rust', 'kitty', 'blue']
// reverse 메서드는 해당 배열의 순서를 반대로 바꾼다.

const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
colors.slice(5) = ['indigo', 'violet']
colors.slice(2, 4) = ['yellow', 'green'] // () 안에 시작점과 끝을 입력할 수 있다. 시작점은 포함하지만 정지점은 포함하지 않는다.
colors.slice(-2) = ['indigo', 'violet'] // () 안에 음수를 넣으면 끝의 요소를 가져온다.
let coolColors = colors.slice(3); // slice 메서드를 변수로 지정할 수 있다.
// slice 메서드는 해당 배열의 값을 복사한다. () 안에 입력한 인덱스의 요소부터 복사하며, 공백일시 배열 전체를 복사한다.

colors.splice(5, 1); // = 'indigo' 요소 삭제
colors.splice(1, 0, 'red-orange'); // = 'red' 와 'orange' 사이에 'red-ornage' 추가
// splice 메서드를 이용하여 배열 요소의 삭제, 삽입을 동시에 할 수 있다. () 안에는 3가지 값을 입력할 수 있다. (시작점(필수), 삭제할 인덱스, 추가할 요소)

const num = [-12, 1, 0, 100, 2123, 9, 70]
num.sort() // = [-12, 0, 1, 100, 2123, 70, 9]
// sort 메서드는 배열의 요소를 정렬한다. 다만 맨 앞자리를 기준으로 정렬하며, 기본적으로 모든 값을 문자열로 변환한다.

// --- #중첩 배열 ---
const gameBoard = [['X', 'O', 'X'], ['O', null, 'X'], ['O', 'O', 'X']];
// 중첩 배열, 각 배열마다 인덱스 값을 가짐.

// --- #객체 ---
const kitchenSink = {
    favNum: 7777,
    isFunny: true,
    colors: ['red', 'orange']
};
// 객체 object, JS 에서 객체는 '{}'를 이용하여 지정한다.
// 객체 안에는 배열과 마찬가지로 모든 데이터 유형이 입력될 수 있다.
// 객체 요소는 key-value 형태로 입력되며 key와 value는 콜론 : 으로 구분한다.
// 객체를 생성하면 모든 key 값은 문자열로 변환된다.

kitchenSink["colors"] // = ["red", "orange"] 객체에서 데이터를 불러오는 방법, 배열과 같이 '[]'를 사용하며, 해당 key 값에 따옴표를 붙인다.
kitchenSink.favNum // = 7777 객체에서 데이터를 불러오는 방법2, 해당 객체 뒤에 .key 를 입력한다.

const midterms = { danielle: 96, thomas: 78 };
midterms.thomas = 79; // 객체에서 key의 값을 변경하는 방법
midterms.ezra = 80; // = midterms {danielle : 96, thomas : 78, ezra : 80} 객체에서 새로운 프로퍼티를 추가하는 방법

const comment = [
    { username: 'Tom', text: 'lolololol', votes: 9 },
    { username: 'Silky', text: 'hey', votes: 100 }
];
comment[1].text // = 'hey' 객체와 배열을 중첩하여 사용할 수 있으며, 이는 평상시에 자주 사용되는 구조이다.

// --- #루프(반복) ---
for (let i = 1; i <= 10; i++) {
    console.log(i);
}// 1부터 10 까지의 숫자 출력

for (let i = 0; i <= 20; i += 2) {
    console.log(i);
}// 0부터 20까지 숫자 중 짝수 출력

for (let i = 1; i <= 10; i++) {
    console.log(`i is: ${i}`);
    for (let j = 1; j < 4; j++) {
        console.log(`     i is: ${j}`);
    }
}// 중첩 반복문 이중 for문, i is: 1  j is: 1 j is: 2 j is: 3 출력. 바깥 반복문이 1번 반복될 때, 안쪽 반복문은 모든 과정이 반복된다.

for (let i = 0; i < seatingChart.length; i++) {
    const row = seatingChart[i];
    for (let j = 0; j < row.length; j++) {
        console.log(row[j]);
    }
}// = for (let row of seatingChart) {
//           for (let student of row) {
//             console.log(student);
//           }
// } for of 문을 이용한 간편화 for (변수 of 반복 가능한 객체)

const testScore = { kim: 100, hun: 90, eun: 80 };
for (let person in testScore) {
    console.log(`${person} scored ${testScore[person]}`);
}// key 와 value 가 지정된 객체를 반복 시키는 방법 1 for in 문을 이용

Object.keys // [kim, hun, eun]
Object.values // [100, 90, 80]
// 객체를 반복 시키는 방법 2 Object 메서드를 이용

let count = 0;
while (count < 10) {
    console.log(count);
    count++;
}// while문, 0 부터 9 까지 출력

let count2 = 0;
while (count2 < 10) {
    count2++;
    console.log(count2);
}// 1 부터 10 까지 출력

let input = prompt('Hey, say something!');
while (true) {
    input = prompt(input);
    if (input === 'stop') break;
}// break 를 사용한 반복문 탈출, break 문의 조건이 참이 되면 반복문을 빠져나간다.

// ---# 함수 ---
function singSong() {
    console.log('do');
    console.log('re');
    console.log('mi');
}// 함수의 정의, function 함수의 이름 (매개변수) {실행될 코드}
singSong()// 함수의 실행, 함수의 이름()

function rant(message) {
    console.log(message.toUpperCase());
}// 매개변수의 사용
rant('i love u')// 'I LOVE U' 출력

function isSnakeEyes(x, y) {
    if (x === 1 && y === 2) {
        console.log('Snake Eyes!');
    } else {
        console.log('Not Snake Eyes!');
    }
}// 2개의 인수를 받는 함수
isSnakeEyes(1, 1)// 'Snake Eyes!' 출력
isSnakeEyes(1, 4)// 'Not Snake Eyes!' 출력

function add(x, y) {
    if (typeof x !== 'number' || typeof y !== 'number') {
        return false;
    } return x + y;
}// return 키워드를 이용한 출력방법. return 은 단 하나의 값만을 출력한다. return 이 실행되면 그 함수는 종료된다.
add(1, 5)// 6
add(1, 's')// false

let exp = 'blah blah';
function abc() {
    let exp = 'hi';
    return exp
}// 'hi' 출력, 함수 내에서 지정된 변수는 해당 함수 범위 내에서만 유효하다.

let num1 = 1;
if (num1 > 0) {
    const num2 = 200;
    let num3 = 300;
}// 블록 (함수를 제외한 {} 안의 범위를 블록이라고 한다.) 범위 내에서 지정된 변수는 해당 범위 내에서만 유효하다.
console.log(num1);// 1 출력
console.log(num2);// undefined
console.log(num3);// undefined

function out() {
    let hero = 'batman';
    function inner() {
        let badGuy = 'joker';
        console.log(`Please help us, ${hero}`);
    }
    inner();
}// 중첩된 함수나 내부 함수는 상위 몇 레벨 위에 있든 상관없이 부모 함수나 조부모 함수 등에서 선언된 변수에 액세스 할 수 있다.
// 단, 부모 함수에서 자녀 함수에서 선언된 변수를 액세스 하는것은 불가능하다.

const add = function (x, y) {
    return x + y;
}// 함수 표현식, 함수를 변수 내에 저장할 수 있다. 해당 코드는 이름 없는 함수를 'add'라는 변수 내에 저장한 것.

function callTwice(func) {
    func();
    func();
}

function rollDie() {
    const roll = Math.floor(Math.random() * 6) + 1
    console.log(roll);
}

callTwice(rollDie); // randomNumber, randomNumber 출력
// 고차함수, 함수를 인수로 받는 함수

function makeBetweenFunc(min, max) {
    return function (num) {
        return num >= min && num <= max;
    }
}// 함수를 리턴하는 함수
const isChild = makeBetweenFunc(10, 20)
isChild(10)// true
isChild(21)// false

const myMath = {
    PI: 3.14,
    square(num) {
        return num * num;
    },
    cube(num) {
        return num ** 3;
    }
}
myMath.cube(2)// 8 출력

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
numbers.forEach(function (el) {
    return el;// 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 출력
})// forEach 메서드, 배열의 각 요소를 한 번씩 출력한다. 최근 for of 의 등장으로 자주 사용되지 않는다.

for (let el of numbers) {
    return el;
}// 위 forEach 메서드와 같은 내용 출력

let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const doubles = nums.map(function (num) {
    return num * 2;
})// map 메서드, forEach 와 같이 배열의 각 요소를 한 번씩 출력하나, 해당 함수의 결과값을 적용한 새로운 배열을 생성한다.

const add = (x, y) => {
    return x + y;
}// 화살표 함수 표현식, 변수에 저장 되어야 하며 '변수 = (조건) => {}' 의 형태를 가진다.
const square2 = x => {
    return x ** 2;
}// 화살표 함수 표현식에서 조건 안의 인수가 하나일 때, 괄호를 사용하지 않을 수 있다.
const rollDi2 = () => {
    Math.floor(Math.random() * 6) + 1;
}// 조건 안에 인수가 2개 이상이거나 없을 경우는 괄호를 생략할 수 없다.

const rollDie3 = () => (
    //let msg = 'abcd' 오류, 화살표 함수의 암시적 반환은 함수 내에 값이 유효한 표현식 단 하나만 들어갈 수 있다.
    Math.floor(Math.random() * 6) + 1
)// 화살표 함수의 암시적 반환, 화살표 함수를 더 간단하게 표현할 수 있으며, '{}' 를 '()'로 바꾸고 return 키워드를 제거할 수 있다.
const add2 = (a, b) => a + b// 이와 같이 한 줄로 완성되는 간단한 코드의 경우 '()' 도 생략 가능하다.

console.log('hello !');
setTimeout(() => {
    console.log('...are yoy still there ?');
}, 3000)
console.log('goodbye !');
// setTimeout, 해당 리턴 값을 지정된 시간이 지난 후 출력 되도록 한다. setTimeout(리턴 값, 시간)
// 1. 'hello !' 2. 'goodbye !' 3. '...are you still there ?'(3초 후) 출력

const id = setInterval(() => {
    console.log(Math.random())
}, 2000);
clearInterval(id);
// serInterval, setTimeout과 비슷하나 해당 초 마다 리턴 값을 반복 출력한다. 2초 마다 Math.random 값 출력.
// setInterval 을 변수에 지정하고, clearInterval 로 해당 변수를 실행하여 setInterval 을 종료할 수 있다.

let value = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let val2 = value.filter(n => n % 2 === 0);// 2, 4, 6, 8, 10 출력
// filter, 배열.fliter() 해당 배열의 값을 해당 조건으로 필터링한 새로운 배열을 생성한다.

const example = [70, 75, 80, 90, 100];
example.every(score => score >= 70);// true
example.every(score => score >= 75);// false
// every, 해당 배열에서 모든 요소가 해당 조건을 만족시키는지 판별하여 하나라도 false 일 경우 false 를 출력한다.

const example2 = [70, 65, 60, 50, 10];
example2.some(score => score >= 70);// true
// some, every 와 비슷하나 해당 배열에서 단 하나의 요소가 해당 조건을 만족시키면 true 를 출력한다.

const prices = [100, 200, 123, 1234, 840];
const totalPrice = prices.reduce((total, price) => {
    return total + price;
})// reduce 를 이용한 배열 요소의 전체 합계 값 구하기.
const minPrice = prices.reduce((min, price) => {
    if (min > price) {
        return price;
    }
    return min;
})// reduce 를 이용한 배열 요소의 최소값 찾기.
// reduce 의 콜백 함수에는 필히 2개의 매개변수가 필요하다.
const evens = [2, 4, 6, 8];
evens.reduce((sum, num) => sum + num, 100);// 120 출력, reduce 는 2번째 인수를 부여함으로서 해당 인수를 reduce의 초기값 으로 지정할 수 있다.

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function sol(arr) {
    arr.reduce((acc, cur) => {
        acc.push(cur % 2 ? '홀수' : '짝수');// 삼항연산자, if 문을 간략화 한 것으로 '조건 ? 참 : 거짓' 의 형태로 작성한다.
    }, [])
    return acc;
}//reduce 를 이용한 짝수, 홀수 출력
// reduce 의 초기값을 []로 지정함으로서 acc의 첫 값은 빈 배열, cur의 첫 값은 arr 배열의 첫 요소인 1이 된다.

const elements = ['Fire', 'Air', 'Water'];
console.log(elements.join());
// Expected output: "Fire,Air,Water"
console.log(elements.join(''));
// Expected output: "FireAirWater"
console.log(elements.join('-'));
// Expected output: "Fire-Air-Water"
// join(), 배열의 모든 요소를 하나의 문자열로 만들어준다.
// arr.join([separator])의 형태로 작성하며 separator의 값이 공백일 경우 , 로 빈문자열 ''로 지정할 경우 요소들 사이에 아무런 문자 없이 출력.

filter
includes
repeat
Math.max
Math.min
reverse
replace
replaceAll
//[... asdasd]
Array.fill
forEach

// ---# DOM 객체 선택---
document.getElementById('id명'); // 문서 내 해당 id를 가진 요소 선택

document.getElementsByTagName('tag명'); // 문서 내 모든 해당 태그 요소 선택

document.getElementsByClassName('class명'); // 문서 내 모든 해당 class를 가진 요소 선택

document.querySelector('태그 or #id or .class'); // tag, class, id를 가진 요소를 선택할 수 있다. css와 같이 #id, .class로 입력
document.querySelector('.class:nth-of-type(n)'); // css와 같이 nth-of-type을 이용하여 n번째 요소를 선택할 수 있다.
// document.querySelector('a[title = 'titleName']') 과 같은 형태로 해당 title or name을 가진 요소를 선택할 수 있다.

document.querySelectorAll('태그 or #id or .class'); // querySelector와 같은 원리로 사용하며, 일치하는 모든 요소를 가져온다.

// ---# DOM 텍스트 변경---
document.querySelector('태그 or #id or .class').innerText; // querySelctor로 가져온 요소의 Text 컨텐츠를 가져온다. .innerText = 'changeText' 의 형태로 텍스트를 변경할 수 있다.

document.querySelector('태그 or #id or .class').textContent; // querySelctor로 가져온 요소의 모든 컨텐츠 요소를 가져온다. innerText와 같은 형태로 컨텐츠를 변경할 수 있다.

document.querySelector('태그 or #id or .class').innerHTML; // querySelctor로 가져온 요소의 모든 요소를 가져온다. 해당 컨텐츠에 적용된 tag 등 .. 물론 컨텐츠를 변경할 수 있다.

// ---# DOM 속성 변경---
document.querySelector('태그 or #id or .class').속성; // querySelector로 요소의 속성에 직접 액세스하는 방법
document.querySelector('태그 or #id or .class').getAttribute('속성'); // querySelector로 요소의 속성에 액세스하는 방법2
document.querySelector('태그 or #id or .class').setAttribute('속성', '바꿀 내용'); // setAttribute를 이용하여 속성 값을 변경 or 추가할 수 있다.

// ---# DOM 스타일 변경---
document.querySelector('태그 or #id or .class').style.color = 'red'; // .style을 이용하여 querySelector로 가져온 요소의 스타일을 변경할 수 있다. 하지만 인라인 스타일로 적용되기 때문에 선호되지 않는다.

document.querySelector('태그 or #id or .class').classList.add('css class명'); // classList.add를 이용한 class 추가
document.querySelector('태그 or #id or .class').classList.remove('css class명'); // classList.remove를 이용한 class 삭제
document.querySelector('태그 or #id or .class').classList.toggle('css class명'); // classList.toggle을 이용한 class 적용, 미적용

// ---# DOM 계층 이동---
document.querySelector('태그 or #id or .class').parentElement; // 부모요소 접근
document.querySelector('태그 or #id or .class').children; // 자식요소 접근
document.querySelector('태그 or #id or .class').nextSibling, previousSibling; // 다음 형제'노드', 이전 형제'노드' 접근
document.querySelector('태그 or #id or .class').nextElementSibling, previousElementSibling; // 다음 형제'요소', 이전 형제'요소' 접근

// ---# DOM 요소 생성---
document.createElement('요소'); // 새로운 요소 생성
// document.부모요소.appendChild(추가할 요소); // 부모요소의 마지막 자식요소의 다음 자리에 요소 추가. document.appendChild('부모 요소', '추가할 요소') 의 형태로도 사용 가능

// 부모요소.removeChild(삭제할 자식요소) // 부모요소에 접근하여 해당 자식요소를 삭제하는 방법
해당요소.remove() // 해당 요소를 바로 삭제하는 방법

// ---#DOM 이벤트 ---
// <button onclick = "alert('You clicked me!')">Click me!</button> dom 이벤트를 적용하는 방법1, html 요소에 인라인 이벤트 직접 적용하기 (선호x)

// <button id = 'btn'>Click me!</button>
const btn = document.querySelector('#btn');
btn.onmouseenter = function () {
    console.log('Dont touch me!');
} // dom 이벤트를 적용하는 방법2, 해당 요소를 querySelector를 통해 가져온 후 이벤트가 실행되는 함수 적용

const btn2 = document.querySelector('#btn2');
btn2.addEventListener('이벤트', () => {
    conslole.log('You clicked the button');
}) // dom 이벤트를 적용하는 방법3, addEventListener 사용. 가장 많이 사용되는 방법
// 장점1, 콜백이 하나 이상일 경우 모두 실행하는게 가능하다. 장점2, 다양한 옵션을 추가할 수 있어 유연성이 좋다.

preventDefault() // 해당 요소가 가지고 있는 기본 속성을 정지시킨다.

stopPropagation() // 이벤트 버블링 정지

// ---#동기, 비동기와 WEB API ---

// 1. 자바스크립트는 단일 스레드이다.
// 2. 콜 스택에 쌓인 함수를 순차적으로 실행한다.
// 3. 사용자가 비동기적 요청을 하게되면 JS는 브라우저의 Web API에 이를 요청 -> 
// 사용자가 요청한 시간이 지나면 Web API는 JS 콜 스택에 이를 보내주고
// JS는 이를 이어받아 적절한 코드를 실행한다.


// Js에서 비동기를 처리하는 방법 3가지, 1.콜백함수 2.Promise 3.Async / Await

// ---# 1.콜백함수 (함수를 인자 호출하는 함수) ---
const fakeRequestCallback = (요청, success, failure) => { // 요청과 성공시 실행할 함수, 실패시 실행할 함수를 매개변수로 받는다.
    const delay = Math.floor(Math.random() * 4500) + 500;
    setTimeout(() => {
        if (delay > 4000) {
            failure('Connection Timeout :(')
        } else {
            success(`Here is your fake data from ${요청}`)
        }
    }, delay)
};

fakeRequestCallback(요청1,
    function (response) {
        console.log("IT WORKED!!!!")
        console.log(response)
        fakeRequestCallback(요청2,
            function (response) {
                console.log("IT WORKED AGAIN!!!!")
                console.log(response)
                fakeRequestCallback('요청3',
                    function (response) {
                        console.log("IT WORKED AGAIN (요청3)!!!!")
                        console.log(response)
                    },
                    function (err) {
                        console.log("ERROR (요청3)!!!", err)
                    })
            },
            function (err) {
                console.log("ERROR (요청2)!!!", err)
            })
    }, function (err) {
        console.log("ERROR!!!", err)
    })
// 요청이 많아짐에 따라 중첩도 증가한다. 따라서 promise 함수를 사용하면 편리하다.

// ---# 2.Promise ---
new Promise((resolve, reject) => {
    resolve();
});
// Promise 객체 생성 구문 (resolve, reject) 를 매개변수로 받으며, 요청 성공시 resolve, 실패시 reject를 반환한다.


const fakeRequest = (url) => {
    new Promise((resolve, reject) => {
        const rand = Math.random();
        setTimeout(() => {
            if (rand < 0.7) {
                resolve('YOUR DATA HERE');
            }
            reject('Error');
        }, 1000)
    })
}

fakeRequest('/dogs/1')
    .then((data) => { // .then 메서드를 이용하여 resolve를 반환
        console.log('DONE WITH REQUEST!');
        console.log('data is:', data)
    })
    .catch((err) => { // .catch 메서드를 이용하여 reject 반환
        console.log('OH NO!', err)
    })

// ---#ASYNC ---

async function test() {
    return console.log('test');
}
// async 함수 구문, function 앞에 'async'를 붙인다. async 함수는 자동으로 Promise를 생성 및 반환한다.

const fakeRequestPromise = (요청) => {
    return new Promise((resolve, reject) => {
        const delay = Math.floor(Math.random() * (4500)) + 500;
        setTimeout(() => {
            if (delay > 4000) {
                reject('Connection Timeout :(')
            } else {
                resolve(`Here is your fake data from ${요청}`)
            }
        }, delay)
    })
};

async function makeTwoRequests() {
    let data1 = await fakeRequestPromise('/page1'); // await 키워드를 이용한 promise 객체 반환.
    console.log(data1);                             // await는 promise 객체가 완료될 때 까지 기다리며, resolve된 값을 반환한다.
}

async function makeTwoRequests() {
    try {
        let data1 = await fakeRequestPromise('/page1');
        console.log(data1);
        let data2 = await fakeRequestPromise('/page2');
        console.log(data2);
    } catch (e) {
        console.log('CAUGHT AN ERROR!')
        console.log('erroe is:', e)
    }
};
// async 함수에서의 오류처리, try / catch 메서드를 사용하여 오류를 잡아낼 수 있다.
// try 내 구문에서 요청이 실패할 시, catch가 오류를 잡아 반환한다.

// ---#fetch API ---
// ---#axios API ---

// ---#class와 new ---

class Color { // class 구문을 사용할 땐 클래스명을 대문자로 시작하는게 일반적이다.
    constructor(r, g, b, name) { // class 내에서는 반드시 constructor(실행자)를 작성해야한다.
        // constructor는 새로운 인스턴스를 인스턴스화 할 때 마다 즉시 실행된다.
        this.r = r;
        this.g = g;
        this.b = b; // constructor 내에서는 일반적으로 this를 액세스하며, 이들은 반환 받을 객체에 속성으로 추가된다.(자동으로 새로운 객체를 참조한다.)
        this.name = name;
    }
    innerRGB() {
        const { r, g, b } = this;
        return `${r}, ${g}, ${b}`;
    }
    rgb() {
        return `rgb(${this.innerRGB()})`; // red.rgb() =  return rgb(255, 67, 89);
    }
    rgba(a = 1.0) {
        return `rgba(${this.innerRGB()}, ${a})`; // red.rgba(0.4) =  return rgb(255, 67, 89, 0.4);
    }
    hex() {
        const { r, g, b } = this;
        return (
            '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)
        )
    } // class 내에서 새로운 메서드를 정의할 수 있다.
}


const red = new Color(255, 67, 89, 'tomato'); // new 키워드를 통해 class를 호출한다.


// --- class 상속과 super 키워드 ---

class Pet {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    eat() {
        return `${this.name} is eating!`;
    }
}


class Cat extends Pet { // extends 키워드를 통해 class를 확장시킬 수 있다. 이 예제에서는 Pet class가 Cat, Dog class의 부모 class가 된다.
    constructor(name, age, livesLeft = 10) {
        super(name, age); // super 키워드를 사용하여 super class의 항목을 참조할 수 있다. 이 예제에서는 확장시키는 class, 즉 Pet을 참조한다.
        this.livesLeft = livesLeft;
    }

    meow() { // class가 상속되면 constructor를 따로 생성하지 않아도 실행이 가능하며, 부모 class의 메서드도 사용할 수 있다.
        return 'MEOWWW!';
    }
}

class Dog extends Pet {
    bark() {
        return 'WOOFF!'
    }
};