// import logo from './logo.svg';
import './App.css';
import { lazy, Suspense, useEffect, useState } from 'react';
// import data from './data/data.js';
import {Routes, Route, useNavigate} from 'react-router-dom';
import axios from 'axios';
import { useSelector } from 'react-redux';

import Item from './components/Item.js';

const Detail = lazy(() => import('./pages/Detail.js'));
const Report = lazy(() => import('./pages/Report.js'));


function App() {
  let item = useSelector((state) => state.item)
  let [items, setItems] = useState(item);
  let navigate = useNavigate();
  let watched = localStorage.getItem('watched')
  watched = JSON.parse(watched);

  // let [isPending, startTransition] = useTransition(); 
  // 자동완성 결과 보여줄 때  성능 향상을 위해 startTransition으로 해당 state 코드를 감싸줌. isPending 로딩중일때 보여줄 문구등

  useEffect(() => {
    if (localStorage.getItem('watched')) {
      return
    } else {
      localStorage.setItem('watched', JSON.stringify( [] ))
    }
  }, [])

  return (
    <div className="App">
      <Suspense fallback={<div>로딩중..</div>}>
        <Routes>
          <Route path="/" element = {
            <>
            <div className="navbar">
              <div className="logo" onClick={() => {navigate('/')}}>당근 마켓, 애플 시세 검색기</div>
            </div>
            <div className='content-wrapper'>
              <div className='chart'>
                시세 그래프 영역이에요.
              </div>
              <div className="list">
                {
                  items.map( (item) => {
                    return (
                      <Item item={item} key={item.article_id}> </Item>
                    )
                  })
                }
              </div>
            </div>
            
            <button onClick={()=>{
              // 로딩중UI 띄우기~
              axios.get('https://codingapple1.github.io/shop/data2.json')
              .then((result) => { 
                let copy = [...items, ...result.data];
                setItems(copy);
                // 로딩중UI 숨기기~
              })
              .catch(()=>{
                console.log('데이터를 가져오는데 실패했습니다.')
                // 로딩중UI 숨기기~
              })

              // Promise.all([axios.get('url1'), axios.get('/url2')])
              // .then(()=>{})


            }}>더보기</button>

            <h2>최근 본 상품</h2>
            <div className="list">
              { 
                watched ? watched.map( (id) => {
                  let i = items.find((x) => {
                    return x.article_id == id
                  });
                  return (
                    // 로컬스토리의 id를 받고
                    // 받은 id를 items의 article_id와 같은 해당 item을 찾아서 반환한다
                    // 반환받은 해당 item을 <Item/> 에 집어 넣는다
                    <Item item={i} key={i.article_id}> </Item>
                  )
                }) : null
              }
            </div>
            </>
          } />

          <Route path="/detail/:id" element= {
              <Detail items={items} />
          } />
          <Route />

          <Route path="/report" element= {
            <Report items={items} />
          } />
          <Route />

          <Route path="*" element
          ={
            <div className="page-not-found">
              <div className="notice">
                <span className='h1'>404</span>
                <span className='description'>안타깝게도<br></br>페이지를 찾을 수 없어요..</span>
              </div>
            </div>
          }></Route>

        </Routes>
      </Suspense>
      
    </div>
  );
}

export default App;



// "article_id": 473709426,
// "title": "0.9kg 맥북 골드 가볍다 빠르다 얇다 미니멀의 최고 노트북 애플 한정판 macbook 256/8gb",
// "region": "성동구 행당동",
// "written_date": "끌올10시간전",
// "manner_temperature": "56.3°C",
// "price": "749,000원",
// "content": 
// "chat_count":