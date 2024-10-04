import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons'; // For icons
import HomeScreen from './screens/HomeScreen';  // Assuming your Home screen is a separate file
import WishlistScreen from './screens/WishlistScreen';  // Wishlist screen
import NotificationScreen from './screens/NotificationScreen';  // Notifications

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            let iconName;
            if (route.name === 'Home') {
              iconName = 'home';
            } else if (route.name === 'Wishlist') {
              iconName = 'heart';
            } else if (route.name === 'Notifications') {
              iconName = 'notifications';
            }
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'orange',  // Active tab color
          tabBarInactiveTintColor: 'gray',  // Inactive tab color
          tabBarStyle: [{ display: 'flex' }, null],  // Style the tab bar
        })}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Wishlist" component={WishlistScreen} />
        <Tab.Screen name="Notifications" component={NotificationScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
