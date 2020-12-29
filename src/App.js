
import { Header } from './components/header/header.component';
import { HeaderBlank } from './components/header/header-blank.component';

import { PhotoList } from './components/photo-list/photo-list.component';

// import logo from './logo.svg';
// import './App.css';

export function App() {
  return (
    <>
      <Header/>
      <HeaderBlank/>
      <div className="body container">
        <PhotoList/>
      </div>
    </>
  );
}

export default App;
