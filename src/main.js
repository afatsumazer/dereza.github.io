// The Client API can be used here. Learn more: gridsome.org/docs/client-api
export default function (Vue, { router, head, isClient }) {
 if (isClient) {
   Vue.use(require('vue-script2'));
   Vue.use(require('vue-google-adsense/dist/Adsense.min.js'));
   Vue.use(require('vue-google-adsense/dist/InArticleAdsense.min.js'));
   Vue.use(require('vue-google-adsense/dist/InFeedAdsense.min.js'));
 }
}
