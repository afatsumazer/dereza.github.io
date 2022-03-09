![This is an image](https://myoctocat.com/assets/images/base-octocat.svg)
[![install size](https://packagephobia.com/badge?p=adsense)](https://packagephobia.com/result?p=adsense)
import Vue from 'vue'
import Ads from 'vue-google-adsense'

Vue.use(require('vue-script2'))

Vue.use(Ads.AutoAdsense, { adClient: 'YOUR_GOOGLE_AD_CLIENT', isNewAdsCode: true })
