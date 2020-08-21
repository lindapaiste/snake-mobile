import {Text, TextProps, View} from "react-native";
import GreenText from "../components/Text";
import Title from "../components/Title";
import React from "react";
import * as Linking from "expo-linking";

export const Paragraph = ({children}: {children: string}) => (
    <Text
        style={{
            color: "white",
        }}
    >{children}</Text>
);

/**
 * helper for linking to external privacy policies
 */
export const Link = ({href, children}: {href: string, children: string}) => (
    <Text
        onPress={() => Linking.openURL(href)}
    >
        {children}
    </Text>
);

export const Subheading = ({children}: {children: string}) => Title({vw: 4, children})

export default () => {
    return (
<View>

    <Title vw={8}>Privacy Policy and Terms & Conditions</Title>

    <Paragraph>Last updated August 20, 2020</Paragraph>

    <Subheading>Overview</Subheading>
    <Paragraph>Snek Game is a free app built by Linda Paiste ("we" or "us" or "our"). This mobile application ("app" or "game") does not require or collect any personally identifiable information about our users ("user" or "you"). We do collect general information about how you use the game, such as your scores and how many games you play, in order to make the app better for everyone. If the app crashes, we may collect technical information about your device and its operating system so that we can make improvements. These analytics and crash reporting services are administered by the third-party services Google Analytics for Firebase and Firebase Crashlytics.</Paragraph>

    <Paragraph>We may make changes to what information we collect and who we share it with in future versions of the app, so it is important that you view this page periodically to stay up to date. You will be informed of changes to our policies through the last updated date on this page.</Paragraph>

    <Paragraph>By accessing our app, you are agreeing to be bound by these terms of service and privacy policies. If you do not agree with any of these terms, you are prohibited from using or accessing the app and should delete it from your device.</Paragraph>

    <Subheading>Third Parties</Subheading>
    <Paragraph>This app makes use of third party services which declare their own Terms and Conditions. You may review the terms and conditions of these service providers by clicking on the links below:</Paragraph>

    <Link href={"https://www.google.com/policies/privacy/"}>Google Play Services</Link>
    <Link href={"https://firebase.google.com/policies/analytics"}>Google Analytics for Firebase</Link>
    <Link href={"https://firebase.google.com/support/privacy/"}>Firebase Crashlytics</Link>

    <Subheading>Log Data</Subheading>
    <Paragraph>If you encounter an error while using the app, I collect data and information (through third party products) on your phone called Log Data. This Log Data may include information such as your device Internet Protocol ("IP") address, device name, operating system version, the configuration of the app when utilizing my app, the time and date of your use of the app, and other statistics.</Paragraph>

    <Subheading>Cookies</Subheading>
    <Paragraph>Cookies are files with a small amount of data that are commonly used as anonymous unique identifiers. These are sent to your browser from the websites that you visit and are stored on your device's internal memory. This app does not use these "cookies" explicitly. However, the app may use third party code and libraries that use "cookies" to collect information and improve their services. You have the option to either accept or refuse these cookies and know when a cookie is being sent to your device. If you choose to refuse our cookies, you may not be able to use some portions of this app.</Paragraph>

    <Subheading>Children's Privacy</Subheading>
    <Paragraph>We do not knowingly solicit information from or market to children under the age of 13. If you become aware of any data we have collected from children under age 13, please contact us using the contact information provided below.</Paragraph>

    <Subheading>Disclaimer</Subheading>
<Paragraph>This app is provided on an 'AS IS' basis. We makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties.</Paragraph>

    <Subheading>Limitations</Subheading>
    <Paragraph>In no event shall Linda Paiste be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use this app.</Paragraph>

    <Subheading>Contact</Subheading>
    <Paragraph>If you have any questions about these policies you may contact Linda Paiste, the developer of this app, at </Paragraph>
    <Link href={"mailto:lindapaiste@gmail.com"}>lindapaiste@gmail.com</Link>


</View>
    )
}
