'use strict';

var React = require('react-native');
var {
  AppRegistry,
  BackAndroid,
  Navigator,
  StyleSheet,
  ToolbarAndroid,
  View,
} = React;

var MovieScreen = require('./MovieScreen');
var SearchScreen = require('./SearchScreen');

var _navigator;
BackAndroid.addEventListener('hardwareBackPress', () => {
  if (_navigator && _navigator.getCurrentRoutes().length > 1) {
    _navigator.pop();
    return true;
  }
  return false;
});

var RouteMapper = function(route, navigationOperations, onComponentRef) {
  _navigator = navigationOperations;
  if (route.name === 'search') {
    return (
      <SearchScreen navigator={navigationOperations} />
    );
  } else if (route.name === 'movie') {
    return (
      <View style={{flex: 1}}>
        <ToolbarAndroid
          actions={[]}
          navIcon={require('image!android_back_white')}
          onIconClicked={navigationOperations.pop}
          style={styles.toolbar}
          titleColor="white"
          title={route.movie.title} />
        <MovieScreen
          style={{flex: 1}}
          navigator={navigationOperations}
          movie={route.movie}
        />
      </View>
    );
  }
};

var MoviesApp = React.createClass({
  render: function() {
    var initialRoute = {name: 'search'};
    return (
      <Navigator
        style={styles.container}
        initialRoute={initialRoute}
        configureScene={() => Navigator.SceneConfigs.FadeAndroid}
        renderScene={RouteMapper}
      />
    );
  }
});


var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  toolbar: {
    backgroundColor: '#a9a9a9',
    height: 56,
  },
});


React.AppRegistry.registerComponent('MoviesApp', () => MoviesApp);