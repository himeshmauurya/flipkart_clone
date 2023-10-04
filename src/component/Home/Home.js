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
import {DrawerActions} from '@react-navigation/drawer';
import {styles} from './homeStyle';
import Image1small from './Image1small';
import Carousel1 from '../carousel/Carousel1';
import {useNavigation} from '@react-navigation/native';
import Error from '../unavailable/Error';
import {useSelector, useDispatch} from 'react-redux';
import IMAGES from '../../Assets';
import { NAV_PAGE } from '../../CONSTANT/String';

function Home() {
  const p34 = useSelector(state => {
    return state.alldata;
  });
  const {data1, log, cc, tot} = p34;
  const [loading, setLoading] = useState(true);
  const navigation = useNavigation();

  function clickDrawer() {
    if (p34.log == true) {
      navigation.navigate(NAV_PAGE.LOGIN);
    } else {
      navigation.openDrawer();
    }
  }
  function clickLogin() {
    navigation.navigate(NAV_PAGE.LOGIN);
  }
  function clickWish() {
    navigation.navigate(NAV_PAGE.WISH);
  }
  function clickCart() {
    navigation.navigate(NAV_PAGE.MYCART);
  }
  function clickMen() {
    navigation.navigate(NAV_PAGE.CATEGORY, {cat: `men's clothing`});
  }
  function clickWomen() {
    navigation.navigate(NAV_PAGE.CATEGORY, {cat: `women's clothing`});
  }
  function clickJewellary() {
    navigation.navigate(NAV_PAGE.CATEGORY, {cat: `jewelery`});
  }
  function clickElectronics() {
    navigation.navigate(NAV_PAGE.CATEGORY, {cat: `electronics`});
  }
  useEffect(() => {
    setLoading(false);
  }, [p34.data1]);
  return (
    <>
      <View style={styles.container}>
        {/* nav */}
        <View style={styles.navouter}>
          <View style={styles.navbox1}>
            <View style={styles.menuouter}>
              <TouchableOpacity
                style={styles.drawercontainer}
                onPress={clickDrawer}>
                <Image
                  source={IMAGES.MENU}
                  style={styles.menu}
                />
                <Image
                  source={IMAGES.MENU}
                  style={styles.menu}
                />

                <Image
                  source={IMAGES.MENU}
                  style={styles.menu}
                />
              </TouchableOpacity>
              <Image
                source={IMAGES.FLIPKART}
                style={styles.navflip}
              />
            </View>
            <View style={styles.navbox2}>
              {log ? (
                <TouchableOpacity onPress={clickLogin}>
                  <Image
                    source={IMAGES.USER}
                    style={styles.navuser}
                  />
                </TouchableOpacity>
              ) : (
                <View style={styles.favouter17}>
                  <TouchableOpacity onPress={clickWish}>
                    <Image
                      source={IMAGES.FAV_WHITE1}
                      style={styles.navfev}
                    />
                  </TouchableOpacity>

                  <TouchableOpacity onPress={clickCart}>
                    <Image
                      source={IMAGES.CART}
                      style={styles.navcart}
                    />
                    <View style={styles.navcartcount}>
                      <Text style={styles.mycc29}>
                        {cc}
                      </Text>
                    </View>
                  </TouchableOpacity>
                </View>
              )}
            </View>
          </View>
          
          {/* bottom or body */}
        </View>
      </View>
      <ScrollView>
        <Carousel1 />
        {/* category */}
        <View style={styles.catouter}>
          <View style={styles.catbox1}>
            {/* men */}
            <View style={styles.catbox11}>
              <TouchableOpacity onPress={clickMen} style={styles.men1}>
                <Image
                  source={IMAGES.MEN1}
                  style={styles.imgmen1}
                />
                <View style={{}}>
                  <Text style={styles.mentext}>men's clothing</Text>
                </View>
              </TouchableOpacity>
            </View>
            {/* women*/}
            <View style={styles.catbox11}>
              <TouchableOpacity onPress={clickWomen} style={styles.men1}>
                <Image
                  source={IMAGES.WOMEN1}
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
              <TouchableOpacity onPress={clickJewellary} style={styles.men1}>
                <Image
                  source={IMAGES.JEWELLARY}
                  style={styles.imgmen1}
                />
                <View style={{}}>
                  <Text style={styles.mentext}>jewellary</Text>
                </View>
              </TouchableOpacity>
            </View>
            {/* electronics*/}
            <View style={styles.catbox11}>
              <TouchableOpacity onPress={clickElectronics} style={styles.men1}>
                <Image
                  source={IMAGES.ELEC}
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
