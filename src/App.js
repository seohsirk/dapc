// import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import data from './data/data.js';
import {Routes, Route, Link} from 'react-router-dom';
import defaultImg from './img/default-img.jpg';

function App() {

  let [items] = useState(data);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element = {
          <>
          <div className="navbar">
            <Link to="/">
              <div className="logo">당근 마켓, 애플 시세 검색기</div>
            </Link>
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

        <Route path="/detail" element= {
          <div>상세페이지</div>
        } />
        <Route />

      </Routes>
    </div>
  );
}

function Item(props) {
  return (
    <div className="item" key={props.item.article_id}>
      <Link to='' style={{textDecoration:'none'}}>
        <img className="item-img" src={defaultImg} />
        <div className="title">{props.item.title}</div>
        <div className="written-date">{props.item.written_date}</div>
        <div className="price">{props.item.price}</div>
        <div className="content">{props.item.content}</div>
      </Link>
    </div>
    
  )
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