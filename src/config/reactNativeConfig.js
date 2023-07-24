const ReactNative = [
    {
        heading: "React Native",
        pathname: "/reactnative",
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
                title: "Setup new project",
                keywords: "setup react native project",
                id: "setup_react_native_project",
                list: [
                    `npm i -g expo-cli`,
                    `expo init ProjectName`
                ]
            },
            {
                title: "Debugging native apps",
                keywords: "Debugging native apps",
                id: "Debugging native apps",
                list: [
                    `sudo npm i -g react-devtools`,
                    `run: react-devtools`
                ]
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
                },
                {
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
            },
            {
                title: "React Navigation",
                keywords: "React Navigation",
                id: "react_navigation",
                description: ``,
                code: [{
                    title: '',
                    code: `npm install @react-navigation/native
                    
// Installing dependencies into an Expo managed project

npx expo install react-native-screens react-native-safe-area-context`
                },
                {
                    title: 'Native Stack Navigator',
                    list: [''],
                    code: `// npm install @react-navigation/native-stack

<Stack.Navigator initialRouteName="Home">
    <Stack.Screen name="Home" component={Home} />
    <Stack.Screen name="Notifications" component={Notifications} />
    <Stack.Screen name="Profile" component={Profile} />
    <Stack.Screen name="Settings" component={Settings} />
</Stack.Navigator>`
                }],
                note: `initialRouteName to setup the initial route`
            },
            {
                title: "ActivityIndicator",
                keywords: "ActivityIndicator",
                id: "activityindicator",
                description: 'Displays a circular loading indicator.',
                code: [{
                    title: '',
                    code: ` <ActivityIndicator size="small" color="#0000ff" />`
                }]
            },
            {
                title: "Expo ImagePicker",
                keywords: "Expo ImagePicker",
                id: "expo_imagepicker",
                description: `expo-image-picker provides access to the system's UI for selecting images and videos from the phone's library or taking a photo with the camera.`,
                list: [`useCameraPermissions to get the permission to access camera`],
                code: [{
                    title: '',
                    code: `npx expo install expo-image-picker

// app.json (add permission as required)

{
    "expo": {
        "plugins": [
            [
                "expo-image-picker",
                {
                    "photosPermission": "The app accesses your photos to let you share them with your friends."
                    "cameraPermission": "The app accesses your camera to let you share them with your friends."
                    "microphonePermission": "The app accesses your microphone to let you share them with your friends."
                }
            ]
        ]
    }
}`
                },
                {
                    title: 'Image picker function',
                    code: `function ImagePicker() {
const [pickedImage, setPickedImage] = useState();

const [cameraPermissionInformation, requestPermission] = useCameraPermissions();

async function verifyPermissions() {
    if (cameraPermissionInformation.status === PermissionStatus.UNDETERMINED) {
        const permissionResponse = await requestPermission();
        return permissionResponse.granted;
    }

    if (cameraPermissionInformation.status === PermissionStatus.DENIED) {
        Alert.alert(
            'Insufficient Permissions!',
            'You need to grant camera permissions to use this app.'
        );
        return false;
    }

    return true;
}

async function takeImageHandler() {
    const hasPermission = await verifyPermissions();

    if (!hasPermission) {
        return;
    }

    const image = await launchCameraAsync({
        allowsEditing: true,
        aspect: [16, 9],
        quality: 0.5,
    });

    setPickedImage(image.uri);
}

let imagePreview = <Text>No image taken yet.</Text>;

if (pickedImage) {
    imagePreview = <Image style={styles.image} source={{ uri: pickedImage }} />;
}

return (
    <View>
        <View style={styles.imagePreview}>{imagePreview}</View>
        <OutlinedButton icon="camera" onPress={takeImageHandler}>Take Image</OutlinedButton>
    </View>
    );
}`
                },
                ],
            },
            {
                title: "Expo Location",
                keywords: "Expo Location",
                id: "expo_location",
                description: 'expo-location allows reading geolocation information from the device. Your app can poll for the current location or subscribe to location update events.',
                list: [`useForegroundPermissions to get the permission to access location`],
                code: [{
                    title: 'app.json changes',
                    code: `{
    "expo": {
        "plugins": [
            [
                "expo-location",
                {
                "locationAlwaysAndWhenInUsePermission": "Allow $(PRODUCT_NAME) to use your location."
                }
            ]
        ]
    }
}`
                }],
            },
            {
                title: "React navigation native vs stack",
                keywords: "React navigation native vs stack",
                id: "native_vs_stack",
                description: '',
                list: [],
                code: [{
                    title: '',
                    code: ``
                }],
            },
            {
                title: "Ignore logs",
                keywords: "Ignore logs",
                id: "ignore_logs",
                description: '',
                list: [],
                code: [{
                    title: '',
                    code: `LogBox.ignoreLogs(['AsyncStorage has been extracted'])`
                }],
            },
        ]
    }
];

export default ReactNative;
