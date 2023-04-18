import Table from 'react-bootstrap/Table';

function Tables({data}) {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>id</th>
          <th>title</th>
          <th>price</th>
          <th>description</th>
        </tr>
      </thead>
      <tbody>
        {
            data.map((datashow)=>
        <tr>
          <td>{datashow.id}</td>
          <td>{datashow.title}</td>
          <td>{datashow.price}</td>
          <td>{datashow.description}</td>
        </tr>
            
        )}
        
       
      </tbody>
    </Table>
  );
}

export default Tables;