<h1 align="center"> Spplit! </h1>
<p>
  <img alt="Version" src="https://img.shields.io/badge/version-0.1.0-blue.svg?cacheSeconds=2592000" />
</p>

> 9th LikeLion at Hanyang Univ. Hackathon

## 소개
> 모든 업무를 관리하는 비즈니스 플랫폼

비즈니스 어플을 만들기 위해 조사를 하던 중 두가지 니즈를 파악했습니다.
1. 수많은 명함들 중 필요로 하는 명함을 찾는 것이 어렵다.
2. 휴대폰 연락처에 지인들 뿐만 아니라 비즈니스를 위한 연락처까지 담겨있어 워라밸이 보장되지 못하다.

이러한 문제점을 해결하기 위해 '새로운 업무 문화 형성', '일과 일상의 분리'를 목표로 하여 만든 어플로서 <br>
어플 내에서 비즈니스를 위한 연락처 관리 및 업무 약속 잡기라는 최소한의 기능을 구현했습니다.<br><br>
아래 다섯가지 차별점을 중점으로 어플을 만들었습니다.
1. 종이 명함 문화의 전환
명함 이미지 없이 필요한 정보만 있는 깔끔한 UI를 제공함으로서 기존의 종이 명함 문화를 바꿔나갑니다.
2. 개인 정보 보안 강화
QR을 통한 명함 공유와 명함 공유 허용 기능을 결합하여, 제 3자로 인해 본인의 연락 정보가 유출되는 것을 막습니다.
3. 개인 맞춤 명함 분류 및 관리
명함 소유자가 각 명함에 부여한 태그들, 회사, 직책, 만난 장소등의 다양한 정보들을 바탕으로 간편한 검색이 가능합니다.
4. 명함 전달 경험의 변화
내 명함 QR 띄우기, 인식하기, 명함 공유 허용하기의 새롭고 빠른 명함 공유 경험을 선사합니다.
5. 간단한 비즈니스 약속 잡기
비즈니스 약속 시간, 메시지를 입력하여 간단하게 비즈니스 약속을 잡을 수 있습니다.



## TEAM Sweet Factory
- Front-End: [박수경](https://github.com/Sukyeong-hyu) , [홍승한](https://github.com/seunghan-hong) , [손정범](https://github.com/Sonjeongbeom) , [김상효](https://github.com/SH0123)
- Back-End: [김상효](https://github.com/SH0123), [손정범](https://github.com/Sonjeongbeom)


## 사용 기술 스택
### Frontend
- React-Native
- Javascript
- Expo
- [FrontEnd Github - develop branch](https://github.com/spplit/spplit-app-frontend)

### Backend
- Django
- Rest framework
- Python
- AWS Elastic Beanstalk
- [BackEnd Github](https://github.com/SH0123/spplit-backend)



## Spplit App

### [Spplilt! Demo 영상](https://youtu.be/JUi6K2JjuA0https://youtu.be/JUi6K2JjuA0)


## 기능 소개

### 1. [사용자 명함 등록]

- 이름, 직업, 전화번호, 이메일, 개인화 필수 태그를 입력하여 명함 제작
- 멀티 페르소나 시대에 맞게 여러개의 명함 생성 가능 <br>
<div>
  <img src="https://user-images.githubusercontent.com/26588989/143208703-35b5b75d-a60a-42db-94b6-480a6b0d1ea5.png" width=250 >
  <img src="https://user-images.githubusercontent.com/26588989/143208728-dc5fe12b-969e-4667-9c4d-3adf3a855c5f.png" width=250 >
  <img src="https://user-images.githubusercontent.com/26588989/143208775-8fe3fa8c-97c5-476f-afbe-ff61ace1de44.png" width=250 >
</div>


---
### 2. [사용자 명함 QR]

- 각 명함에 알맞은 QR 생성<br>
<div>
  <img src="https://user-images.githubusercontent.com/26588989/143209145-2d6b032e-f295-4b21-8c52-51d8f0ac685d.png" width=250 >
  <img src="https://user-images.githubusercontent.com/26588989/143209157-dda31eac-adc5-428b-bc47-39e0c9bc3aff.png" width=250 >
  <img src="https://user-images.githubusercontent.com/26588989/143211359-5edf3778-0177-43a0-8578-bbe02038644e.png" width=250 >
</div>

---
### 3. [타인의 명함 QR 인식]
##### 사용 module : expo-barcode-scanner

- 명함 QR Scanner를 이용하여 명함 제공 요청
- 명함 제공자가 알림의 명함 요청을 수락함으로 인해 명함 전달 가능<br>
<div>
  <img src="https://user-images.githubusercontent.com/26588989/143217776-5b7df101-7363-49cd-ac94-767490724141.png" width=250 >
  <img src="https://user-images.githubusercontent.com/26588989/143217786-8da6f0bf-cdbd-4b70-a3b1-2d8a65293898.png" width=250 >
  <img src="https://user-images.githubusercontent.com/26588989/143217800-d4813617-c3a4-4481-af4c-d07b1d1a9d18.png" width=250 >
</div>


---

### 4. [명함에 개인 맞춤 메모와 태그 작성]
- 본인이 소지한 명함에 메모, 맞춤 태그등을 작성하여 상대의 특징을 기록해둘 수 있음
- 자주 찾는 명함은 bookmark 표시 가능

<div>
  <img src="https://user-images.githubusercontent.com/26588989/143218246-74bf6332-d1a1-4097-babe-dd87798ac5f7.png" width=250 >
  <img src="https://user-images.githubusercontent.com/26588989/143218256-f73d5767-351c-4785-aa7e-2d6b949238d5.png" width=250 >
</div>

---

### 5. [그룹 분류]
- category 항목을 개인이 변경 가능
- 명함을 적합한 category에 분류 가능<br>

<div>
  <img src="https://user-images.githubusercontent.com/26588989/143218541-bdcc2282-1ed8-4443-83fc-5c771f466c73.png" width=250 >
  <img src="https://user-images.githubusercontent.com/26588989/143218723-143d9b42-16a9-485e-8b58-dfdb00851e48.png" width=250 >
  <img src="https://user-images.githubusercontent.com/26588989/143218732-5bc9fed4-34ef-40a6-a23b-9cd5539b3e02.png" width=250 >
  <img src="https://user-images.githubusercontent.com/26588989/143218748-51a68a01-fe3c-4ee9-9215-bb0df344365f.png" width=250 >
</div>

---

### 6. [다양한 키워드로 명함 검색]
- 메모 내용, 직장등 다양한 정보를 바탕으로 명함 검색
- 각 category에 속한 명함 찾기 가능<br>

<div>
  <img src="https://user-images.githubusercontent.com/26588989/143218981-b33780a5-f633-4639-9197-972303cac4eb.png" width=250 >
  <img src="https://user-images.githubusercontent.com/26588989/143219011-8c63933d-c7e0-4b79-8b02-891554e27f9b.png" width=250 >
  <img src="https://user-images.githubusercontent.com/26588989/143219032-7b29c923-76bb-4d50-9a49-f7b90051158a.png" width=250 >
</div>

---

### 7. [비즈니스 약속 잡기]
- 비즈니스 약속 내용, 날짜 입력만으로 간편한 약속 잡기 가능
- 나에게 온 약속 요청들을 간편하게 관리 가능<br>
<div>
  <img src="https://user-images.githubusercontent.com/26588989/143219122-353401bc-18c4-4116-8ed4-b11732e44402.png" width=250 >
  <img src="https://user-images.githubusercontent.com/26588989/143219141-b1f514ed-9f17-4cb4-8951-d6ffd6410440.png" width=250 >
  <img src="https://user-images.githubusercontent.com/26588989/143219153-b9c94480-ecb8-49c3-ac9c-d59bd25a6ad7.png" width=250 >
  <img src="https://user-images.githubusercontent.com/26588989/143219363-575c9f43-503d-4240-a282-a22388e30e10.png" width=250 >
</div>







