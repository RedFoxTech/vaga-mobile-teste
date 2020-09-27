import React from 'react';

import { FavoriteProvider } from './favorite';

const AppProvider: React.FC = ({ children }) => (
  <FavoriteProvider>{children}</FavoriteProvider>
);

export default AppProvider;
