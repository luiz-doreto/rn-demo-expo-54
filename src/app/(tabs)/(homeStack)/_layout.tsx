import { Stack } from 'expo-router';

const HomeStackLayout = () => {
  return (
    <Stack screenOptions={{ headerBackButtonDisplayMode: 'minimal' }}>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen
        name="[categoryName]"
        options={({ route }) => ({
          title:
            (route.params as { categoryName: string })?.categoryName ||
            'Category',
        })}
      />
    </Stack>
  );
};

export default HomeStackLayout;
