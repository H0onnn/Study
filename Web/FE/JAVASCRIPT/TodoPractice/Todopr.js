let input = prompt('무엇을 하시겠습니까 ?');
const todos = ['오전 8시 기상'];

while (input !== 'Quit' && input !== 'q') {
    if (input === 'New') {
        const newTodo = prompt('어떤 항목을 추가할까요 ?');
        todos.push(newTodo);
        console.log(`${newTodo}가 목록에 추가되었습니다.`);
    } else if (input === 'List') {
        console.log('******************');
        for (i = 0; i < todos.length; i++) {
            console.log(`${i}: ${todos[i]}`);
        }
        console.log('******************');
    } else if (input === 'Delete') {
        const pushIndex = parseInt(prompt('삭제할 인덱스를 입력해주세요.'));
        if (!Number.isNaN(pushIndex)) {
            const deleteValue = todos.splice(pushIndex,1);
            console.log(`${deleteValue}(이)가 삭제되었습니다.`);
        } else {
            console.log('잘못된 인덱스 입니다.');
        }
} input = prompt('무엇을 하시겠습니까 ?');
}
console.log('앱을 종료합니다.');