import React, {useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {aaddapidata} from '../redux/Myslice';

import Navst1 from './Navst1';
function Api1() {
  const dispatch = useDispatch();

  useEffect(() => {
    const apiUrl = `https://fakestoreapi.com/products`;
    fetch(apiUrl)
      .then(response => response.json())
      .then(responseData => {
        let modifydata = responseData.map(val => {
          val.isfavourite = false;
          val.iscart = false;
          val.count = 0;
          return val;
        });
        dispatch(aaddapidata(modifydata));
      })
      .catch(error => {
        
      });
  }, []);
  return <>
  <Navst1/>
  </>;
}

export default Api1;
