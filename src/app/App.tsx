import 'bootstrap/dist/css/bootstrap.min.css';
import {
  RouterProvider,
} from "react-router-dom";
import React, { useState } from 'react';
import SessionCache from './shared/cache/SessionCache';
import User from './models/user/user';
import Layout from './shared/layout/Layout';
import router from './core/router/router';
import AuthProvider from './core/providers/authProvider';






export const App = () => {
  const [user, setUser] = useState(SessionCache().get<User>('user'));
  return (
    <AuthProvider userState={{ user, setUser }}>
      <Layout>
        <RouterProvider router={router} />
      </Layout>
    </AuthProvider>

  )
}



