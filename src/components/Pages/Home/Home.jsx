import { useState, React} from 'react';
import Table from '../../Table/Table'  // new
import {getData, columns} from "../../../db"

const Home = (newcontact) => {
    const [data, setdata] = useState(getData);
    if(newcontact)setdata([...data,newcontact]);
  return (
    <div>
        <Table columns={columns} data={data} setdata={setdata} />
    </div>
  )
}

export default Home