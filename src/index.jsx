import React from 'react';
import ReactDOM from 'react-dom/client';
import Layout from './compon/Layout';
import './css/index.css'
import Page from './compon/Page';
import Header from './compon/Header';
import TablePage from './compon/TablePage';
import Card from './compon/Card';
import ShowCard from './compon/ShowCard';

function App(){
  const [table, setTable] = React.useState(false)
  const [card, setCard] = React.useState(false)
  const mass = [0,1,2,3,4,5,6,7,8,9]
  return (
    <Layout>
      <Page>
        <Header endAnimatinon={setTable} />
        {table && <TablePage end={setCard} >
          {
            mass.map(item => <Card key={item} animation={card}/>)
          }
        </TablePage>}
        <ShowCard/>
      </Page>
    </Layout>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
