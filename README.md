# board-graphQL-REST-nodejs



## RESTful API



- 유저

|             Resource              | Method | Description                                   |
| :-------------------------------: | :----: | :-------------------------------------------- |
|           /user/:userid           |  GET   | userid에 해당하는 유저 검색                   |
|               /user               |  POST  | user 생성 이름, 이메일, 비밀번호              |
|               /user               |  PUT   | user 수정 / 이름, 이메일, 비밀번호            |
|               /user               | DELETE | user 삭제 / user id                           |
|         /user/list/:page          |  GET   | page에 해당하는 유저 리스트                   |
|  /user/list/post/:userid/:page?   |  GET   | userid가 작성한 page에 해당하는 포스트 리스트 |
| /user/list/comment/:userid/:page? |  GET   | userid가 작성한 page에 해당하는 댓글 리스트   |



- 포스트

|             Resource              | Method | Description                                                  |
| :-------------------------------: | :----: | :----------------------------------------------------------- |
|           /post/:postid           |  GET   | postid에 해당하는 포스트 가져오기                            |
|               /post               |  POST  | 포스트 작성하기 / 작성자, 제목, 내용                         |
|               /post               |  PUT   | postid에 해당하는 포스트 수정 / 작성자, 제목, 내용, 수정시간 |
|               /post               | DELETE | postid에 해당하는 포스트 삭제 / 포스트 id                    |
|         /post/list/:page?         |  GET   | page에 해당하는 포스트 리스트                                |
| /post/list/comment/:postid/:page? |  GET   | postid와 page에 해당하는 댓글 리스트                         |



- 댓글

|   Resource   | Method | Description                            |
| :----------: | :----: | :------------------------------------- |
| /comment/:id |  GET   | 댓글 가져오기                          |
|   /comment   |  POST  | 댓글 작성하기 / 작성자, 내용           |
|   /comment   |  PUT   | 댓글 수정하기 / 작성자, 내용, 수정시간 |
|   /comment   | DELETE | 댓글 삭제 /                            |

