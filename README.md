# <span style='background-color: #d3d3d3; color: #000'>Redux</span>를 사용해서 간단한 <span style='background-color: #d3d3d3; color: #000'>Card App</span>을 만들기

https://gazero-marvel.netlify.app/

## 사용스택 및 라이브러리<span style='background-color: #d3d3d3; color: #000'>(React)</span>
~~~
npx create-react-app card-app

npm install react-redux redux
npm install react-router-dom
npm install styled-components

npm start
~~~
- <span style='color: #d84339'>react-redux & redux</span>
- <span style='color: #d84339'>react-router-dom</span>
- <span style='color: #d84339'>styled-components</span>
## 🖥 화면구성(엄청 간단함 주의)
### ✅ 메인
![](https://velog.velcdn.com/images/gazero_/post/2170d864-5916-4295-8884-ac0656c527c8/image.png)

1. 상단바
2. 카드섹션
### ✅ 디테일 페이지
![](https://velog.velcdn.com/images/gazero_/post/a3b2d2f4-038c-4f4b-b52d-714f257c16ba/image.png)
![](https://velog.velcdn.com/images/gazero_/post/7d7c5f6a-1a0a-44ac-bdb7-aa60fb232037/image.png)

1. 상단바(상동)
2. 디테일 컨텐츠 섹션
 2-1. Title
 2-2. Video
 2-3. Description
 2-4. Back Button
 
## <span style='background-color: #d3d3d3; color: #000'>리덕스와 리액트 라우터 돔</span>을 사용함
#### 1. CreateStore
- 이번에는 별도의 파일을 만들어서 상태를 관리함
- **contents.js 파일에 CreateStore를 import**해줌
~~~js
import { createStore } from "redux";
~~~
#### 2. reducer 함수 만들기
~~~js
function reducer(state, action) {
  return { contents };
}
~~~
- 현재상태와 action을 담았음
- 그리고 contents로 리턴함
- action의 <span style='background-color: #ff5c55; color: #000'>_짝꿍 type이 없음_</span> 왜? **수정이나 삭제 기능을 하지 않을 것이기 때문(= useDispatch 안쓰겠다)**
#### 3. 저장고에 넣어둠
~~~js
export const store = createStore(reducer);
~~~
#### 4. contents가 뭐길래 reducer함수가 리턴하는 거지?
~~~js
 const contents = [ 
   {
    path: "/",
    imagePath: "",
    hoverImagePath: "",
    title: "",
    detail: {
      name: "",
      korName: "",
      videoSrc: "",
      desc: "",
    },
  },
 ]
~~~
- 사용할 데이터가 배열 형태로 담겨있음
- 그러니깐, <span style='background-color: #ff5c55; color: #000'>Redux상태 관리를 이용해서 contents에 있는 상태를 가져다 쓰겠다는 의미</span>
#### 5. Provider로 감싸주기
~~~
import { Provider } from "react-redux";
import { store } from "./utilities/contents";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
~~~
- 다른 자식 컴포넌트들이 다 사용할 수 있도록 가장 상위 컴포넌트인 App컴포넌트를 감싸서 store에 저장고(store)를 담아 넘겨줌

### 🌼리덕스 사용할 준비 끝🌼 리덕스만 끝남. 리액트 라우터 돔 남았음.

#### 6. 리액트 라우터 돔(react-router-dom) import
~~~js
import { BrowserRouter, Route, Routes } from "react-router-dom";
~~~
- _**화면이 실제로 뿌려지는 컴포넌트에 감싸줌**_(여기에서는 App.js)
~~~
   <BrowserRouter>
   	<Routes>
     <Route />
     <Route />
     <Route />
     ....
     <Route />
    </Routes>
   </BrowserRouter>
~~~
- 이런 식으로 감싸줌
- App.js에는 상단바, 카드가 뿌려지는 섹션 두가지로 구분됨
- 하지만 카드를 누르면 각각의 카드마다 개별적으로 상세페이지가 주어진다는 특징이 있음
- 따라서 라우트 될 필요가 없는(_상세페이지에서도 동일한 상단바를 사용하기 때문_) <span style='background-color: #ff5c55; color: #000'>_상단바는 Routes내부에서 제외됨_</span>
~~~js
   <BrowserRouter>
    <상단바 />
   	<Routes>
     <Route 카드1 상세페이지 />
     <Route 카드2 상세페이지/>
     <Route 카드3 상세페이지/>
     ....
     <Route 카드9 상세페이지/>
    </Routes>
   </BrowserRouter>
~~~
- 이런 형태로 만들어 줄 수 있음
- 또한, 카드는 배열 형태로 데이터를 담아둔 contents에 저장되어 있기 때문에 map으로 돌려서 카드를 배열 순서대로 나열해줌
#### ✅ useSelector로 contents의 상태를 받아옴(feat.map)
~~~js
    <BrowserRouter>
      <GlobalStyles />
      <상단바>
      </상단바>
      <Routes>
        {useSelector((state) => state.contents).map((content, idx) => {
          return (
            <Route
              path={content.path}
              key={idx}
              element={<Detail content={content.detail} />}
            />
          );
        })}
        <Route path="/" element={<Cards />} />
      </Routes>
    </BrowserRouter>
~~~
- useSelector를 통해서 상태를 받아오고, 상태의 contents배열을 map으로 돌림
- contents에서는 path, idx를 받아옴
- 그리고 content.detail을 담아서 자식 컴포넌트인 Detail에 넘김

#### <span style='background-color: #f9a828; color: #000'>리액트 라우터 돔을 사용하는 이유?🖐️</span>
- 보통 페이지 주소에 따라 해당페이지로 이동하면 페이지 화면이 로드되면서 html이 뿌려지는 구조
- 페이지 전환 순간에 '번쩍'하는게 있음
- 하지만 라우터 돔을 사용하면?
- SPA에서 렌더링만 됨
- 속도가 훨씬 빠르고, 여러개의 주소를 할당할 필요도 없음

#### ✅ Detail 컴포넌트
- useSelector로 저장고에 담긴 데이터를 사용하겠다고 선언
- 디테일 페이지는 데이터가 많이 사용됨
1. detail.name
2. detail.korName
3. detail.viedoSrc
4. detail.desc
- 하지만 모두 content로 받아오기 때문에(_contents가 아닌, content인 이유?_ 부모 컴포넌트에서 넘겨줄때 <span style='background-color: #ff5c55; color: #000'>content.detail</span>을 넘겨받음)
- 경로는 content.detail.name 형태로 받아 와야함
- 뒤로가기 버튼을 위해 useNavigate()를 사용
~~~js
 const navigate = useNavigate();

 <BackButton onClick={() => navigate(-1)}>BACK</BackButton>
~~~
- 뒤로가기 버튼을 누르면 onClick이벤트를 통해 이전 페이지로 이동

#### ✅ Cards 컴포넌트
- 카드를 구성하는 상세 정보들이 담겨있음
- useSelector()를 사용해서 상태를 받아옴
- NavLink를 통해서 각각 카드의 경로를 지정함
~~~js
   <NavLink to='/path' />
~~~
