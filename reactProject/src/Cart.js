import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, Image, View, TouchableOpacity, ScrollView } from 'react-native';
import bottomhome from '../assets/bottomhomeicon.png';
import carticon from '../assets/vectoricon.png';
import homeicon1 from '../assets/firsticon.png';
import homeicon2 from '../assets/homeicon1.png';
import minus from '../assets/newminus.png';
import plus from '../assets/plus.png';
import batman from '../assets/newbatman.png';
import newteddy from '../assets/newteddy.png';
import toy from '../assets/newtoy.jpg';
import policecar from '../assets/newpolicecar.png';
import bag from '../assets/newbag.png';
import purse from '../assets/newpurse.png';

export default function Cart({ navigation, route }) {
  const [cartItems, setCartItems] = useState(route.params?.cartItems || []);

  useEffect(() => {
    console.log("cartItems:", cartItems);
  }, [cartItems]);

  const handleRemoveFromCart = (index) => {
    const updatedCartItems = [...cartItems];
    updatedCartItems.splice(index, 1);
    setCartItems(updatedCartItems);
  };

  const handlePlaceOrder =() =>{
    navigation.navigate("Orderconfirm");
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <Image source={homeicon1} style={styles.icon} />
        </TouchableOpacity>
        <Text style={styles.title}>Cart</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Cart')}>
          <Image source={homeicon2} style={styles.icon} />
        </TouchableOpacity>
      </View>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        {Array.isArray(cartItems) && cartItems.map((item, index) => (
          <View style={styles.row} key={index}>
            <View style={styles.column}>
              <Image source={item.image} style={styles.image} />
              <View style={styles.subcol}>
                <Image source={minus} style={styles.subcolimg} />
                <Text style={styles.imgtext}>01</Text>
                <Image source={plus} style={styles.subcolimg} />
              </View>
            </View>
            <View style={styles.column2}>
              <Text style={styles.text1}>{item.name}</Text>
              <Text style={styles.text2}>${item.price}</Text>
              <Text style={styles.text3}>Delivery By <Text style={{ fontWeight: 'bold' }}>March 12, 2024</Text></Text>
              <View>
            <TouchableOpacity onPress={() => handleRemoveFromCart(index)} style={styles.removeButton}>
              <Text style={styles.removeButtonText}>Remove</Text>
            </TouchableOpacity>
            </View>
            </View>
           
          </View>
        ))}
      </ScrollView>
      <View style={styles.totalView}>
        <Text style={styles.totalText}>Total ${cartItems.reduce((acc, item) => acc + item.price, 0)}</Text>
        <TouchableOpacity style={styles.placeOrderButton} onPress={handlePlaceOrder}>
          <Text style={styles.buttonText}>Place Order</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.homecart}>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Home')}>
          <Image source={bottomhome} />
          <Text style={styles.buttonTextbottom}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button2} onPress={() => navigation.navigate('Cart')}>
          <Image source={carticon} />
          <Text style={styles.buttonTextbottom}>Cart</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 0,
    backgroundColor: 'white',
    alignItems: 'center',
  },
  scrollViewContent: {
    flexGrow: 1,
    width: '100%',
    paddingBottom: 70,
  },
  header: {
    paddingTop: 30,
    height: 100,
    flexDirection: 'row',
    backgroundColor: 'black',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    bottom: 0,
    marginBottom: 20,
    width: '100%',
  },
  icon: {
    width: 30,
    height: 30,
  },
  title: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
  },
  row: {
    paddingRight: 10,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 30,
    gap: 0,
  },
  column: {
    marginRight: 0,
    paddingLeft: 30,
    alignItems: 'center',
  },
  column2:{
    marginLeft: 20,
    paddingTop: 20,
    flex: 1,
    flexDirection: 'column',
    flexWrap:'nowrap',

  },
  subcol: {
    flexDirection: 'row',
    justifyContent: 'center', 
    alignItems: 'center', 
    backgroundColor: '#fff',
    borderRadius: 20,
    width: 110,
    marginTop: -45,
  },
  imgtext: {
    paddingVertical: 7,
    fontWeight: 'bold',
    fontSize: 16,
    paddingHorizontal: 8,
  },
  subcolimg: {
    width: 30,
    padding: 10,
    height: 30,
  },
  text1: {
    fontSize: 20,
    textAlign: 'left',
  },
  text2: {
    color: '#05A20C',
    fontSize: 17,
    fontWeight: 'bold',
    textAlign: 'left',
    whiteSpace: 'nowrap',
  },
  text3: {
    fontSize: 16,
    textAlign: 'left',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    paddingBottom:10,
  },
  image: {
    borderRadius: 20,
    width: 120,
    height: 120,
  },
  homecart: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 30,
    paddingVertical: 10,
    width: '90%', 
    alignSelf: 'center', 
    position: 'absolute', 
    bottom: 30, 
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  button: {
    width: '47%',
    paddingVertical: 5,
    marginHorizontal: 100,
    paddingLeft: 5,
    alignItems: 'center',
    borderRadius: 20,
  },
  button2: {
    width: '47%',
    paddingVertical: 5,
    backgroundColor: '#1170FF2E',
    borderRadius: 20,
    marginHorizontal: 100,
    alignItems: 'center',
  },
  buttonTextbottom: {
    marginTop: 5,
    color: 'black', 
  },
  totalView: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#ffff',
    padding: 20,
    borderRadius: 30,
    width: '100%',
    alignSelf: 'center',
    marginBottom: 20,
    bottom: 80,
    
  },
  totalText: {
    paddingHorizontal:20,
    fontSize: 18,
    fontWeight:'bold'
  },
  placeOrderButton: {
    backgroundColor: '#1170FF',
    paddingHorizontal: 22,
    paddingVertical: 15,
    borderRadius: 10,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },

  removeButton: {
    height:35,
    backgroundColor: 'red',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 10,
    alignSelf: 'flex-end', 
  },
  removeButtonText: {
    fontSize:11,
    color: 'white',
    fontWeight: 'bold',
  },
});
