import Sidebar from '../../components/Sidebar/Sidebar.tsx';
import EmployeesPanel from '../../components/Dashboard/EmployeesPanel';
import { ChakraProvider } from '@chakra-ui/react';

function Employees() {
    return (
    <div className="Employees">
    <ChakraProvider>
        <Sidebar/>
        <EmployeesPanel/>
    </ChakraProvider>
    </div>
    );
}

export default Employees;