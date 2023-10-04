import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  Image,
  StyleSheet,
  Alert,
  TouchableOpacity,
  ScrollView,
  ImageBackground,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNavigation} from '@react-navigation/native';
import IMAGES from '../../Assets';
import {NAV_PAGE} from '../../CONSTANT/String';


const Signup = () => {
  const navigation = useNavigation();
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confpassword, setConfPassword] = useState('');
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isPasswordVisible1, setIsPasswordVisible1] = useState(false);
  const [firstnamecheck, setFirstnamecheck] = useState(false);
  const [lastnamecheck, setLastnamecheck] = useState(false);
  const [mailcheck, setMailcheck] = useState(false);
  const [passcheck, setPasscheck] = useState(false);
  const [confpasscheck, setConfPasscheck] = useState(false);
  const [matchpasscheck, setmatchPasscheck] = useState(false);
  const [dissignup, setDissignup] = useState(true);
  const [checkblur, setCheckBlur] = useState(true);
  const [lastblur, setLastBlur] = useState(true);
  const [emailblur, setEmailBlur] = useState(true);
  const [passblur, setPassBlur] = useState(true);

  const handleSignup = () => {
    if (
      firstname === '' ||
      lastname === '' ||
      email === '' ||
      password === '' ||
      confpassword === ''
    ) {
      Alert.alert('Please fill all the Fields');
      return;
    }

    var y = {
      firstname: firstname,
      lastname: lastname,
      email: email.toLowerCase(),
      password: password,
    };

    const getname = async () => {
      const existingData = await AsyncStorage.getItem('signup_flip');

      const dataArray = JSON.parse(existingData) || [];
      const k = dataArray.filter(val => {
        return val.email === email.toLowerCase();
      });

      if (k.length > 0) {
        Alert.alert('data already present');
        return;
      }

      dataArray.push(y);
      await AsyncStorage.setItem('signup_flip', JSON.stringify(dataArray));
      navigation.navigate('Login1');
    };
    getname();
  };

  const handleImageClick = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  const handleImageClick1 = () => {
    setIsPasswordVisible1(!isPasswordVisible1);
  };

  const handleEnterPress = () => {
    if (password !== confpassword) {
      Alert.alert('please match the passwords');
    }
  };
  const goBackPage = () => {
    navigation.goBack();
  };
  const blurFirstName = () => {
    const nameRegex = /^[a-zA-Z]+[a-zA-Z]+$/;
    let len = firstname.length;

    if (!nameRegex.test(firstname) || len > 30) {
      setFirstnamecheck(true);
    } else {
      setFirstnamecheck(false);
    }

    setCheckBlur(false);
  };
  const changeFirstName = text => {
    if (text.endsWith(' ')) {
      setFirstname(text.trimEnd());
      return;
    }
    const nameRegex = /^[a-zA-Z]+[a-zA-Z]+$/;
    let len = text.length;

    if (!nameRegex.test(text) || len > 30) {
      setFirstnamecheck(true);
    } else {
      setFirstnamecheck(false);
    }

    setFirstname(text.trim());
  };

  const blurLastName = () => {
    const nameRegex = /^[a-zA-Z]+[a-zA-Z]+$/;
    let len = lastname.length;

    if (!nameRegex.test(lastname) || len > 30) {
      setLastnamecheck(true);
    } else {
      setLastnamecheck(false);
    }

    setLastBlur(false);
  };

  const changeLastName = text => {
    if (text.endsWith(' ')) {
      setLastname(text.trimEnd());
      return;
    }
    const nameRegex = /^[a-zA-Z]+[a-zA-Z]+$/;
    let len = text.length;

    if (!nameRegex.test(text) || len > 30) {
      setLastnamecheck(true);
    } else {
      setLastnamecheck(false);
    }

    setLastname(text.trim());
  };
  const blurEmail = () => {
    const emailRegex = /^([a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/;

    if (!emailRegex.test(email)) {
      setMailcheck(true);
    } else {
      setMailcheck(false);
    }

    setEmailBlur(false);
  };

  const changeEmail = text => {
    if (text.endsWith(' ')) {
      setEmail(text.trimEnd());
      return;
    }
    const emailRegex = /^([a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/;

    if (!emailRegex.test(text)) {
      setMailcheck(true);
    } else {
      setMailcheck(false);
    }

    setEmail(text.trim());
  };

  const blurPass = () => {
    const passwordRegex =
      /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    if (!passwordRegex.test(password)) {
      setPasscheck(true);
    } else {
      setPasscheck(false);
    }

    setPassBlur(false);
  };

  const changePass = text => {
    if (text.endsWith(' ')) {
      setPassword(text.trimEnd());
      return;
    }
    const passwordRegex =
      /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    if (!passwordRegex.test(text)) {
      setPasscheck(true);
    } else {
      setPasscheck(false);
    }

    setPassword(text.trim());
  };

  const changeConfPass = text => {
    const passwordRegex =
      /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    if (!passwordRegex.test(text)) {
      setConfPasscheck(true);
    } else {
      setConfPasscheck(false);
    }

    setConfPassword(text);
  };
  const gotolog = () => {
    navigation.navigate(NAV_PAGE.LOGIN);
  };
  return (
    
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.navback}>
        <TouchableOpacity onPress={goBackPage}>
          <Image source={IMAGES.BACK} style={styles.backimg} />
        </TouchableOpacity>
      </View>
      <Image source={IMAGES.FLIP_WH} style={styles.profileImage} />
      <View style={styles.viewouter}>
        <Text style={styles.regtext}>Register Now</Text>
        <View style={{margin: 30}}>
          <TextInput
            style={styles.input}
            placeholder="First Name"
            spellCheck={false}
            autoCapitalize="none"
            value={firstname}
            onBlur={blurFirstName}
            onChangeText={changeFirstName}
          />
          {firstnamecheck ? (
            <Text style={styles.firstnamechecktext}>
              Name should be a minimum of 2 characters, and it should not
              contain numbers, spaces, or special characters. Maximum character
              limit is 30.
            </Text>
          ) : (
            <Text></Text>
          )}

          <TextInput
            style={styles.input}
            placeholder="Last Name"
            value={lastname}
            autoCapitalize="none"
            spellCheck={false}
            onBlur={blurLastName}
            onChangeText={changeLastName}
          />
          {lastnamecheck ? (
            <Text style={styles.firstnamechecktext}>
              Name should be a minimum of 2 characters, and it should not
              contain numbers, spaces, or special characters. Maximum character
              limit is 30.
            </Text>
          ) : (
            <Text></Text>
          )}
          <TextInput
            style={styles.input}
            placeholder="Email"
            autoCapitalize="none"
            value={email}
            spellCheck={false}
            onBlur={blurEmail}
            onChangeText={changeEmail}
            keyboardType="email-address"
          />
          {mailcheck ? (
            <Text style={styles.firstnamechecktext}>
              Email should follow the format abc@xyz.com.
            </Text>
          ) : (
            <Text></Text>
          )}
          <View style={styles.sectionStyle}>
            <TextInput
              style={styles.passinput}
              placeholder="Password"
              autoCapitalize="none"
              onBlur={blurPass}
              onChangeText={changePass}
              secureTextEntry={!isPasswordVisible}
            />

            <TouchableOpacity onPress={handleImageClick}>
              {!isPasswordVisible ? (
                <Text style={styles.showtext5}>Show</Text>
              ) : (
                <Text style={styles.hidetext5}>Hide</Text>
              )}
            </TouchableOpacity>
          </View>
          {passcheck ? (
            <Text style={styles.passcheck5}>
              A password should contain at least eight characters, including at
              least one number, and include both lowercase and uppercase letters
              and special characters.
            </Text>
          ) : (
            <Text></Text>
          )}

          <View style={styles.sectionStyle}>
            <TextInput
              style={styles.passinput}
              placeholder="Confirm Password"
              autoCapitalize="none"
              onChangeText={changeConfPass}
              secureTextEntry={!isPasswordVisible1}
              onEndEditing={handleEnterPress}
            />

            <TouchableOpacity onPress={handleImageClick1}>
              {!isPasswordVisible1 ? (
                <Text style={styles.hidetext5}>Show</Text>
              ) : (
                <Text style={styles.hidetext5}>Hide</Text>
              )}
            </TouchableOpacity>
          </View>
          {confpasscheck ? (
            <Text style={styles.passcheck5}>
              A password should contain at least eight characters, including at
              least one number, and include both lowercase and uppercase letters
              and special characters.
            </Text>
          ) : (
            <Text></Text>
          )}
        </View>

        <TouchableOpacity
          onPress={handleSignup}
          activeOpacity={0.7}
          style={styles.signupouter}>
          <Text style={styles.signuptext}>Sign Up</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={gotolog}>
          <Text style={styles.golog}>Go to login page</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    color: 'black',
    backgroundColor: '#047BD5',
  },
  image: {
    flex: 1,
    justifyContent: 'center',
  },
  firstnamechecktext: {
    color: 'red',
    maxWidth: '82%',
  },
  passinput: {
    flex: 1,
    marginLeft: 9,
  },
  showtext5: {
    marginRight: 9,
    maxWidth: '82%',
  },
  hidetext5: {
    marginRight: 9,
  },
  passcheck5: {
    color: 'red',
    marginTop: 0,
    maxWidth: '82%',
  },
  profileImage: {
    width: '50%',
    height: hp('10%'),
    marginBottom: hp('8%'),
    objectFit: 'contain',
  },
  input: {
    height: hp('6%'),

    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 5,
    paddingLeft: 10,
    color: 'black',
    backgroundColor: 'white',
  },
  sectionStyle: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: 'black',
    height: hp('6%'),
    width: '80%',
    borderRadius: 5,
  },
  navback: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 60,
    width: '100%',
    backgroundColor: '#047BD5',
    padding: 5,
    marginTop: '-16%',
  },
  backimg: {
    height: hp('4%'),
    width: wp('8%'),
    objectFit: 'contain',
  },
  viewouter: {
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15,
  },
  regtext: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'darkgrey',
    marginBottom: hp('1%'),
    marginTop: hp('3%'),
  },
  signupouter: {
    backgroundColor: '#FF4200',
    padding: 10,
    borderRadius: 10,
    width: '80%',
  },
  signuptext: {
    color: 'white',
    textAlign: 'center',
  },
  golog: {
    marginTop: 9,
    color: 'blue',
    fontSize: 20,
    marginBottom: 20,
  },
});

export default Signup;
