import React from 'react';
import { Route, BrowserRouter, Routes } from  'react-router-dom'
import { Dashbord } from './pages/dashbord'
import { RegisterProducts } from './pages/registerProducts'
import { UpdateProducts } from './pages/update'
import { ProviderItemContext } from './hooks/useItemOfList'

const _Route:React.FC=()=> {
  return (
     <BrowserRouter>
        <ProviderItemContext>
          <Routes>
             <Route path="/" element={<Dashbord />}/>
             <Route path="/create" element={<RegisterProducts />}/>
             <Route path="/edit/:id/*" element={<UpdateProducts />}/>
         </Routes>
        </ProviderItemContext>
         
     </BrowserRouter>
  );
}

export default _Route;
