import Splitscreen from '../components/Login/Login.jsx';
import { ChakraProvider } from '@chakra-ui/react';

function Login() {
    return (
    <div className="Login">
    <ChakraProvider>
        <Splitscreen/>
    </ChakraProvider>
    </div>
    );
}

export default Login;