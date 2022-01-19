import { RouteProp } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

export type AppParamsList = {
  Home: undefined;
  Detail: undefined;
};

export type AppNavProps<T extends keyof AppParamsList> = {
  navigation: NativeStackNavigationProp<AppParamsList, T>;
  route: RouteProp<AppParamsList, T>;
};
