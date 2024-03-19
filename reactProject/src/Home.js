import React, { useState } from 'react';
import { View, Image, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import bottomhome from '../assets/bottomhomeicon.png';
import homeicon1 from '../assets/firsticon.png';
import homeicon2 from '../assets/homeicon1.png';
import carticon from '../assets/vectoricon.png';
import batman from '../assets/newbatman.png';
import newteddy from '../assets/newteddy.png';
import toy from '../assets/newtoy.jpg';
import policecar from '../assets/newpolicecar.png';
import bag from '../assets/newbag.png';
import purse from '../assets/newpurse.png';

export default function Home({ navigation }) {
  const [product, setProduct] = useState([]);

  const handleVsPress = () => {
    navigation.navigate('Cart');
  };

  const handleIconPress = () => {
    console.log('Displaying slide content...');
  };

  const handlehomepress = () => {
    navigation.navigate('Home');
  };
  const handleAddToCart = (newProduct) => {
    console.log(newProduct);
    setProduct([...product, newProduct]);
    navigation.navigate('Cart', { cartItems: [...product, newProduct] });
  };
  
  
  const handlecartpress = () => {
    navigation.navigate('Cart');
  };


  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={handleIconPress}>
          <Image source={homeicon1} style={styles.icon} />
        </TouchableOpacity>
        <Text style={styles.title}>Home</Text>
        <TouchableOpacity onPress={handleVsPress}>
          <Image source={homeicon2} style={styles.icon} />
        </TouchableOpacity>
      </View>
      <View style={styles.additionalView}>
        <Text style={styles.greeting}>Hello,</Text>
        <Text style={styles.username}>Vijay Narayanan</Text>
      </View>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <View style={styles.imagesContainer}>
          <View style={styles.row}>
            <View style={styles.column}>
              <Image source={newteddy} style={styles.boxImage} />
              <TouchableOpacity style={styles.addButton} onPress={() => handleAddToCart({ name: 'Teddy Bear', price: 12, image: newteddy })}>
                <Text style={styles.buttonText}>Add to Cart</Text>
              </TouchableOpacity>
              <View style={styles.itemDetails}>
                <Text style={styles.itemText}>Teddy Bear</Text>
                <Text style={styles.priceText}>$12</Text>
              </View>
            </View>
            <View style={styles.column}>
              <Image source={batman} style={styles.boxImage} />
              <TouchableOpacity style={styles.addButton} onPress={() => handleAddToCart({ name: 'Batman Car', price: 20, image: batman })}>
                <Text style={styles.buttonText}>Add to Cart</Text>
              </TouchableOpacity>
              <View style={styles.itemDetails}>
                <Text style={styles.itemText}>Batman Car</Text>
                <Text style={styles.priceText}>$20</Text>
              </View>
            </View>
          </View>
          <View style={styles.row}>
            <View style={styles.column}>
              <Image source={toy} style={styles.boxImage} />
              <TouchableOpacity style={styles.addButton} onPress={() => handleAddToCart({ name: 'Toystory Toy', price: 12, image: toy })}>
                <Text style={styles.buttonText}>Add to Cart</Text>
              </TouchableOpacity>
              <View style={styles.itemDetails}>
                <Text style={styles.itemText}>Toystory Toy</Text>
                <Text style={styles.priceText}>$12</Text>
              </View>
            </View>
            <View style={styles.column}>
              <Image source={policecar} style={styles.boxImage} />
              <TouchableOpacity style={styles.addButton} onPress={() => handleAddToCart({ name: 'Police Car', price: 12, image: policecar })}>
                <Text style={styles.buttonText}>Add to Cart</Text>
              </TouchableOpacity>
              <View style={styles.itemDetails}>
                <Text style={styles.itemText}>Police Car</Text>
                <Text style={styles.priceText}>$12</Text>
              </View>
            </View>
          </View>
          <View style={styles.row}>
            <View style={styles.column}>
              <Image source={bag} style={styles.boxImage} />
              <TouchableOpacity style={styles.addButton} onPress={() => handleAddToCart({ name: 'Bag', price: 15, image: bag })}>
                <Text style={styles.buttonText}>Add to Cart</Text>
              </TouchableOpacity>
              <View style={styles.itemDetails}>
                <Text style={styles.itemText}>Bag</Text>
                <Text style={styles.priceText}>$15</Text>
              </View>
            </View>
            <View style={styles.column}>
              <Image source={purse} style={styles.boxImage} />
              <TouchableOpacity style={styles.addButton} onPress={() => handleAddToCart({ name: 'Purse', price: 15, image: purse })}>
                <Text style={styles.buttonText}>Add to Cart</Text>
              </TouchableOpacity>
              <View style={styles.itemDetails}>
                <Text style={styles.itemText}>Purse</Text>
                <Text style={styles.priceText}>$15</Text>
              </View>
            </View>
          </View>
          <View style={styles.row}>
            <View style={styles.column}>
              <Image source={toy} style={styles.boxImage} />
              <TouchableOpacity style={styles.addButton}>
                <Text style={styles.buttonText}>Add to Cart</Text>
              </TouchableOpacity>
              <View style={styles.itemDetails}>
                <Text style={styles.itemText}>Toystory Toy</Text>
                <Text style={styles.priceText}>$12</Text>
              </View>
            </View>
            <View style={styles.column}>
              <Image source={policecar} style={styles.boxImage} />
              <TouchableOpacity style={styles.addButton}>
                <Text style={styles.buttonText}>Add to Cart</Text>
              </TouchableOpacity>
              <View style={styles.itemDetails}>
                <Text style={styles.itemText}>Police Car</Text>
                <Text style={styles.priceText}>$12</Text>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
      <View style={styles.homecart}>
        <TouchableOpacity style={styles.button} onPress={handlehomepress}>
          <Image source={bottomhome} />
          <Text style={styles.buttonTextbottom}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button2} onPress={handlecartpress}>
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
    marginTop:0,
    backgroundColor: 'white',
  },
  header: {

    paddingTop: 35,
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
    fontWeight:'bold',
  },
  additionalView: {
    paddingVertical:10,
    paddingHorizontal: 35,
    paddingBottom: 30,
  },
  greeting: {
    fontSize: 32,
  },
  username: {
    fontSize: 28,
    fontWeight: 'bold',
  },
  scrollViewContent: {
    flexGrow: 1,
    marginBottom:90,
  },
  imagesContainer: {
    paddingVertical: 10,
    paddingHorizontal: 20,

  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
  },
  column: {
    alignItems: 'left',
  },
  boxImage: {
    width: 150,
    height: 150,
    borderRadius: 20,
  },
  addButton: {
    position: 'absolute',
    bottom: 65,
    left: 10,
    backgroundColor: '#05A20C',
    padding: 10,
    borderRadius: 15,
    textAlign:'left',
  },
  buttonText: {
    textAlign:'left',
    color: '#fff',
    fontWeight: 'bold',
  },
  itemDetails: {
    alignItems: 'flex-start',
    marginTop: 10,
  },
  itemText: {
    fontSize: 18,
  },
  priceText: {
    fontSize: 15,
    fontWeight: 'bold',
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
    width:'47%',
    paddingVertical:5,
    backgroundColor:'#1170FF2E',
    marginHorizontal:100,
    paddingLeft:5,
    alignItems: 'center',
    borderRadius:20,
  },
  button2:{
    width:'47%',
    paddingVertical:5,
    
    borderRadius:20,
    marginHorizontal:100,
    alignItems: 'center',
  },
  buttonTextbottom: {
    marginTop: 5,
    color: 'black', 
  },
});
