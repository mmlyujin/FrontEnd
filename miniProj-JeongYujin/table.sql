create table regManage(
regManage_id varchar(20) not null,
regManage_passwd varchar(30) not null,
regManage_name varchar(20) not null,
regManage_email varchar(50) not null,
regManage_regDate date,
board_title varchar(50),
board_content varchar(500),
regManage_idx int auto_increment primary key
);

게시판 테이블 따로 만들면 게시판 작성할 때
아이디,
패스워드, 
게시판 제목, 
게시판 내용 
create table boardManage(
board_id     
)
