import './components/styles.css'
import React from 'react';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import Notes from './components/Notes.jsx';
import Ndata from './components/notesData.js';


function App() {
  return (
    <div className="App">
      <Header />
        {Ndata.map(info=>
            <Notes 
                key={info.key}
                title={info.title}
                content={info.content}
            />
            )
        }
      <Footer />
    </div>
  );
}

export default App;
