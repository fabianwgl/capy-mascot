import { AdminJSOptions } from 'adminjs';

import componentLoader from './component-loader.js';

import { User } from '../db/user.entity.js';
import { Vet } from '../db/vet.entity.js';

const dashboardHandler = async () => {
  // Asynchronous code where you, e. g. fetch data from your database

  return { message: 'Hello World' };
};

const options: AdminJSOptions = {
  componentLoader,
  rootPath: '/admin',
  resources: [User, Vet],
  databases: [],
  // dashboard: {
  // component: componentLoader.add('Dashboard', './dashboard'),
  // handler: dashboardHandler,
  // },
};

export default options;
