import {
    BrowserRouter,
    Route,
    Routes,
} from 'react-router-dom';
import Login from './pages/Login';
import ScrollToTop from './components/Dashboard/ScrollToTop';
import Dashboard from './pages/admin/Dashboard';
import Customers from './pages/admin/Customers';
import Products from './pages/admin/Products';
import Employees from './pages/admin/Employees';

export function AppRoutes() {
    return (
        <BrowserRouter>
        <ScrollToTop>
            <Routes>
            <Route exact path='/' element={<Login/>} />
            <Route exact path='/dashboard' element={<Dashboard/>} />
            <Route exact path='/dashboard/customers' element={<Customers/>} />
            <Route exact path='/dashboard/products' element={<Products/>} />
            <Route exact path='/dashboard/employees' element={<Employees/>} />
            </Routes>
        </ScrollToTop>
        </BrowserRouter>
    )
}