import React, {Component} from 'react';
import {NativeAdsManager, AdSettings} from 'react-native-fbads';
// import {nativeAdPlacementId} from '../Variables';

import {SafeAreaView} from 'react-native';
import NativeAdView from './NativeAdView';

export default class NativeAd extends Component {
  adsManager = new NativeAdsManager('782051144079764');

  render() {
    return (
      <SafeAreaView
        style={{
          justifyContent: 'center',
          backgroundColor: '#fff',
          padding: 20,
        }}>
        <NativeAdView
          adsManager={this.adsManager}
          adChoicePosition="bottomRight"
        />
      </SafeAreaView>
    );
  }
}
