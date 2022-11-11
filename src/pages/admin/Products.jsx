import Sidebar from '../../components/Sidebar/Sidebar.tsx';
import { ChakraProvider } from '@chakra-ui/react';

function Products() {
    return (
    <div className="Products">
    <ChakraProvider>
        <Sidebar/>
    </ChakraProvider>
    </div>
    );
}

export default Products;