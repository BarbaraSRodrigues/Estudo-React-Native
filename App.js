import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from "./src/screens/HomeScreen";
import ComponentsScreen from "./src/screens/ComponentScreen";
import Exercise1 from "./src/screens/Exercise1";
import ListScreen from "./src/screens/ListScreen";

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Components: ComponentsScreen,
    Exercise1: Exercise1,
    ListScreen: ListScreen,
  },
  {
    initialRouteName: "ListScreen",
    defaultNavigationOptions: {
      title: "App",
    },
  }
);

export default createAppContainer(navigator);
