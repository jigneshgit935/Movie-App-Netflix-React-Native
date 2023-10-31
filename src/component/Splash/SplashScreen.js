import { Image, StatusBar, StyleSheet, Text, View } from 'react-native';
import React, { useEffect } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { myColors } from '../../utils/Theme';
import { useRoute } from '@react-navigation/native';

const SplashScreen = ({ navigation }) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Home');
    }, 3000);
  });

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="transparent" hidden />
      <Image
        style={styles.logo}
        source={{
          uri: 'https://media.zenfs.com/en/hypebeast_936/55dd2178cbbd27b2cdba3f8985a08d48',
        }}
      />
    </SafeAreaView>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: myColors.primary,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: '70%',
    height: 200,
  },
});
