import '../App.css';
import back from '../images/back.png'
import {useNavigate, useParams} from 'react-router-dom';
import { useEffect, useState } from 'react';

function Detail(props) {

  let navigate = useNavigate();
  let { id } = useParams();
  let item = props.items.find((x) => {
    return x.article_id == id
  })

  // 열릴때 fade 효과
  let [fade, setFade] = useState('');
  useEffect(() => {
    let a = setTimeout(()=> { setFade('show') }, 10);
    return () => {
      clearTimeout(a);
      setFade('');
    }
  }, []);

  return (
    <div className={`detail hide ${fade}`}>
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