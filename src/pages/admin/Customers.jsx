import Sidebar from '../../components/Sidebar/Sidebar.tsx';
import CustomersPanel from '../../components/Dashboard/CustomersPanel';
import { ChakraProvider } from '@chakra-ui/react';

function Customers() {
    return (
    <div className="Customers">
    <ChakraProvider>
        <Sidebar/>
        <CustomersPanel/>
    </ChakraProvider>
    </div>
    );
}

export default Customers;