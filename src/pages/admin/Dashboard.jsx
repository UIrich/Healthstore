import Sidebar from '../../components/Sidebar/Sidebar.tsx';
import HeroPanel from '../../components/Dashboard/HeroPanel';
import { ChakraProvider } from '@chakra-ui/react';

function Dashboard() {
    return (
    <div className="Dashboard">
    <ChakraProvider>
        <Sidebar/>
        <HeroPanel/>
    </ChakraProvider>
    </div>
    );
}

export default Dashboard;