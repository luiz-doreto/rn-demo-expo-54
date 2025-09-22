import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { CategoryCardProps } from './types';
import { memo } from 'react';
import { Image } from 'expo-image';

const CategoryCard = ({ item }: CategoryCardProps) => {
  return (
    <TouchableOpacity style={styles.container}>
      <Image
        key={item.name}
        source={{ uri: 'https://picsum.photos/200' }}
        style={styles.image}
      />
      <View style={styles.backgroundOverlay} />
      <View style={styles.footerContent}>
        <Text style={styles.category}>{item.name}</Text>
        <Text style={styles.categoryCount}>{item.items.length} amiibos</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 150,
    backgroundColor: 'skyblue',
    margin: 4,
    borderRadius: 8,
    justifyContent: 'flex-end',
  },
  image: {
    height: 150,
    width: '100%',
    borderRadius: 8,
  },
  backgroundOverlay: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 40,
    backgroundColor: '#000',
    opacity: 0.1,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
  },
  footerContent: {
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
    padding: 4,
    position: 'absolute',
  },
  category: {
    color: 'white',
    fontWeight: 'bold',
  },
  categoryCount: {
    color: 'white',
  },
});

export default memo(CategoryCard);
