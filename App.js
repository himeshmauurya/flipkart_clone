import React from 'react';
import { Provider } from 'react-redux';
import { store } from './src/component/redux/Store';
import Api1 from './src/component/navigation/Api1';

function App() {
  return (
   <>
   {/* <DrawerNavigator/> */}
   {/* <AppNavigator /> */}
   <Provider store={store}>
   <Api1/>
   </Provider>
   </>
  );
}

export default App;
