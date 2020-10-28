- npx react-native init demox
- npx react-native run-android


# Variables
1. normal variable - no side-effect to UI
2. state variable  - has side-effect to UI (changable internally)
3. property variable - has side-effect to UI (changable externally)

# lib  (https://reactnativeelements.com/docs)
yarn add react-native-elements react-native-vector-icons
npx react-native link react-native-elements
npx react-native link react-native-vector-icons


# lib navigation
yarn add @react-navigation/native @react-navigation/stack @react-navigation/bottom-tabs
yarn add react-native-reanimated react-native-gesture-handler react-native-screens react-native-safe-area-context @react-native-community/masked-view

yarn add @react-native-community/async-storage  react-native-permissions 

npx react-native link react-native-gesture-handler
npx react-native link react-native-reanimated
npx react-native link react-native-screens
npx react-native link react-native-safe-area-context
npx react-native link @react-native-community/masked-view      
npx react-native link @react-native-community/async-storage    
npx react-native link react-native-permissions

yarn add axios

https://cocoapods.org/

node server.js
npx nodemon server.js


yarn add express formidable fs-extra body-parser


https://www.youtube.com/watch?v=iRyrJ3VaN0U&t=683s


#Fix No Permission Handler Detect
1. https://github.com/react-native-community/react-native-permissions#ios
$ npm install --save react-native-permissions
# --- or ---
$ yarn add react-native-permissions


2. Add this code into Podfile
  permissions_path = '../node_modules/react-native-permissions/ios'
  pod 'Permission-Contacts', :path => "#{permissions_path}/Contacts.podspec"
  pod 'Permission-Microphone', :path => "#{permissions_path}/Microphone.podspec"
  pod 'Permission-Notifications', :path => "#{permissions_path}/Notifications.podspec"
  pod 'Permission-PhotoLibrary', :path => "#{permissions_path}/PhotoLibrary.podspec"
  pod 'Permission-Camera', :path => "#{permissions_path}/Camera.podspec"

3. Remove DerivedData Folder  ~/Library/Developer/Xcode/DerivedData/


https://medium.com/@rossbulat/react-native-lists-load-more-by-scrolling-378a1c5f56a6