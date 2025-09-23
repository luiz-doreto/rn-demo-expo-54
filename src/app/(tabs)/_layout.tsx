import { NativeTabs, Icon, Label } from 'expo-router/unstable-native-tabs';

const TabsLayout = () => (
  <NativeTabs>
    <NativeTabs.Trigger name="(homeStack)">
      <Label>All Amiibos</Label>
      <Icon sf="list.bullet.rectangle.portrait" drawable="ic_menu_gallery" />
    </NativeTabs.Trigger>
    <NativeTabs.Trigger name="favorites">
      <Icon sf="star.fill" drawable="ic_menu_compass" />
      <Label>Favorites</Label>
    </NativeTabs.Trigger>
  </NativeTabs>
);

export default TabsLayout;
