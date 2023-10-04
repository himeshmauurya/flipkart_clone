import {useRoute} from '@react-navigation/native';
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
import IMAGES from '../../Assets';
import { NAV_PAGE } from '../../CONSTANT/String';
import { styles } from './CategoryStyle';
import Image1 from './Image1';
import {useNavigation} from '@react-navigation/native';
import Error from '../unavailable/Error';
import {useSelector, useDispatch} from 'react-redux';

function Category() {
  const p34 = useSelector(state => {
    return state.alldata;
  });
  const dispatch = useDispatch();
  const route = useRoute();
  const {cat} = route.params;

  const [search, setsearch] = useState('');
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigation = useNavigation();
  const [num1, setnum1] = useState(4);
  const [url1, seturl1] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const [err, seterr] = useState(false);

  useEffect(() => {
    if (search.length > 0) {
      return;
    }
    const apiUrl = `https://fakestoreapi.com/products/category/${cat}?limit=${num1}`;

    fetch(apiUrl)
      .then(response => response.json())
      .then(responseData => {
        let modifydata = responseData.map(val => {
          val.isfavourite = false;
          val.iscart = false;
          val.count = 0;
          return val;
        });
        setData(modifydata);
        setLoading(false);
      })
      .catch(error => {
        setLoading(false);
      });
  }, [num1, search,cat]);

  const handleEnterPress = text => {
    let p = text.toLowerCase();
    if (p.trim() == '' || p.trim() == ' ' || p.length == 0) {
      seterr(false);
      setData(data);
      return;
    }
    let y = data.filter(val => {
      return (
        val.category.toLowerCase().includes(p) ||
        val.title.toLowerCase().includes(p)
      );
    });
    if (y.length > 0) {
      setData(y);
      seterr(false);
    } else {
      setData(data);
      seterr(true);
    }
  };

  const handleEnterPress1 = () => {
    let p = search.toLowerCase();

    if (p.trim() == '') {
      setData(data);
      return;
    }
    let y = data.filter(val => {
      return (
        val.category.toLowerCase().includes(p) ||
        val.title.toLowerCase().includes(p)
      );
    });
    
    if (y.length > 0) {
      setData(y);
      seterr(false);
    } else {
      setData(data);
      seterr(true);
    }
  };

  function gobackpage(){
    navigation.goBack();
  }
  function gotologinpage(){
    navigation.navigate(NAV_PAGE.LOGIN);
  }
  function gotowishpage(){
    navigation.navigate(NAV_PAGE.WISH);
  }
  function gotocartpage(){
    navigation.navigate(NAV_PAGE.MYCART);
  }
  return (
    <>
      <View style={styles.container}>
        {/* nav */}
        <View style={styles.navouter}>
          <View style={styles.navbox1}>
            <TouchableOpacity
              onPress={gobackpage}>
              <Image
                source={IMAGES.BACK}
                style={styles.navback}
              />
            </TouchableOpacity>

            {/* cart and fav? */}

            {p34.log ? (
              <TouchableOpacity
                onPress={gotologinpage}>
                <Image
                  source={IMAGES.USER}
                  style={styles.navuser}
                />
              </TouchableOpacity>
            ) : (
              <View style={styles.navbox2}>
                <TouchableOpacity
                  onPress={gotowishpage}>
                  <Image
                    source={IMAGES.FAV_WHITE1}
                    style={styles.navwish}
                  />
                </TouchableOpacity>

                <TouchableOpacity
                  onPress={gotocartpage}>
                  <Image
                    source={IMAGES.CART}
                    style={styles.navcart}
                  />
                  <View style={styles.navcartcount}>
                    <Text style={styles.mycount}>
                      {p34.cc}
                    </Text>
                  </View>
                </TouchableOpacity>
              </View>
            )}
          </View>
          {/* search */}
          <View style={styles.navsearch}>
            <View style={styles.searchbox1}>
              <TouchableOpacity onPress={handleEnterPress1}>
                <Image
                  source={IMAGES.SEARCH}
                  style={styles.searchimg}
                />
              </TouchableOpacity>
            </View>

            <TextInput
              style={styles.textinput}
              placeholder="Enter Your Requirements"
              autoCapitalize="none"
              value={search}
              spellCheck={false}
              onChangeText={text => {
                setsearch(text);
                handleEnterPress(text);
              }}

              //onSubmitEditing={handleEnterPress}
            />

            <View style={styles.searchbox3}>
              <Image
                source={IMAGES.MICROPHONE}
                style={styles.micro}
              />
            </View>
          </View>
          {/* </View> */}
          {/* bottom or body */}
        </View>
      </View>
      {!err ? (
        <FlatList
          data={data}
          renderItem={({item}) => {
            return <Image1 key={item.id} value2={item} pagedata="home1"/>;
          }}
          //onScroll={handlescroll}
          //onContentSizeChange={changeContentSize}
          keyExtractor={item => item.id.toString()}
          onEndReachedThreshold={0.1} // Load more when reaching the end
          onEndReached={() => {
            //setLoading(false);
            if (num1 > data.length) {
              setLoading(false);
              return;
            }
            setnum1(num1 + 2);
            setLoading(true);
          }}
          numColumns={2}
          contentContainerStyle={
            styles.joincenter
          }
        />
      ) : (
        <Error />
      )}
      {loading ? (
        <View style={styles.activeindecator}>
          <ActivityIndicator size="large" color="black" />
        </View>
      ) : (
        <View></View>
      )}
    </>
  );
}

export default Category;
