import { useSelector } from 'react-redux'

function Report(props) {

  let state = useSelector((state)=>{return state});
  console.log(state.item)
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
            state.item.map((e, i)=>
              <tr key={e.article_id}>
                <td>3</td>
                <td>{e.article_id}</td>
                <td>{e.price}</td>
              </tr>
            )
          }
        </tbody>
      </table>
    </div>
  )
  
}

export default Report;