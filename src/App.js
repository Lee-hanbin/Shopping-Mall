import data from './data';
import { createContext, lazy, Suspense, useState } from 'react';
import { Routes, Route, Outlet } from 'react-router-dom';

// import DetailPage from './routes/Detail';
// import Cart from './routes/Cart';
// import Home from './routes/Home';
// import About from './routes/About';
// import Event from './routes/Event';
// import Watch from './routes/Watch';

import i1 from './img/shopping1.png';
import i2 from './img/shopping2.png';
import i3 from './img/shopping3.png';
import i4 from './img/shopping4.png';
import i5 from './img/shopping5.png';
import i6 from './img/shopping6.png';

const Cart = lazy(() => import('./routes/Cart'));
const Home = lazy(() => import('./routes/Home'));
const About = lazy(() => import('./routes/About'));
const Event = lazy(() => import('./routes/Event'));
const Watch = lazy(() => import('./routes/Watch'));
const DetailPage = lazy(() => import('./routes/Detail'));


// context (보관함) 를 만들어 줌
export let Context1 = createContext()


function App() {
  // Context API 연습
  let [store, setStore] = useState([10, 11, 12]);

  let [shoes, setShoes] = useState(data)
  let [image, setImage] = useState([i1, i2, i3, i4, i5, i6])

  return (  
    <Suspense fallback={<div>로딩중</div>}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/watched" element={<Watch />}></Route>
        <Route 
          path={'/detail/:id'}
          element={
            // Context1로 감싸서 Props -> props -> .. 대신 한번에 사용가능
            <Context1.Provider value={{store}}>
              <DetailPage shoes={shoes} image={image} />
            </Context1.Provider>
          }
        />
        <Route path="/cart" element={<Cart />}></Route>
        <Route path="/about" element={<About />}>
          <Route path="member" element={<div>요 멤버쓰</div>} />
          <Route path="location" element={<div>요 위치쓰</div>} />
        </Route>
        <Route path="/event" element={<Event />}>
          <Route path="one" element={<div>첫 주문시 양배추즙 서비스</div>} />
          <Route path="two" element={<div>생일기념 쿠폰받기</div>} />
        </Route>
        <Route path="*" element={<div>없는 페이지롱</div>} />

      </Routes>
    </Suspense>
  );
}


export default App;
