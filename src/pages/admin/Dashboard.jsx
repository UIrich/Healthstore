import Sidebar from '../../components/Sidebar/Sidebar.tsx';
import Hero from '../../components/Dashboard/Hero.jsx';
import { ChakraProvider } from '@chakra-ui/react';

function Dashboard() {
    return (
    <div className="Dashboard">
    <ChakraProvider>
        <Sidebar/>
        <Hero/>
    </ChakraProvider>
    </div>
    );
}

export default Dashboard;