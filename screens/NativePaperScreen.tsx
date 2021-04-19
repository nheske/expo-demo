import * as React from 'react';
import { BottomNavigation, Text } from 'react-native-paper';
import FlexboxScreen from './FlexboxScreen';

const MusicRoute = () => <Text>Music</Text>;
const AlbumsRoute = () => <Text>Albums</Text>;
const RecentsRoute = () => <Text>Recents</Text>;
//const FlexboxRoute = () => <Text>Flex</Text>;
const FlexboxRoute = FlexboxScreen;

const NativePaperScreen = () => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    // { key: 'music', title: 'Music', icon: 'queue-music' },
    { key: 'music', title: 'Music', icon: 'music-clef-treble' },
    { key: 'albums', title: 'Albums', icon: 'album' },
    { key: 'recents', title: 'Recents', icon: 'history' },
    { key: 'flex', title: 'Flex', icon: 'van-utility' },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    music: MusicRoute,
    albums: AlbumsRoute,
    recents: RecentsRoute,
    flex: FlexboxRoute,
  });

  return (
    <BottomNavigation
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScene}
    />
  );
};

export default NativePaperScreen; 