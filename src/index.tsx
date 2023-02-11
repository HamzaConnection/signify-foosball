import React from 'react';
import { createRoot } from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import {
  RouterProvider,
} from "react-router-dom";

import router from './app/core/router/router';
import Layout from './app/shared/layout/Layout';

const container = document.getElementById('app');
const root = createRoot(container!)
root.render(
  <React.StrictMode>
    <Layout>
      <RouterProvider router={router} />
    </Layout>
  </React.StrictMode>,
);



