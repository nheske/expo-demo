# expo-demo

Create project with 
```
expo init react-nav-expo
```
then choose:
```
    tabs (TypeScript)     several example screens and tabs using react-navigation and TypeScript
```
I added my demo screens.

```
    npm install @react-navigation/native @react-navigation/stack @react-native-community/masked-view @react-navigation/drawer @react-navigation/material-bottom-tabs react-native-paper

    expo install react-native-gesture-handler react-native-reanimated react-native-screens react-native-safe-area-context
```
    <PaperProvider>
      <NavigationContainer>
        <AuthStackNavigator/>
      </NavigationContainer>
    </PaperProvider>

Find icons here: [react-native-vector-icons](https://github.com/oblador/react-native-vector-icons/blob/master/glyphmaps/MaterialCommunityIcons.json)