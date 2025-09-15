import useMockFetch from '@/services/useMockFetch';
import {
  Text,
  View,
  FlatList,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const Home = () => {
  const { data, loading, error, fetchData } = useMockFetch();

  if (error) {
    return (
      <SafeAreaView>
        <Text>Error: {error.message}</Text>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView>
      <Text>Home Tab</Text>
      {data && (
        <FlatList
          data={data}
          contentContainerStyle={styles.container}
          keyExtractor={item => item.id.toString()}
          renderItem={({ item }) => (
            <View style={styles.itemContainer} key={item.id}>
              <Text>{item.name}</Text>
            </View>
          )}
          onEndReached={fetchData}
          onEndReachedThreshold={0.1}
          ListFooterComponent={loading ? <ActivityIndicator /> : null}
        />
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 12,
  },
  itemContainer: {
    padding: 10,
    height: 60,
    backgroundColor: '#ccc',
    marginBottom: 12,
    borderRadius: 8,
  },
});

export default Home;
