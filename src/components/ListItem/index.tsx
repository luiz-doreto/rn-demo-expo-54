import { Image } from 'expo-image';
import { StyleSheet, Text, View } from 'react-native';
import { ListItemProps } from './types';
import { memo } from 'react';

const ListItem = ({ item }: ListItemProps) => {
  return (
    <View style={styles.itemContainer} key={item.name}>
      <Image
        key={item.image}
        source={{ uri: item.image }}
        style={styles.image}
        contentFit="contain"
      />
      <Text>{item.name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: 'row',
    padding: 10,
    height: 80,
    backgroundColor: '#ccc',
    marginBottom: 12,
    borderRadius: 8,
  },
  image: {
    width: 60,
    height: 60,
  },
});

export default memo(ListItem);
