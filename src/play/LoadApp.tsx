import React, {useState} from 'react';
import {PressStart2P_400Regular, useFonts} from "@expo-google-fonts/press-start-2p";
import {FlexColumn} from "@lindapaiste/react-native-layout";
import TitleScreen from "../screens/Splash";
import useSounds from "./useSounds";
import {FontSizeProvider} from "../text/FontSizeProvider";

const Game = React.lazy(() => import("./Game"));

/**
 * preload fonts and audio
 * show splash screen until start has been clicked
 * from then on, Game handles everything
 */
export default function LoadApp() {

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
            return (
                <React.Suspense fallback={(
                    <TitleScreen onPressStart={() => undefined} isReady={false}/>
                )}>
                    <Game playSound={audio.playSound}/>
                </React.Suspense>
            )
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
    <FontSizeProvider>
        <FlexColumn
            style={{
                flex: 1,
                backgroundColor: "black",
                alignItems: "stretch",
            }}
        >
            {renderContent()}
        </FlexColumn>
    </FontSizeProvider>
);
}
