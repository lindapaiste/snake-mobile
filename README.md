# Snake

I first created a [web version](https://github.com/lindapaiste/snake) of Snake.  Then I decided that it should be an app!  So I forked the project and rewrote it in `react-native`.  I might eventually merge the two with `react-native-web`.

## Stack
 - Expo
 - React Native
 - TypeScript

### Packages

 - Swipes detected with `react-native-gesture-handler`
 - Screen size detected with `@react-native-community/hooks`
 - Sound effects loaded with `expo-av`
 - Font loaded with `expo-font` and `@expo-google-fonts`
 - Save high score to device with `@react-native-community/async-storage`
 - External links with `expo-linking`
 - My own audio icon from an SVG path with `react-native-svg`
 - Basic layout components from my own package `@lindapaiste/react-native-layout`