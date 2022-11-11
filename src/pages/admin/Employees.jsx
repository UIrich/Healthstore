import Sidebar from '../../components/Sidebar/Sidebar.tsx';
import { ChakraProvider } from '@chakra-ui/react';

function Employees() {
    return (
    <div className="Employees">
    <ChakraProvider>
        <Sidebar/>
    </ChakraProvider>
    </div>
    );
}

export default Employees;