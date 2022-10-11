import {useContext, React} from 'react';
import Table from '../../components/Table/Table'  // new
import {columns} from "../../db"
import { ContactsContext } from '../../context/contacts/contactsProvider';

const Home = () => {
    const { contacts, dispatch } = useContext(ContactsContext);
  return (
    <div className='container mx-auto'>
        <Table columns={columns} data={contacts} dispath={dispatch} />
    </div>
  )
}
export default Home