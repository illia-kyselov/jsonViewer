import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store/store';
import JsonViewer from './components/JsonViewer';

const App = () => {
    return (
        <Provider store={store}>
            <Router>
                <Routes>
                    <Route path="/*" element={<JsonViewer />} />
                </Routes>
            </Router>
        </Provider>
    );
};

export default App;
