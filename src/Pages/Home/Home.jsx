import { useState, React} from 'react';
import Table from '../../components/Table/Table'  // new
import {getData, columns} from "../../db"

const Home = () => {
    const [data, setdata] = useState(getData);
  return (
    <div className='container mx-auto'>
        <Table columns={columns} data={data} setdata={setdata} />
    </div>
  )
}

export default Home