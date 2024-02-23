import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const ProductDetailScreen = ({ route }) => {
  const { oneProductData } = route.params;

  return (
    <View style={styles.container}>
      <Image source={{ uri: oneProductData.images[0] }} style={styles.productImage} />
      <View style={styles.productInfo}>
        <Text style={styles.productTitle}>{oneProductData.title}</Text>
        <Text style={styles.productPrice}>${oneProductData.price}</Text>
        <Text style={styles.productDescription}>{oneProductData.description}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  productImage: {
    width: '100%',
    height: 300,
    borderRadius: 5,
    marginBottom: 20,
  },
  productInfo: {
    marginBottom: 20,
  },
  productTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  productPrice: {
    fontSize: 20,
    color: 'gray',
    marginBottom: 10,
  },
  productDescription: {
    fontSize: 16,
  },
});

export default ProductDetailScreen;