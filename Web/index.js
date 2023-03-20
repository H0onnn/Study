// ---#동기, 비동기와 WEB API ---

// 1. 자바스크립트는 단일 스레드이다. (한 번에 한 줄의 코드만 실행한다.)
// 2. 콜 스택에 쌓인 함수를 순차적으로 실행한다.
// 3. 사용자가 비동기적 요청을 하게되면 JS는 브라우저의 Web API에 이를 요청 -> 
// 사용자가 요청한 시간이 지나면 Web API는 JS 콜 스택에 이를 보내주고
// JS는 이를 이어받아 적절한 코드를 실행한다.

// 대표적인 API 함수 setTimeout()





document.body.style.backgroundColor = 'red';
document.body.style.backgroundColor = 'orange';


// setTimeout(() => document.body.style.backgroundColor = 'red', 1000);
// setTimeout(() => document.body.style.backgroundColor = 'orange', 1000);






































// setTimeout 중첩을 이용한 무지개 만들기, 요청이 많아짐에 따라 중첩도 증가한다. 따라서 promise 함수를 사용하면 편리하다.

// setTimeout(() => {
//     document.body.style.backgroundColor = 'red'
//     setTimeout(() => {
//         document.body.style.backgroundColor = 'orange'
//         setTimeout(() => {
//             document.body.style.backgroundColor = 'yellow'
//             setTimeout(() => {
//                 document.body.style.backgroundColor = 'green'
//                 setTimeout(() => {
//                     document.body.style.backgroundColor = 'blue'
//                     setTimeout(() => {
//                         document.body.style.backgroundColor = 'navy'
//                         setTimeout(() => {
//                             document.body.style.backgroundColor = 'purple'
//                         }, 1000)
//                     }, 1000)
//                 }, 1000)
//             }, 1000)
//         }, 1000)
//     }, 1000)
// }, 1000)


// Promise ? 어떠한 동기, 비동기 연산이 최종적으로 완료 혹은 성공했는지, 실패했는지 알려주는 역할을 하는 객체

// ex) 엄마 사탕 사주세요.그래 저녁에 야채도 안남기고 다 먹고 설거지도 하고 말 잘들으면 내일 사탕 가게에 데려가주마. => 이렇듯 Promise는 값이나 오류에 대한 최종 약속.
// 좋던 나쁘던, 무언가의 최종 결과물을 출력.