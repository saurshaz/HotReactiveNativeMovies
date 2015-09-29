

# HotReactiveNativeMovies
react-native movies example with hot-reload(primarily for android) - shall make it work on iOS as well

#STEPS TO RUN

On Android with live Reload and DEBUG
1) `npm run dev`
2) `cd android,`
3) On the device - setup usb debugging
4) connect device
5) `platform-tools/adb reverse tcp:8081 tcp:8081`
6) `platform-tools/adb reverse tcp:8080 tcp:8080` 
7) `platform-tools/adb reverse tcp:8082 tcp:8082` 
8) `./gradlew clean installDebug`
9) shake the device select debug options enable `reload on JS change`

Code as fast as speed now.

**React Native** is a Facebook developed tool set, which enables developer to build world-class application experiences on native platforms using a consistent developer experience based on JavaScript and [React](http://facebook.github.io/react). The focus of React Native is on developer efficiency across all the platforms you care about - **learn once, write anywhere**. 

Supported operating systems are >= Android 4.1 (API 16) and >= iOS 7.0.

Please refer to [the official site](https://facebook.github.io/react-native/) for more detail introduction.

This project is a testing project using [MoviesApp](https://github.com/facebook/react-native/tree/master/Examples/Movies) sample from React Native.

## Development Environment Setup
To develop *React Native* Apps, do the following:

### Setup Development Dependencies
* Install [Homebrew](http://brew.sh/) to manage packages
* Install [Node.js](https://nodejs.org/) 4.0+, or using **nvm** commands
```sh
nvm install node && nvm alias default node
```
* Install [watchman](https://facebook.github.io/watchman/) to watch node file changes
```sh
brew install watchman
```
* Install [flow](http://www.flowtype.org/)
```
brew install flow
```

In order to keep the programs up-to-date, it is recommended to run following periodically
```
brew update && brew upgrade
```

### Setup Reactive Native
* Run following to install
```
npm install -g react-native-cli
```

* To create the initial App project run:
```
react-native init [project-name]
```

* To add a platform to existing project, e.g. adding *Android* to exsiting react Native project
First update the react-native dependency in *package.json* file then run following commands:
```
npm install
react-native android
```

### Project Setup
* git clone this project to your local environment
* run following commands to setup the project environment:
```sh
npm install
```

### Native Development Setup
To develop and run the Apps, there are native underlying environment requirements:
* For iOS
  * require [Xcode](https://developer.apple.com/xcode/downloads/) 6.3+
* For Android
  * Android SDK
  * Further detail regarding Android package setup refer to [here](https://facebook.github.io/react-native/docs/android-setup.html)

## Run the Apps
* To run the iOS App
  * Open *ios/[project-name].xcodeproj* and hit run in Xcode
  * Open *index.ios.js* and start your implementation
  * Hit *Command-R* to reload the App in iOS simulator to see the change
* To run the Android App
  * run following command to run the App in simulator or USB connected device
  ```sh
  react-native run-android
  ```
  * Open *index.android.js* to update your implementation
  * From the simlulator Menu button then select *Reload JS* to see the new changes
  * Run following to see the logs
  ```sh
  adb logcat *:S ReactNative:V ReactNativesJS:V
  ```

# Resources
1. React Native [Getting Started](https://facebook.github.io/react-native/docs/getting-started.html#content) guild
1. React Native [Tutorial](https://facebook.github.io/react-native/docs/tutorial.html#content)
1. React Navtive [component resources](http://www.reactnative.com/)
1. React [Getting Started](http://facebook.github.io/react/docs/getting-started.html) guide
