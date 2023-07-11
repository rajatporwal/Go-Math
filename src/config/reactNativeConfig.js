const ReactNative = [
    {
        heading: "React Native",
        pathname: "/css",
        children: [
            {
                title: "Expo CLI vs React Native CLI",
                keywords: "Expo CLI vs React Native CLI",
                id: "expo_react_native_cli",
                table: [
                    {
                        columns: [
                            {
                                title: "Expo CLI",
                                dataIndex: "expo",
                                key: "expo",
                            },
                            {
                                title: "React Native CLI",
                                dataIndex: "reactnative",
                                key: "reactnative",
                            },
                        ],
                        data: [
                            {
                                expo: "Third party service (free)",
                                reactnative: "By the React Native team & community",
                            },
                            {
                                expo: "Managed app development",
                                reactnative: "Bare bone development (you need to set up way more",
                            },
                            {
                                expo: "Very convenient, less friction'",
                                reactnative: "Less convenienve features",
                            },
                            {
                                expo: "You can leave the Expo ecosystem any time",
                                reactnative: "Easier integration with native source code",
                            }
                        ],
                    },
                ],
            },
            {
                title: "Flat List",
                keywords: "Flat List",
                id: "flat_list",
                description: `Either you can pass key property to DATA object or can extract key using keyExtractor`,
                code: [{
                    title: '',
                    code: `<FlatList
    data={DATA}
    renderItem={renderItem}
    keyExtractor={item => item.id}  // extracts key
    extraData={selectedId}
/>`
                }]
            },
            {
                title: "Ripple effect",
                keywords: "Ripple effect",
                id: "ripple_effect",
                list: [
                    `In android: android_ripple={{ color: '#1234'}}`,
                    `In IOS: style={({ pressed }) => pressed && styles.iosRippleEffect}`
                ]
            },
            {
                title: "Setup new project",
                keywords: "setup react native project",
                id: "setup_react_native_project",
                list: [
                    `npm i -g expo-cli`,
                    `expo init ProjectName`
                ]
            },
            {
                title: "SafeAreaView",
                keywords: "safeareaview",
                id: "safeareaview",
                description: `The purpose of SafeAreaView is to render content within the safe area boundaries of a device. 
                <br /> <br/> It is currently only applicable to iOS devices with iOS version 11 or later. Supports all android devices`,
               note: `It autmatically identifies the height of notch and adds the padding so that content do not overlap notch`
            },
            {
                title: "expo-splash-screen",
                keywords: "expo splash screen",
                id: "expo_splash_screen",
                description: `<b>expo-app-loading</b> tells <b>expo-splash-screen</b> to keep the splash screen visible while the AppLoading component is mounted.
                <br /><br />
                This is useful to download and cache fonts, logos, icon images and other assets that you want to be sure the user has on their device for an optimal experience.`,
                code: [{
                    title: '',
                    code: `SplashScreen.preventAutoHideAsync()
                    
SplashScreen.hideAsync()`
                }],
                note: `expo-app-loading is deprecated`
            },
            {
                title: "Css",
                keywords: "css react native shadow",
                id: "css_react_native",
                code: [{
                    title: 'shadow',
                    code: `// box-shadow does not works in native
                    
// we need to use elevation for shadow's in android

elevation: 4

// for ios: shadowColor, shadowOffset, shadowOpacity, shadowRadius`
                }]
            },
            {
                title: "Screen orientation lock",
                keywords: "Screen orientation lock",
                id: "screen_orientation_lock",
                description: `If you don't want to support multiple screen orientations, you can lock the screen orientation to either portrait or landscape.
                <br /><br />
On iOS, in the General tab and Deployment Info section of Xcode enable the Device Orientation you want to support (ensure you have selected iPhone from the Devices menu when making the changes). For Android, open the AndroidManifest.xml file and within the activity element add 'android:screenOrientation="portrait"' to lock to portrait or 'android:screenOrientation="landscape"' to lock to landscape.
                `,
                code: [{
                    title: '',
                    code: `// app.json

{
    "expo": {
        "orientation": "portrait", // default
    }
}                    `
                }]
            },
            {
                title: "Dimensions API",
                keywords: "Dimensions API",
                id: "dimensions_api",
                description: `useWindowDimensions is the preferred API for React components. Unlike Dimensions, it updates as the window's dimensions update.`,
                code: [{
                    title: 'Dimensions',
                    code: `const deviceWidth = Dimensions.get('window').width;
const deviceWidth = Dimensions.get('window').width;

// it will not rerender if user switch back to default view from portrait`
                }, {
                    title: 'useWindowDimensions',
                    code: `const { width, height } = useWindowDimensions()
                    
// now add inline styles
const marginTopDistance = height < 380 ? 30 : 100;
<View style={[styles.rootContainer, { marginTop: marginTopDistance }]}>`

                }]
            },
            {
                title: "Platform API",
                keywords: "Platform API",
                id: "platform_api",
                description: ``,
                code: [{
                    title: '',
                    code: `const deviceWidth = Dimensions.get('window').width;
const deviceWidth = Dimensions.get('window').width;

// it will not rerender if user switch back to default view from portrait`
                }, {
                    title: 'useWindowDimensions',
                    code: `import {Platform, StyleSheet, Text, ScrollView} from 'react-native';

// 1st way
borderWidth: Platform.OS === 'android' ? 2 : 0

// 2nd way
borderWidth: Platform.select({ ios: 0, android: 2 })

// we can also create platform specific files like: 

Title.android.js
Title.ios.js`

                }]
            }
        ]
    }
];

export default ReactNative;
