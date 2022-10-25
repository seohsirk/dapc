import { useDispatch, useSelector } from 'react-redux';
import { increase } from "./../store.js";

function Report() {
  let item = useSelector((state) => {
    return state.item;
  });
  let dispatch = useDispatch();

  return (
    <div className='report'>

      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>제목</th>
            <th>가격</th>
          </tr>
        </thead>
        <tbody>
          {
            item.map( e => 
            <tr key={e.article_id}>
              <td>{e.article_id}</td>
              <td>{e.title}</td>
              <td>{e.price}</td>
              <td>
                <button onClick={() => {
                  dispatch(increase(e.article_id))
                }}>
                  +
                </button>
              </td>
            </tr>
            )
          }
        </tbody>
      </table>
    </div>
  )
}

export default Report;