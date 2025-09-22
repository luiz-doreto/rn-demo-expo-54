import useHomeViewModel from '@/viewModel/Home/useHomeViewModel';
import { Text, StyleSheet, ActivityIndicator } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { FlashList } from '@shopify/flash-list';
import { useCallback } from 'react';
import CategoryCard from '@/components/CategoryCard';
import { Category } from '@/store/types';

const Home = () => {
  const { data, isLoading, error } = useHomeViewModel();

  const renderItem = useCallback(
    ({ item }: { item: Category }) => <CategoryCard item={item} />,
    []
  );

  const keyExtractor = useCallback((item: Category) => item.name, []);

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
      <Text style={styles.header}>Amiibo Categories</Text>
      <FlashList
        data={data}
        contentContainerStyle={styles.listContainer}
        keyExtractor={keyExtractor}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
        masonry
        numColumns={2}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '600',
    marginVertical: 20,
  },
  listContainer: {
    padding: 12,
    paddingBottom: 80,
  },
});

export default Home;
