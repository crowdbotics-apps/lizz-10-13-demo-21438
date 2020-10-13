import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import SignUp24140939Navigator from '../features/SignUp24140939/navigator';
import ArticleList5140938Navigator from '../features/ArticleList5140938/navigator';
import BlankScreen2140919Navigator from '../features/BlankScreen2140919/navigator';
import BlankScreen1140908Navigator from '../features/BlankScreen1140908/navigator';
import BlankScreen0140907Navigator from '../features/BlankScreen0140907/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
SignUp24140939: { screen: SignUp24140939Navigator },
ArticleList5140938: { screen: ArticleList5140938Navigator },
BlankScreen2140919: { screen: BlankScreen2140919Navigator },
BlankScreen1140908: { screen: BlankScreen1140908Navigator },
BlankScreen0140907: { screen: BlankScreen0140907Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
