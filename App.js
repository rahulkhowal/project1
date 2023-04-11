// import * as Keychain from 'react-native-keychain';
// import * as React from 'react';

// import {Image, Text, TextInput, TouchableOpacity, View} from 'react-native';
// import {NavigationContainer, useNavigation} from '@react-navigation/native';

// import IconsUris from './utils/IconsUris';
// import {createNativeStackNavigator} from '@react-navigation/native-stack';

// function HomeScreen() {
//   const [email, setEmail] = React.useState('');
//   const navigation = useNavigation();
//   const [password, setPassword] = React.useState('');
//   const AuthContext = React.createContext();
//   const signIn = React.useContext(AuthContext);
//   console.log(signIn, '===');
//   const onButtonClick = () => {
//     const params = {
//       method: 'POST',
//       headers: {'Content-Type': 'application/json'},
//       body: JSON.stringify({
//         email: 'eve.holt@reqres.in',
//         password: 'cityslicka',
//       }),
//     };
//     fetch('https://reqres.in/api/login', params)
//       .then(response => response.json())
//       .then(async responseJson => {
//         console.log(responseJson);
//         await Keychain.setGenericPassword('Token', responseJson.token);
//         navigation.navigate('Home2');
//       })
//       .catch(error => {
//         console.error(error);
//       });
//   };
//   return (
//     <View
//       style={{
//         flex: 1,
//         // alignItems: 'center',
//         // justifyContent: 'center',
//         backgroundColor: 'white',
//         paddingLeft: 25,
//       }}>
//       <Image
//         style={{height: 46, width: 162, marginTop: 15}}
//         source={IconsUris.Logo}
//       />
//       <View style={{marginTop: 10}}>
//         <Text
//           style={{
//             color: '#0C1A30',
//             fontSize: 25,
//             fontWeight: '700',
//             lineHeight: 32,
//           }}>
//           Welcome to {'\n'}Mega Mall
//         </Text>
//         <View style={{marginTop: 40}}>
//           <Text>Email/Phone</Text>
//           <View
//             style={{
//               height: 60,
//               width: '94%',
//               borderRadius: 6,
//               backgroundColor: '#FAFAFA',
//               // borderWidth: 1,
//               marginTop: 10,
//               justifyContent: 'center',
//             }}>
//             <TextInput
//               editable
//               numberOfLines={1}
//               maxLength={40}
//               onChangeText={text => {
//                 setEmail(text);
//               }}
//               value={'Enter email/phone '}
//               style={{padding: 10}}
//             />
//           </View>
//         </View>
//         <View style={{marginTop: 40}}>
//           <Text>Password</Text>
//           <View
//             style={{
//               height: 60,
//               width: '94%',
//               borderRadius: 6,
//               backgroundColor: '#FAFAFA',
//               // borderWidth: 1,
//               marginTop: 10,
//               alignItems: 'center',
//               justifyContent: 'space-between',
//               flexDirection: 'row',
//             }}>
//             <TextInput
//               editable
//               numberOfLines={1}
//               maxLength={40}
//               onChangeText={text => {
//                 setPassword(password);
//               }}
//               value={'Enter Password'}
//               style={{padding: 10}}
//             />
//             <TouchableOpacity style={{marginRight: 10}}>
//               <Image
//                 style={{height: 16, width: 21}}
//                 source={IconsUris.password}
//               />
//             </TouchableOpacity>
//           </View>
//         </View>
//         <TouchableOpacity
//           style={{
//             height: 50,
//             marginTop: 40,
//             width: '90%',
//             backgroundColor: '#3669C9',
//             borderRadius: 6,
//             justifyContent: 'center',
//             alignItems: 'center',
//           }}
//           onPress={() => signIn('eve.holt@reqres.in', 'cityslicka')}>
//           <Text style={{color: 'white'}}>Sign in</Text>
//         </TouchableOpacity>
//       </View>
//     </View>
//   );
// }
// function HomeScreen2() {
//   const [email, setEmail] = React.useState('');
//   const [password, setPassword] = React.useState('');
//   const onButtonClick = () => {
//     const params = {
//       method: 'POST',
//       headers: {'Content-Type': 'application/json'},
//       body: JSON.stringify({
//         email: 'eve.holt@reqres.in',
//         password: 'cityslicka',
//       }),
//     };
//     fetch('https://reqres.in/api/login', params)
//       .then(response => response.json())
//       .then(responseJson => {
//         console.log(responseJson);
//       })
//       .catch(error => {
//         console.error(error);
//       });
//   };
//   return (
//     <View
//       style={{
//         flex: 1,
//         // alignItems: 'center',
//         // justifyContent: 'center',
//         backgroundColor: 'white',
//         paddingLeft: 25,
//       }}>
//       <Image
//         style={{height: 46, width: 162, marginTop: 15}}
//         source={IconsUris.Logo}
//       />
//       <View style={{marginTop: 10}}>
//         <Text
//           style={{
//             color: '#0C1A30',
//             fontSize: 25,
//             fontWeight: '700',
//             lineHeight: 32,
//           }}>
//           Welcome to {'\n'}Mega Mall
//         </Text>
//         <View style={{marginTop: 40}}>
//           <Text>Email/Phone</Text>
//           <View
//             style={{
//               height: 60,
//               width: '94%',
//               borderRadius: 6,
//               backgroundColor: '#FAFAFA',
//               // borderWidth: 1,
//               marginTop: 10,
//               justifyContent: 'center',
//             }}>
//             <TextInput
//               editable
//               numberOfLines={1}
//               maxLength={40}
//               onChangeText={text => {
//                 setEmail(text);
//               }}
//               value={'Enter email/phone '}
//               style={{padding: 10}}
//             />
//           </View>
//         </View>
//         <View style={{marginTop: 40}}>
//           <Text>Password</Text>
//           <View
//             style={{
//               height: 60,
//               width: '94%',
//               borderRadius: 6,
//               backgroundColor: '#FAFAFA',
//               // borderWidth: 1,
//               marginTop: 10,
//               alignItems: 'center',
//               justifyContent: 'space-between',
//               flexDirection: 'row',
//             }}>
//             <TextInput
//               editable
//               numberOfLines={1}
//               maxLength={40}
//               onChangeText={text => {
//                 setPassword(password);
//               }}
//               value={'Enter Password'}
//               style={{padding: 10}}
//             />
//             <TouchableOpacity style={{marginRight: 10}}>
//               <Image
//                 style={{height: 16, width: 21}}
//                 source={IconsUris.password}
//               />
//             </TouchableOpacity>
//           </View>
//         </View>
//       </View>
//     </View>
//   );
// }
// const Left = () => {
//   return (
//     <TouchableOpacity>
//       <Image style={{height: 20, width: 10}} source={IconsUris.back} />
//     </TouchableOpacity>
//   );
// };
// const Stack = createNativeStackNavigator();

// function App() {
//   const AuthContext = React.createContext(authContext);
//   const [isLoggedin, setIsLoggedin] = React.useState(false);
//   const [state, dispatch] = React.useReducer(
//     (prevState, action) => {
//       switch (action.type) {
//         case 'RESTORE_TOKEN':
//           return {
//             ...prevState,
//             userToken: action.token,
//             isLoading: false,
//           };
//         case 'SIGN_IN':
//           return {
//             ...prevState,
//             isSignout: false,
//             userToken: action.token,
//           };
//         case 'SIGN_OUT':
//           return {
//             ...prevState,
//             isSignout: true,
//             userToken: null,
//           };
//       }
//     },
//     {
//       isLoading: true,
//       isSignout: false,
//       userToken: null,
//     },
//   );
//   const authContext = React.useMemo(
//     () => ({
//       signIn: async data => {
//         const params = {
//           method: 'POST',
//           headers: {'Content-Type': 'application/json'},
//           body: JSON.stringify({
//             email: 'eve.holt@reqres.in',
//             password: 'cityslicka',
//           }),
//         };
//         fetch('https://reqres.in/api/login', params)
//           .then(response => response.json())
//           .then(async responseJson => {
//             console.log(responseJson);
//             await Keychain.setGenericPassword('Token', responseJson.token);
//             dispatch({type: 'SIGN_IN', token: responseJson.token});
//           })
//           .catch(error => {
//             console.error(error);
//           });
//       },
//     }),
//     [],
//   );
//   React.useEffect(() => {
//     async () => {
//       try {
//         // Retrieve the credentials
//         const credentials = await Keychain.getGenericPassword();
//         if (credentials) {
//           console.log(
//             'Credentials successfully loaded for user ' + credentials.token,
//           );
//           ({type: 'SIGN_IN', token: credentials.token});
//         } else {
//           console.log('No token stored');
//           // setIsLoggedin(false);
//         }
//       } catch (error) {
//         console.log("Keychain couldn't be accessed!", error);
//         // setIsLoggedin(false);
//       }
//     };
//   });
//   return (
//     <NavigationContainer>
//       <AuthContext.Provider value={authContext}>
//         <Stack.Navigator>
//           {state.userToken == null ? (
//             <Stack.Screen
//               name="Home"
//               component={HomeScreen}
//               options={{
//                 headerTitle: '',
//                 headerLeft: () => <Left />,
//               }}
//             />
//           ) : (
//             <Stack.Screen
//               name="Home2"
//               component={HomeScreen2}
//               options={{
//                 headerTitle: '',
//                 headerLeft: () => <Left />,
//               }}
//             />
//           )}
//         </Stack.Navigator>
//       </AuthContext.Provider>
//     </NavigationContainer>
//   );
// }

import {AuthProvider} from './src/contexts/Auth';
// export default App;
import React from 'react';
import {Router} from './src/routes/Router';

const App = () => {
  return (
    <AuthProvider>
      <Router />
    </AuthProvider>
  );
};

export default App;
