import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Linkspage from './Linkspage';
import Form from './Form';
import Listpage from './Listpage';
import UpdatePage from './UpdatePage';
import Filterpage from './Filterpage';

export default function Routepage() {
  return (
    <div>
      <BrowserRouter>
        <Linkspage />
        <Routes>
          <Route index path="/" element={<Form />} />
          <Route exact path="/list" element={<Listpage />} />
          <Route index path="/update" element={<UpdatePage />} />
          <Route index path="/filter" element={<Filterpage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
