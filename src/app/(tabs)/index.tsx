import useHomeViewModel from '@/viewModel/Home/useHomeViewModel';
import { Text, View, StyleSheet, ActivityIndicator } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { FlashList } from '@shopify/flash-list';
import { useCallback } from 'react';
import { AmiiboData } from '../../models/amiibos.model';
import { Image } from 'expo-image';

const Home = () => {
  const { data, isLoading, error } = useHomeViewModel();

  const renderItem = useCallback(
    ({ item }: { item: AmiiboData }) => (
      <View style={styles.itemContainer} key={item.name}>
        <Image
          key={item.image}
          source={{ uri: item.image }}
          style={styles.image}
        />
        <Text>{item.name}</Text>
      </View>
    ),
    []
  );

  const keyExtractor = useCallback((item: AmiiboData) => item.name, []);

  if (isLoading) {
    return <ActivityIndicator />;
  }

  if (error) {
    return (
      <SafeAreaView>
        <Text>Error: {error.message}</Text>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text>Amiibos</Text>
      <FlashList
        data={data}
        contentContainerStyle={styles.listContainer}
        keyExtractor={keyExtractor}
        renderItem={renderItem}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  listContainer: {
    padding: 12,
  },
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

export default Home;
