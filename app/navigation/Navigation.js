import React from "react";
import { NavigationContainer, TabActions } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { MaterialCommunityIcons } from "react-native-vector-icons";

import RestaurantsScreen from "../screens/Restaurants";
import TopResturantsScreen from "../screens/TopResturants";
import SearchScreen from "../screens/Search";
import MyAccountScreen from "../screens/MyAccount";

//////////////////////////////////////////////////////////////////////////////////////////////////////////////
///                         Creamos los tab de createBottomTabNavigator()                            /////////
///                 para declara directamente Tab.Navigator y no createBottomTabNavigator.Navigator  /////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////
const Tab = createBottomTabNavigator();

//////////////////////////////////////////////////////////////////////////////////////////////////////////////
///                         Creamos los Stack de createStackNavigator()                            /////////
///                 para declara directamente Stack.Screen y no createStackNavigator.Screen  /////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////
const Stack = createStackNavigator();

function RestaurantsStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Restarantes" component={RestaurantsScreen} />
      <Stack.Screen name="Restaurants" component={RestaurantsScreen} />
    </Stack.Navigator>
  );
}
function TopRestaurantsStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Top 5" component={TopResturantsScreen} />
    </Stack.Navigator>
  );
}
function SearchRestaurantsStack() {
    return (
      <Stack.Navigator>
        <Stack.Screen name="Buscar" component={SearchScreen} />
      </Stack.Navigator>
    );
  }function MyAccountStack() {
    return (
      <Stack.Navigator>
        <Stack.Screen name="Mi Cuenta" component={MyAccountScreen} />
      </Stack.Navigator>
    );
  }

export default function Navagation() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          // name de opciones de la aplicacion botones
          name="Restaurantes"
          component={RestaurantsStack}
          options={{
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="home" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Top 5"
          component={TopRestaurantsStack}
          options={{
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="cup" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Buscar"
          component={SearchRestaurantsStack}
          options={{
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="rocket" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
        name="Mi cuenta"
        component={MyAccountStack}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account" color={color} size={size} />
          ),
        }}
      />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
