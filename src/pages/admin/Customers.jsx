import Sidebar from '../../components/Sidebar/Sidebar.tsx';
import { ChakraProvider } from '@chakra-ui/react';

function Customers() {
    return (
    <div className="Customers">
    <ChakraProvider>
        <Sidebar/>
    </ChakraProvider>
    </div>
    );
}

export default Customers;