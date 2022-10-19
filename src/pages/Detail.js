import '../App.css';
import back from '../images/back.png'
import {useNavigate, useParams} from 'react-router-dom';
import { useEffect, useState } from 'react';

function Detail(props) {

  let [count, setCount] = useState(0);
  let navigate = useNavigate();
  let { id } = useParams();
  let item = props.items.find((x) => {
    return x.article_id == id
  })
  let [alert, setAlert] = useState(true);

  useEffect(() => {
    setTimeout(() => { setAlert(false)}, 2000)
  }, [count])


  return (
    <div className='detail'>
      {
        alert == true
        ? <div className="alert" style={{backgroundColor:'yellow', height: '60px'}}>
          2초이내 구매시 할인
        </div>
        : null
      }
      
      <button onClick={() => { setCount(count+1) }}>버튼</button>

      <div className="header">
        <img className='btn-back' onClick={() => {navigate(-1)}} src={back} />
        <div className='title'>
          {item.title}
        </div>
      </div>
      
      <div className='content-wrapper'>
        <div className='written-date'>
          <span>{item.written_date}</span>&nbsp;&nbsp;|&nbsp;&nbsp;<span>{item.region}</span>
        </div>
        <div className='price'>
          {item.price}
        </div>
        <div className='content'>
          {item.content}
        </div>
      </div>
    </div>
  )
}

export default Detail;