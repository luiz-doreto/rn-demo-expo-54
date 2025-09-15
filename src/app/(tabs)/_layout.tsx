import { NativeTabs, Icon, Label } from 'expo-router/unstable-native-tabs';

// const TabsLayout = () => <Tabs />;

const TabsLayout = () => (
  <NativeTabs>
    <NativeTabs.Trigger name="index">
      <Label>Home</Label>
      <Icon sf="house.fill" drawable="ic_menu_gallery" />
    </NativeTabs.Trigger>
    <NativeTabs.Trigger name="settings">
      <Icon sf="gear" drawable="ic_menu_compass" />
      <Label>Settings</Label>
    </NativeTabs.Trigger>
  </NativeTabs>
);

export default TabsLayout;
