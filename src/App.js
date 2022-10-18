// import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import data from './data/data.js';
import {Routes, Route, Link, useNavigate} from 'react-router-dom';

import Detail from './pages/Detail.js';
import Item from './components/Item.js'

function App() {

  let [items] = useState(data);
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
              items.map( (item, idx) => {
                return (
                  <Item item={item} idx={idx}> </Item>
                )
              })
            }
          </div>
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