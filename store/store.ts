import {configureStore} from '@reduxjs/toolkit';
import index from './index';

export default configureStore({
  reducer: {
    store: index,
  },
});
