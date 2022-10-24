import { useSelector } from 'react-redux';

function Report() {

  let item = useSelector((state) => {
    return state.item;
  })

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
            // item.map( (e, i) => {
            //   return (
            //     <tr>
            //       <td>{e.article_id}</td>
            //       <td>{e.title}</td>
            //       <td>{e.price}</td>
            //     </tr>
            //   )    
            // })
            item.filter( e => e.title.length > 20).map( e => 
            <tr key={e.article_id}>
              <td>{e.article_id}</td>
              <td>{e.title}</td>
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