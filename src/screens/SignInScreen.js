import {
  ActivityIndicator,
  Alert,
  Button,
  Image,
  KeyboardAvoidingView,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';

import IconsUris from '../../utils/IconsUris';
import {styles} from './styles';
import {useAuth} from '../contexts/Auth';

export const SignInScreen = () => {
  const auth = useAuth();
  const [loading, isLoading] = useState(false);
  const [email, setEmail] = React.useState('');
  const [passwordVisibility, setPasswordVisibility] = useState(false);
  const [password, setPassword] = React.useState('');
  function validEmail(e) {
    var filter =
      /^\s*[\w\-\+_]+(\.[\w\-\+_]+)*\@[\w\-\+_]+\.[\w\-\+_]+(\.[\w\-\+_]+)*\s*$/;
    return String(e).search(filter) !== -1;
  }
  const signIn = async (e, P) => {
    isLoading(true);
    if (validEmail(e) !== true) {
      Alert.alert('Please enter valid Email');
      isLoading(false);
    } else {
      await auth.signIn(e, P);
      isLoading(false);
    }
  };
  return (
    <ScrollView style={styles.container}>
      <Image style={styles.logo} source={IconsUris.Logo} />
      <KeyboardAvoidingView>
        <View style={styles.margin10}>
          <Text style={styles.heading}>Welcome to {'\n'}Mega Mall</Text>
          <View style={styles.margin40}>
            <Text>Email/Phone</Text>
            <View style={styles.input}>
              <TextInput
                editable
                numberOfLines={1}
                maxLength={40}
                onChangeText={text => {
                  setEmail(text);
                }}
                value={email}
                placeholder="Enter email/phone "
                style={styles.padding10}
              />
            </View>
          </View>
          <View style={styles.margin40}>
            <Text>Password</Text>
            <View style={styles.inputpassword}>
              <TextInput
                editable
                numberOfLines={1}
                maxLength={40}
                onChangeText={text => {
                  setPassword(text);
                }}
                secureTextEntry={passwordVisibility}
                value={password}
                placeholder="Enter Password"
                style={styles.padding10}
              />
              <TouchableOpacity
                style={styles.padding10}
                onPress={() => setPasswordVisibility(!passwordVisibility)}>
                <Image
                  style={styles.passwordIcon}
                  source={IconsUris.password}
                />
              </TouchableOpacity>
            </View>
          </View>
          <TouchableOpacity
            style={styles.buttonStyles}
            onPress={() => signIn(email, password)}>
            {loading ? (
              <ActivityIndicator color={'#000'} animating={true} size="small" />
            ) : (
              <Text style={styles.textcolor}>Sign in</Text>
            )}
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </ScrollView>
  );
};
