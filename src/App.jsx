import React from 'react';
import Card from './Card';
import Sdata from './Sdata';

const App = () => ( 
    <>
    <h1 className="heading">List of Several Entertainment Serials</h1>
    {Sdata.map((val) => (<Card key={val.id} imgsrc={val.imgsrc} title={val.title} name={val.name} link={val.link}/>))
    }
  </>
);

export default App;

