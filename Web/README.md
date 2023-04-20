# User Schema

|Content|Field|Type|Required|Unique|Default|
|:------:|:------:|:------:|:------:|:------:|:------:|
|아이디|userId|String|true|true|N/A|
|비밀번호|password|String|true|false|N/A|
|주소|address|String|true|false|N/A|
|이메일|email|String|true|true|N/A|
|전화번호|phoneNumber|String|true|true|N/A|
|관리자 여부|isAdmin|Boolean|false|false|false|
|이름|userName|String|true|false|N/A|
|약관 동의 여부|accepted|Boolean|true|false|N/A|
|적립금 (추가)|point|Number|false|false|N/A|
|생년월일 (추가)|birthDate|String|false|false|N/A|
- 기본적인 회원가입, 로그인 및 로그아웃과 관련된 기능을 구현하기 위한 스키마 입니다.
- 위 스키마를 이용하여 id/pw찾기, 임시 비밀번호 발송 등의 기능을 구현합니다.

# emailVerification Schema

|Content|Field|Type|Required|Unique|Default|
|:------:|:------:|:------:|:------:|:------:|:------:|
|아이디|userId|String|true|true|N/A|
|이메일|email|String|true|true|N/A|
|인증코드 생성|verificationCode|String|true|false|N/A|
|코드 일치 여부|isVerified|Boolean|true|false|N/A|
|코드 생성 시간|createAt|Date|false|false|Date.now()|
|코드 만료 시간|expiresAt|Date|false|false|Date.now()|
- 비밀번호 찾기 기능 구현시 보안성을 위해 사용자에게 이메일 인증 코드 발송 및 검증 구현 스키마 입니다.
- 인증 기능을 구현할지 아직 정해지지 않아 2차 구현 파트에 추가합니다.


# Review Schema

|Content|Field|Type|Required|Unique|Default|
|:------:|:------:|:------:|:------:|:------:|:------:|
|아이디|userId|String|true|true|N/A|
|제품id (제품명)|productId|ObjectId|true|false|N/A|
|내용|text|String|true|false|N/A|
|사진|photo|[String]|false|false|[]|
|인덱스|index|Number|false|false|-1|
|구매 여부|buyCheck|Boolean|true|false|false|
|작성일|createAt|Date|false|false|Date.now()|
|수정일|updateAt|Date|false|false|Date.now()|