# vue-3-firestore

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
# vue-todo
### firebase.js파일로 firebase 설정
```
import firebase from "firebase/app";
import "firebase/firestore";

let config = {
    apiKey: "xxx",
    authDomain: "xxx",
    projectId: "xxx",
    storageBucket: "xxx",
    messagingSenderId: "xxx",
    appId: "xxx"
};

firebase.initializeApp(config);
export default firebase.firestore();
```
