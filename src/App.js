// import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import data from './data/data.js';
import {Routes, Route, useNavigate} from 'react-router-dom';
import axios from 'axios';

import Detail from './pages/Detail.js';
import Item from './components/Item.js'

function App() {

  let [items, setItems] = useState(data);
  let navigate = useNavigate();

  return (
    <div className="App">

      <Routes>
        <Route path="/" element = {
          <>
          <div className="navbar">
            <div className="logo" onClick={() => {navigate('/')}}>당근 마켓, 애플 시세 검색기</div>
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
          <button onClick={()=>{
            // 로딩중UI 띄우기~
            axios.get('https://codingapple1.github.io/shop/data2.json')
            .then((result)=>{ 
              let copy = [...items, ...result.data];
              setItems(copy);
              // 로딩중UI 숨기기~
            })
            .catch(()=>{
              console.log('Fail!')
              // 로딩중UI 숨기기~
            })
          }}>더보기</button>
          </>
        } />

        <Route path="/detail/:id" element= {
          <Detail items={items} />
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