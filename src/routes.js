import { createStackNavigator } from 'react-navigation-stack';


import Main from './pages/main';
import Details from './pages/details'

import { createAppContainer } from 'react-navigation';

const root = createStackNavigator ({
    Main,
    Details,
});
 
 export default createAppContainer (root);