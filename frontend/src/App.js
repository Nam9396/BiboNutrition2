import { Routes, Route, HashRouter } from 'react-router-dom';
import Main from './1-screen/1-main';
import AddFood from './2-screen/2-addFood';
import FoodDetail from './2-screen/2-foodDetail';
import Header from './basic-screen/header';

function App() {
  return (
    <HashRouter className="App">
      <Header />
      {/* <Menu /> */}
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/addFood' element={<AddFood />} />
        <Route path='/foodDetail' element={<FoodDetail />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
