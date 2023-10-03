import React, {useContext, useEffect, useState} from 'react';
import {
  Text,
  View,
  ScrollView,
  StyleSheet,
  Image,
  TextInput,
  Alert,
  TouchableOpacity,
  FlatList,
  ActivityIndicator,
} from 'react-native';
import DrawerComponent from '../drawer/DrawerComponent';
// import { NavigationContainer, DrawerActions } from '@react-navigation/native';
import { DrawerActions } from '@react-navigation/native'

import { styles } from './homeStyle';
import Image1small from './Image1small';
import Carousel1 from '../carousel/Carousel1';
import {useNavigation} from '@react-navigation/native';
// import Error from '../Error';
import Error from '../unavailable/Error';
// import Modal1 from '../Modal1';
// import Modal1 from '../drawer/Modal1';
import {useSelector, useDispatch} from 'react-redux';

function Home() {
  const p34 = useSelector(state => {
    return state.alldata;
  });
  const {data1, log, cc, tot} = p34;
  const [loading, setLoading] = useState(true);
  const navigation = useNavigation();
  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    setLoading(false);
  }, [p34.data1]);

  // const openModal = () => {
  //   if (log) {
  //     navigation.navigate('Login1');
  //     return;
  //   }
  //   setModalVisible(true);
  // };

  // const closeModal = () => {
  //   setModalVisible(false);
  // };

  return (
    <>
      <View style={styles.container}>
        {/* nav */}
        <View style={styles.navouter}>
          <View style={styles.navbox1}>
            <View style={styles.menuouter}>
              {/* <TouchableOpacity style={{marginRight: '10%'}} onPress={()=>{
                  // navigation.openDrawer()
                  // navigation.dispatch(DrawerActions.openDrawer());
                  // navigation.navigate('DrawerComponent')
                }}><Text>hjsdfj</Text></TouchableOpacity> */}
              <TouchableOpacity
                style={{marginRight: '10%'}}
                onPress={()=>{
                  if(p34.log==true){
                    navigation.navigate("Login1")
                  }else{
                    navigation.openDrawer()
                  }
                 
                  // navigation.dispatch(DrawerActions.openDrawer());
                }}>
                <Image
                  source={require('../../Assets/Images/menu.png')}
                  style={styles.menu}
                />
                <Image
                  source={require('../../Assets/Images/menu.png')}
                  style={styles.menu}
                />

                <Image
                  source={require('../../Assets/Images/menu.png')}
                  style={styles.menu}
                />
              </TouchableOpacity>
              {/* {modalVisible && <Modal1 onClose={closeModal} 
              />} */}
              <Image
                source={require('../../Assets/Images/flipkart.png')}
                style={styles.navflip}
              />
            </View>
            <View style={styles.navbox2}>
              {log ? (
                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate('Login1');
                    //setlog(false)
                  }}>
                  <Image
                    source={require('../../Assets/Images/user.png')}
                    style={styles.navuser}
                  />
                </TouchableOpacity>
              ) : (
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <TouchableOpacity
                    onPress={() => {
                      navigation.navigate('Wish');
                    }}>
                    <Image
                      source={require('../../Assets/Images/fav_white1.png')}
                      style={styles.navfev}
                    />
                  </TouchableOpacity>

                  <TouchableOpacity
                    onPress={() => {
                      navigation.navigate('Mycart');
                    }}>
                    <Image
                      source={require('../../Assets/Images/cart.png')}
                      style={styles.navcart}
                    />
                    <View style={styles.navcartcount}>
                      <Text style={{color: 'white', textAlign: 'center'}}>
                        {cc}
                      </Text>
                    </View>
                  </TouchableOpacity>
                </View>
              )}
            </View>
          </View>
          {/* search */}

          {/* </View> */}
          {/* bottom or body */}
        </View>
      </View>
      <ScrollView>
        <Carousel1 />
        {/* banner */}
        {/* <View style={{height:hp('20%'),width:wp('90%'),backgroundColor:'red',margin:10}}></View> */}

        {/* category */}
        <View style={styles.catouter}>
          <View style={styles.catbox1}>
            {/* men */}
            <View style={styles.catbox11}>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('Category', {cat: `men's clothing`});
                }}
                style={styles.men1}>
                <Image
                  source={require('../../Assets/Images/men1.jpeg')}
                  style={styles.imgmen1}
                />
                <View style={{}}>
                  <Text style={styles.mentext}>men's clothing</Text>
                </View>
              </TouchableOpacity>
            </View>
            {/* women*/}
            <View style={styles.catbox11}>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('Category', {cat: `women's clothing`});
                }}
                style={styles.men1}>
                <Image
                  source={require('../../Assets/Images/women1.jpeg')}
                  style={styles.imgmen1}
                />
                <View style={{}}>
                  <Text style={styles.mentext}>women's clothing</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.catbox1}>
            {/* jewellary */}
            <View style={styles.catbox11}>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('Category', {cat: `jewelery`});
                }}
                style={styles.men1}>
                <Image
                  source={require('../../Assets/Images/jewellary.jpeg')}
                  style={styles.imgmen1}
                />
                <View style={{}}>
                  <Text style={styles.mentext}>jewellary</Text>
                </View>
              </TouchableOpacity>
            </View>
            {/* electronics*/}
            <View style={styles.catbox11}>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('Category', {cat: `electronics`});
                }}
                style={styles.men1}>
                <Image
                  source={require('../../Assets/Images/elec.jpeg')}
                  style={styles.imgmen1}
                />
                <View style={{}}>
                  <Text style={styles.mentext}>electronics</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <Text style={styles.contisearch}>Add to Your Wishlist</Text>

        <ScrollView contentContainerStyle={styles.contiitem}>
          {p34.data1.map(val => {
            return <Image1small key={val.id} value2={val} />;
          })}
        </ScrollView>

        {loading ? (
          <View style={styles.load}>
            <ActivityIndicator size="large" color="black" />
          </View>
        ) : (
          <View></View>
        )}
      </ScrollView>
    </>
  );
}

export default Home;
