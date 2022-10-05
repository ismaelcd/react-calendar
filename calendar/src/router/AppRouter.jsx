import { Navigate, Route, Routes } from 'react-router-dom';

import { LoginPages } from '../auth';
import { CalendarPages } from '../calendar';

export const AppRouter = () => {

  const authStatus = 'not-authenticated';

  return (
    <Routes>
      {
        (authStatus === 'not-authenticated')
          ? <Route path='/auth/*' element={ <LoginPages /> } />
          : <Route path='/*' element={ <CalendarPages /> } />
      }

      <Route path='/*' element={ <Navigate to="/auth/login" /> } />

    </Routes>
  )
}
