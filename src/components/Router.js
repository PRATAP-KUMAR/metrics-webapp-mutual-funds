import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './HomePage';
import CallAPI from './CallAPI';
import DetailsPage from './DetailsPage';

const Router = () => {
  const [id, setId] = useState('');

  const handleId = (e) => {
    setId(e.target.closest('.nav-link-card').id);
  };

  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage handleId={handleId} />} />
        <Route path="/funding" element={<CallAPI id={id} />} />
        <Route path="/funding/details" element={<DetailsPage />} />
      </Routes>
    </>
  );
};

export default Router;
