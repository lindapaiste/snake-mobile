# Snake

First I created a [web version](https://github.com/lindapaiste/snake) of Snake.  Then I decided that it should be an app!  So I forked the project and rewrote it in `react-native`.

This repo supports both native and web through `react-native-web`.  It uses `.web.tsx`  file extensions to bundle two different versions of the app.

## Stack
- Expo
- Metro Bundler
- React Native
- TypeScript

### Packages

- Swipes detected with `react-native-gesture-handler`
- Sound effects loaded with `expo-av`
- Font loaded with `expo-font` and `@expo-google-fonts`
- Save high score to device with `@react-native-community/async-storage`
- External links with `expo-linking`
- My own audio icon from an SVG path with `react-native-svg`
- Basic layout components from my own package `@lindapaiste/react-native-layout`