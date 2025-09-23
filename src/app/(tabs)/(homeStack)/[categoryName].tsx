import { StyleSheet } from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useAmiiboStore } from '@/store/useAmiiboStore';
import { memo, useCallback, useMemo } from 'react';
import { AmiiboData } from '@/models/amiibos.model';
import { FlashList } from '@shopify/flash-list';
import ListItem from '@/components/ListItem';

const AmiibosByCategory = () => {
  const { categories } = useAmiiboStore();
  const { categoryName } = useLocalSearchParams<{ categoryName: string }>();
  const amiiboList: AmiiboData[] = useMemo(
    () =>
      categories.find(category => category.name === categoryName)?.items || [],
    [categories, categoryName]
  );

  const renderItem = useCallback(
    ({ item }: { item: AmiiboData }) => <ListItem item={item} />,
    []
  );

  const keyExtractor = useCallback((item: AmiiboData) => item.image, []);

  return (
    <SafeAreaView edges={['bottom', 'left', 'right']} style={styles.container}>
      <FlashList
        contentContainerStyle={styles.listContainer}
        data={amiiboList}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
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
    paddingBottom: 80,
  },
});

export default memo(AmiibosByCategory);
