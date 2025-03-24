import { Image, StyleSheet, Platform } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { Text } from 'react-native';
import { View } from 'react-native';
export default function HomeScreen() {
  return (
    <View>
    <Text> Oh denise sai da live filha</Text>
    <Image 
      style={{ width: 300 , height: 300 }}
      source={{uri: 'https://s2.glbimg.com/O23UOPFNHW0wBG4O3OTgECObi_Q=/0x0:620x722/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_5dfbcf92c1a84b20a5da5024d398ff2f/internal_photos/bs/2022/G/B/ZAPKVkS5mlEdst0i8qzQ/2019-07-20-fernanda.jpg'}}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  textStyle: {
    backgroundColor: 'white',
  },
});

