import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { useNavigation } from '@react-navigation/native';
import { StyleSheet, Text, View, FlatList, Image, TouchableOpacity } from 'react-native';
import { categoriesService } from '../services/categories'; // Adjusted import path
import { productService } from '../services/products'; 

export default function Home() {

  const [categories, setCategories] = useState([]);
  const navigation = useNavigation();


  useEffect(() => {
    async function fetchData() {
      try {
        const categoriesData = await categoriesService.getAll();
        setCategories(categoriesData);
      } catch (error) {
        console.log("error", error)
      }
    }

    fetchData();
  }, []);

  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => handleCategoryPress(item.id, navigation)}>
      <View style={styles.categories}>
        <Image source={{ uri: item.image }} style={styles.image} />
        <Text style={styles.name}>{item.name}</Text>
      </View>
    </TouchableOpacity>
  );
  
  const handleCategoryPress = async (categoryId, navigation) => {
    try {
      const response = await productService.getByCategory(categoryId);
      const productsData = response;
      navigation.navigate('Products', { productsData });
    } catch (error) {
      console.log("Error fetching products:", error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Categorías</Text>
      <View style={{flex:1}}>
        <FlatList
          data={categories}
          renderItem={renderItem}
          keyExtractor={(item) => item.id.toString()} 
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 20,
  },
  categories: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
    paddingBottom:30,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom:20,
  }
});