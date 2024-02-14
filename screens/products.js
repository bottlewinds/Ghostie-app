import React from 'react';
import { View, Text, FlatList, Image, StyleSheet } from 'react-native';

const ProductsScreen = ({ route }) => {
  const { productsData } = route.params;

  const renderItem = ({ item }) => {
    if (item.images.length === 0) {
      return null; // Skip rendering if the product doesn't have any images
    }

    return (
      <View style={styles.productContainer}>
        <Image source={{ uri: item.images[0] }} style={styles.productImage} />
        <View style={styles.productInfo}>
          <Text style={styles.productTitle}>{item.title}</Text>
          <Text style={styles.productPrice}>${item.price}</Text>
        </View>
      </View>
    );
  };

  const filteredProducts = productsData.filter(product => product.images.length > 0);

  return (
    <View style={styles.container}>
      <FlatList
        data={filteredProducts}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  productContainer: {
    flexDirection: 'row',
    marginBottom: 20,
    alignItems: 'center',
  },
  productImage: {
    width: 100,
    height: 100,
    borderRadius: 5,
    marginRight: 10,
  },
  productInfo: {
    flex: 1,
  },
  productTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  productPrice: {
    fontSize: 16,
    color: 'gray',
  },
});

export default ProductsScreen;