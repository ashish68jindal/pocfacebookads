import React, {useEffect} from 'react';
import {
  StyleSheet,
  Dimensions,
  TouchableHighlight,
  Text,
  View,
} from 'react-native';
import {AdSettings} from 'react-native-fbads';
import {SafeAreaView} from 'react-native-safe-area-context';

const {width} = Dimensions.get('window');

const Main = ({navigation}) => {
  const callAds = async () => {
    AdSettings.setLogLevel('debug');
    AdSettings.addTestDevice(AdSettings.currentDeviceHash);
    const requestedStatus = await AdSettings.requestTrackingPermission();

    if (requestedStatus === 'authorized' || requestedStatus === 'unavailable') {
      AdSettings.setAdvertiserIDCollectionEnabled(true);
      // Both calls are not related to each other
      // FB won't deliver any ads if this is set to false or not called at all.
      AdSettings.setAdvertiserTrackingEnabled(true);
    }
  };

  useEffect(() => {
    callAds();

    return () => {
      AdSettings.clearTestDevices();
    };
  }, []);

  return (
    <View>
      <SafeAreaView style={styles.container}>
        <TouchableHighlight
          underlayColor="#b2bbbc"
          style={styles.button}
          onPress={() => navigation.navigate('React')}>
          <Text style={styles.buttonText}>Native Ad</Text>
        </TouchableHighlight>
        <TouchableHighlight
          underlayColor="#b2bbbc"
          onPress={() => console.log('Actions.bannerAd()')}
          style={styles.button}>
          <Text style={styles.buttonText}>Banner Ad</Text>
        </TouchableHighlight>
        <TouchableHighlight
          underlayColor="#b2bbbc"
          onPress={() => console.log('Actions.interstitialAd()')}
          style={styles.button}>
          <Text style={styles.buttonText}>Interstitial Ad</Text>
        </TouchableHighlight>
      </SafeAreaView>
    </View>
  );
};

export default Main;

const styles = StyleSheet.create({
  container: {
    width,
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    elevation: 3,
    borderRadius: 10,
    paddingVertical: 10,
    width: width - 80,
    alignItems: 'center',
    marginVertical: 5,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  buttonText: {
    color: '#a70f0a',
  },
});
