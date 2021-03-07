# 열말잘팀 ( B205 )

### 팀장 : 황호연

### 팀원 : 구진범, 김다윤, 박승범, 성진옥

## 역할

**PM** : 성진옥

- 서비스의 목적 및 방향을 설계
- 화면 정의서 또는 와이어 프레임

**Tech Leader** : 김다윤

- 팀 내 기술적인 방향을 정하는 역할
- Git master ( MR 관리 / 코드리뷰 )

**QA** : 박승범 

- 기획 산출물을 기반으로 테스트 케이스를 작성 및 수행
- JIRA 관리 ( Spring 운명 및 관리 / Task 관리 )
- 테스트 케이스 및 수행 결과

**Developer** : 구진범, 김다윤, 박승범, 성진옥, 황호연

# 주제

## 프로젝트명 : 블록마을

- 목적  : 주어진 문제를 해결하고, 공유하는 과정을 통해서 **사고력과 창의력을 증진**시킬 수 있게 도와주는 온라인 교육 플랫폼이다.
- 목표 :  우리는 사고력 증진 도구로서 블록코딩을 이용할 수 있는 에디터를 제공하며, 각자 제작한 게시물을 공유함으로써 **다양한 생각과 접근의 경험**을 제공한다.

## 기능

- 미니룸 ( 마이페이지 )

⇒ 3가지의 테마 제공

⇒ 내가 구입한 블록 목록, 내가 가진 아이템 목록, 보유한 마일리지

⇒ 내가 작성한 미션, 답안 목록 및 조회, 수정, 삭제

⇒ 내 정보 조회, 수정, 탈퇴

- 블록(미션, 답안)

⇒ 보상 : 마일리지 부여

⇒ 구입한 블록으로만 미션을 풀거나 작품 제작이 가능

⇒ 미션을 만들 떄는 블록 갯수 및 종류 무제한

⇒ 검색필터

⇒ 제목으로 특정 미션 검색

⇒ 유저 이름으로 해당 유저의 미션이나 작품 검색

⇒ 작성순, 댓글순, 좋아요순, 조회수(작품), 참여순(미션)

⇒ 댓글 작성, 수정, 삭제(내 댓글만 삭제)

- 상점(블록)

⇒ 마일리지로 블록 구매

⇒ 구입한 블록은 사용 횟수에 제한이 없음

- 튜토리얼

⇒ blockly/games 그대로 튜토리얼로 가져오기

⇒ 단계별 보상 : 마일리지 부여

- 미션

=> playground 속 이미지 업로드

=> 블록을 사용하여 캐릭터의 움직임을 컨트롤

- 답안

=> 미션의 제목과 설명글을 보고 미션의 내용을 파악

=> 자신이 가진 블록을 가지고 캐릭터를 움직여 미션 답안 제출

- 게시물 내용(BLockly)

⇒ 블록은 구입한 것 범위에서 사용 가능

- 챌린지(기간)(유저가 만든것중에 좋은거 챌린지로 올려도 되겠다.)

⇒ 특정기간에는 하나의 챌린지만 진행됨

⇒ 보상으로 챌린지 만의 희귀 아이템 제공

⇒ 유저가 만드는게 아니라 개발자들이 만들어서 진행 

⇒ 구입한 블록 + 챌린지용 특별 블록으로만 참여 가능

⇒ 여태 진행되었던 챌린지들의 목록(제목, 기간)

- 공지사항 / 서비스 소개

## 기술 스택

### Backend

- Spring Data JPA, Spring Boot, MySQL

### Frontend

- html5, postCss, JavaScript
- React.js
- Redux
- Redux-middleware (redux-actions, redux-pender)

## Code Style ( Google Convention )

https://www.notion.so/Code-Style-Google-Convention-55fd2ffa3da04e29bd18fc9852fa8d25

## 진행상황 공유 노션 링크

https://www.notion.so/f19176b5c4274889aef8a2e559d075d9

## 블록마을 서비스 소개 영상

https://youtu.be/Qh5PvmY4yfQ

## 블록마을 서비스 시연 영상

https://youtu.be/hLIwbMk0OIE
