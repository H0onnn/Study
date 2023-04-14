const mongoose = require('mongoose'); // mongoose 모듈 require로 불러오기

main().catch(err => console.log(err)); // mongoose에 연결이 정상적으로 실행되지 않을 경우 오류 처리

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/movieApp'); // MongoDB 기본 port '27017'
    console.log('Connection Open!'); // 정상적으로 연결되면 console 띄우기
    // MongoDB와 연결하는 동안 다른 작업을 수행하기 위해 async를 통해 비동기 처리
    // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/movieApp');` if your database has auth enabled

    const movieSchema = new mongoose.Schema({ // 스키마 객체 생성
        title: String,
        year: Number,
        score: Number,
        rating: String,
    });
    // 스키마란 ? MongoDB 문서의 구조를 정의하는 것.
    // MongoDB에서는 데이터를 문서 단위로 저장하며, 각 문서는 고유한 ID를 가지고있음. 스키마는 이러한 문서의 필드를 정의,
    // 각 필드의 데이터 타입과 유효성 검사를 수행. 데이터베이스에서 유효하지 않은 데이터가 저장되는 것을 방지할 수 있게 함.


    const Movie = mongoose.model('Movie', movieSchema); // 스키마를 기반으로 model 생성.
    // 이 모델은 실제로 데이터베이스에서 작업을 수행하는 객체가 됨.

    const movieInstances = [
        { title: 'Amadeus', year: 1986, score: 9.2, rating: 'R' },
        { title: 'The Shawshank Redemption', year: 1994, score: 9.3, rating: 'R' },
        { title: 'The Godfather', year: 1972, score: 9.2, rating: 'R' },
        { title: 'The Dark Knight', year: 2008, score: 9.0, rating: 'PG-13' },
        { title: 'Pulp Fiction', year: 1994, score: 8.9, rating: 'R' }
    ];
    // --- Create
    // create() 메소드를 사용하여 MongoDB에 문서 삽입
    await Movie.create(movieInstances);

    // --- Find
    // find() 메소드를 사용하여 모든 영화 정보를 가져옴
    const movies = await Movie.find();
    console.log(movies);

    // findOne() 메소드를 사용하여 rating이 'R'인 첫 번째 영화를 가져옴
    const movie = await Movie.findOne({ rating: 'R' });
    console.log(movie);

    // findById() 메소드를 사용하여 ID가 '60b10a647a17e835b48a98f9'인 영화를 가져옴
    const id = '60b10a647a17e835b48a98f9';
    const movieById = await Movie.findById(id);
    console.log(movieById);

    // --- Update
    // updateOne() 메서드를 사용하여 title이 'Amadeus'인 영화의 score 값을 9.5로 변경
    // $set을 사용하여 변경하고자 하는 내용 지정
    const updatedMovie = await Movie.updateOne({ title: 'Amadeus' }, { $set: { score: 9.5 } });
    console.log(updatedMovie);

    // updateMany() 메서드를 사용하여 year가 1994 이전인 모든 영화의 rating 값을 'PG-13'으로 변경
    const updatedMovies = await Movie.updateMany({ year: { $lt: 1994 } }, { $set: { rating: 'PG-13' } });
    console.log(updatedMovies);

    // indByIdAndUpdate() 메서드를 사용하여 ID가 '6084fcb012c1991a710c882a'인 영화의 score 값을 9.5로 변경
    // 세번째 매개변수로 new: true 옵션을 부여하여 업데이트된 문서를 반환 (디폴트 값은 false임)
    const updatedMoviebyID = await Movie.findByIdAndUpdate('6084fcb012c1991a710c882a', { score: 9.5 }, { new: true });
    console.log('Updated Movie:', updatedMoviebyID);

    // findOneAndUpdate() 메서드를 사용하여 'Pulp Fiction'의 year 값을 1995로 변경.
    // findOneAndUpdate의 경우 조건에 맞는 첫 번째 데이터를 찾아 값을 업데이트
    const updatedDocument = await Movie.findOneAndUpdate({ title: 'Pulp Fiction' }, { year: 1995 }, { new: true });
    console.log('Updated Document:', updatedDocument);

    // --- Delete
    // deleteOne() 메서드를 사용하여 rating이 'PG-13'인 첫 번째 영화를 삭제
    const result = await Movie.deleteOne({ rating: 'PG-13' });
    console.log(result);

    // deleteMany() 메서드를 사용하여 score가 9.0 이상인 모든 영화를 삭제
    const result2 = await Movie.deleteMany({ score: { $gte: 9.0 } });
    console.log(result2);

    // 모든 영화 삭제
    await Movie.deleteMany({});

};
