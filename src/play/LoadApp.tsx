import React, {useState} from 'react';
import {PressStart2P_400Regular, useFonts} from "@expo-google-fonts/press-start-2p";
import Game from "./Game";
import {FlexColumn} from "@lindapaiste/react-native-layout";
import TitleScreen from "../screens/Splash";
import useSounds from "./useSounds";

/**
 * preload fonts and audio
 * show splash screen until start has been clicked
 * from then on, Game handles everything
 */
export default () => {

    const [fontsLoaded] = useFonts({
        PressStart2P_400Regular
    });

    const [didStart, setDidStart] = useState(false);

    const audio = useSounds();

    /**
     * switch between nothing, splash, and Game
     */
    const renderContent = () => {
        if (!fontsLoaded) {
            return null;
        }
        if (didStart) {
            return <Game playSound={audio.playSound}/>
        } else {
            return (
                <TitleScreen
                    onPressStart={() => setDidStart(true)}
                    isReady={fontsLoaded && audio.isLoaded}
                />
            )
        }
    }

    return (
        <FlexColumn
            style={{
                flex: 1,
                backgroundColor: "black"
            }}
        >
            {renderContent()}
        </FlexColumn>
    );
}

/**
 expo statusbar component allows control of native status bar
 <StatusBar style="auto" />
 **/
