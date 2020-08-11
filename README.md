# For Browser (PWA)


```bash
git pull git@github.com:Jonarod/Ionic-vue-capacitor-pwa-starter.git
cd Ionic-vue-capacitor-pwa-starter
npm i
```

To make changes and see them live on a browser:

```
npm run serve
```

To make build before publishing the app:

```
npm run build
```


# For Android

First of all, download and install Android Studio, following instructions here: []()


Then,

```bash
git pull git@github.com:Jonarod/Ionic-vue-capacitor-pwa-starter.git
cd Ionic-vue-capacitor-pwa-starter
npm i
npm run build
ionic capacitor copy android
```

Connect an Android device using USB, using "USB Debugging" mode and "File Transfer".
Then check that adb can recognize the device:

```
adb devices
```

Now

```bash
npx cap open android
```
Let Android Studio open, and load, then click the Play button. Wait for gradle to build the project, then it should install the app into the phone.

