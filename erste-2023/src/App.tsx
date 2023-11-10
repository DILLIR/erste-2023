import Layout from './components/Layout';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';

function App() {
    // ApiInstance.get('providers').then((data) => {
    //     console.log(data);
    // });

    return (
        <Routes>
            <Route path='/' element={<Layout />}>
                <Route index element={<HomePage />} />
            </Route>
        </Routes>
    );
}

export default App;
