import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from '@react-navigation/native-stack';
import { Button } from '@react-navigation/elements';

type RootStackParamList = {
  Home: undefined;
  Details: { itemId: number; otherParam: string };
};

type HomeScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'Home'
>;

type DetailsScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'Details'
>;

function HomeScreen() {
  const navigation = useNavigation<HomeScreenNavigationProp>();

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button
        onPress={() => {
          navigation.navigate('Details', {
            itemId: 86,
            otherParam: 'anything you want here',
          });
        }}
      >
        Go to Details
      </Button>
    </View>
  );
}

function DetailsScreen({ route }: { route: { params: { itemId: number; otherParam: string } } }) {
  const navigation = useNavigation<DetailsScreenNavigationProp>();

  const { itemId, otherParam } = route.params;

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Details Screen</Text>
      <Text>itemId: {JSON.stringify(itemId)}</Text>
      <Text>otherParam: {JSON.stringify(otherParam)}</Text>
      <Button
        onPress={() =>
          navigation.push('Details', {
            itemId: Math.floor(Math.random() * 100),
            otherParam: 'anything you want here',
          })
        }
      >
        Go to Details... again
      </Button>
      <Button onPress={() => navigation.goBack()}>Go back</Button>
    </View>
  );
}

const RootStack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <RootStack.Navigator initialRouteName="Home">
        <RootStack.Screen name="Home" component={HomeScreen} />
        <RootStack.Screen name="Details" component={DetailsScreen} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
}

