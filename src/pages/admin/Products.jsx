import Sidebar from '../../components/Sidebar/Sidebar.tsx';
import ProductsPanel from '../../components/Dashboard/ProductsPanel';
import { ChakraProvider } from '@chakra-ui/react';

function Products() {
    return (
    <div className="Products">
    <ChakraProvider>
        <Sidebar/>
        <ProductsPanel/>
    </ChakraProvider>
    </div>
    );
}

export default Products;