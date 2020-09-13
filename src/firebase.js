import firebase from 'firebase'


const firebaseApp = firebase.initializeApp({
        apiKey: "AIzaSyAXTzrQoCvRtPUC6pfsHWXXAnpeRonpSFU",
        authDomain: "shop-cart-d0315.firebaseapp.com",
        databaseURL: "https://shop-cart-d0315.firebaseio.com",
        projectId: "shop-cart-d0315",
        storageBucket: "shop-cart-d0315.appspot.com",
        messagingSenderId: "985633186152",
        appId: "1:985633186152:web:2770366311bd888f95f6dd"
});


  const auth  = firebase.auth();

  export { auth };