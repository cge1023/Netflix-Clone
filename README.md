# [React] Netflix 개인 프로젝트

## 🖥️ 프로젝트 소개
React 심화학습을 위해 Netflix 개인 클론 프로젝트를 진행하였습니다.
<br>

## 🕰️ 개발 기간
* 22.10.13일 - 22.10.18일

### ⚙️ 개발 환경
- `JavaScript`
- `JSX`
- `React`
- `Redux`
- `React Bootstrap`

## 📌 주요 기능

#### 메인 페이지 
- The Movie Database에서 제공하는 Open API를 사용하였습니다.
- react-multi-carousel 라이브러리를 사용해 메인페이지 뷰를 구성하였습니다.
- 데이터가 도착하기 전에 사용자의 편의를 위해서 로딩 스피너를 띄워주었습니다.
- 영화 카드 마우스 오버 시, 영화의 부가 정보를 표시해주었습니다.

#### Search 페이지
- useSearchParams를 이용해 검색어를 추출하고 해당 검색어를 포함한 영화제목을 가진 영화들을 Search 페이지에 나열해주었습니다.

#### MovieDetail 페이지 
- 메인페이지에서 특정 영화를 선택 시, 해당 영화 디테일을 보여주는 MovieDetail 페이지로 이동 합니다. 
- 페이지 이동 시, 선택된 영화의 정보를 넘겨주기 위하여 navigate의 state 옵션과 useLocation을 사용하였습니다.
- 이 때, ~/movies/:id 형식으로 영화 고유 id를 params로 넘겨줌으로써 영화들을 구분지어 주었습니다.

## 🔗 링크
- **웹 URL** - <a href="http://my-netflix.s3-website.ap-northeast-2.amazonaws.com/">my-netflix 로 이동</a>
