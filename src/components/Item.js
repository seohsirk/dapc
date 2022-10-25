import {useNavigate} from 'react-router-dom';
import defaultImg from '../images/default-img.jpg';

function Item(props) {

  let navigate = useNavigate();
  let url = ('./detail/' + props.item.article_id).toString()

  return (
    <div onClick={() => {
        navigate(url);
      }} className="item">
      <img className="item-img" src={defaultImg} />
      <div className="title">{props.item.title}</div>
      <div className="written-date">
        <span>{props.item.written_date}</span>&nbsp;&nbsp;|&nbsp;&nbsp;<span>{props.item.region}</span></div>
      <div className="price">{props.item.price}</div>
      <div className="content">{props.item.content}</div>
    </div>
  )
}

export default Item;