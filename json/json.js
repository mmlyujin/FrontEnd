/*
    1. web
     -server : 서비스 제공자 - naver, 게임서버 - 여러 사람이 사용
       - URI : domain, localhost 시작하고
       - PORT : 통로(5000 - 통로 이름이 5000이라는 뜻)
       - Client가 정보를 요청(request,req) , Server 가 요청한 정보를 처리 (response,res)

     -Client : 서비스 사용자 - 사용자 - 혼자 사용
      -C:\, D:\ 저장위치

    2.url 주소
     - localhost, domain, c:\, d:\ -> 절대경로
     - / -> 상대경로


     **객체,배열 -> 하나씩 번거로우니깐 뭉쳐 보낼때 사용
    3.json : Javascript Object(객체) Notation
      - {회원 1}
      - {Key:value}
        "별명" : 값
        "변수" : 값
        ex) const user = {
            "username" : "홍길동",
            "password" : "12345",
            "age" : 20,
            "isActive" : false,
            "introduce" : null,
            };


      - 회원이 여러명일 때
       -[{회원1},{회원2},{회원3}]
       
       ex) const users = [
        {
            "userid" : "busanit",
            "age" : 20
        },
        {
            "userid" : "seoulit",
            "age" : 25
        },
        {
            "userid" : "jejuit",
            "age" : 30
        }
      ];

    4.json 사용하는 이유 : 인터넷으로 데이터를 전송하고 받을 때 json
      -통신할 때 규칙(프로그래밍이 아니다.)

      - 사용자 -> 데이터 전송 -> (json변환) -> 서버
                                 Header값에 json을 설정해서 보냄
                                 (COntent-Type/application.json)
                                 JSON.stringify();으로 변환

      - 사용자 <- 데이터 전송 <- (json변환) <- 서버
                                 JSON.parse();

--------------------------------------------------------------------------
    *****Node.js : Server Javascript
    사용자 javascript 프로그래밍 -> (json파일로 변환해서) -> 서버로 전송
            users.js                   users.json

    사용자 javascript 프로그래밍 <- (json파일로 변환해서) <- 서버로 전송
            users.js                   users.json

    5. 연결정보 : html(웹페이지)는 기본적으로 페이지가 바뀌면 기존 정보가 사라짐
       -session : 연결정보가 server 저장
        -보안을 요하는 정보
        -속도가 느릴 수 있다.

       -cookie : 연결정보가 client가 저장(보안x)
        -아이디 저장,오늘 하루 이 창 띄우지 않음
        -속도가 session 보다 빠름.
 */
