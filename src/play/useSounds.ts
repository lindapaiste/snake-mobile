import {useEffect, useMemo, useState} from "react";
import {Audio, AVPlaybackStatus} from "expo-av";
import {PlaySound, SoundEvent} from "../types";
import {Sound} from "expo-av/build/Audio/Sound";
import {SOUND_EVENTS, SOUNDS} from "../constants";

export interface Returns {
    isLoaded: boolean;
    hasError: boolean;
    playSound: PlaySound;
}

/**
 * this example creates a new sound object and unloads it each time a sound is played:
 * https://heartbeat.fritz.ai/how-to-build-a-xylophone-app-with-audio-api-react-native-and-expo-7d6754a0603c
 *
 * this one is what I want -- preloads all and uses replayAsync:
 * https://antenna.io/blog/2019/05/preload-and-replay-sounds-in-expo/
 */
export default (): Returns => {

    const [hasError, setHasError] = useState(false);

    const [countLoaded, setCountLoaded] = useState(0);

    const isLoaded = countLoaded === SOUND_EVENTS.length;

    /**
     * rather than using state for sound objects, just use a dictionary.
     * the sound objects will never be replaced, but the object itself will change it's internal state based on functions called on it
     */
    //const [soundObjects, setSoundObjects] = useState<Partial<Record<SoundEvent, Sound>>>({});
    /**
     * memo just stores an empty Sound for each event, but doesn't load anything
     * won't replay because SOUND_EVENTS is a constant
     */
    const soundObjects = useMemo(() => {
        return Object.fromEntries(
            SOUND_EVENTS.map(event => [event, new Audio.Sound()])
        ) as Record<SoundEvent, Sound>
    }, [SOUND_EVENTS]);

    /**
     * useEffect to load once on mount and unload on unmount
     */
    useEffect( () => {
        loadAll();
        return unloadAll;
    })

    /**
     * loops through the events calling loadAsync on each Sound object
     */
    const loadAll = () => {
        SOUND_EVENTS.forEach(event => {
            const sound = SOUNDS[event];
            soundObjects[event].loadAsync(sound).then(processStatus)
        })
    }

    /**
     * function to unload. could return promise via Promise.all but don't need to
     */
    const unloadAll = () => {
        Object.values(soundObjects).forEach( obj => obj.unloadAsync() );
    }

    /**
     * AVPlaybackStatus is a union type where it could have a lot of information, or it could just have an
     * optional error.  The switch depends on the value of isLoaded.  Could store the info as a "meta" prop but right
     * now just checking for success or failure.
     */
    const processStatus = (status: AVPlaybackStatus) => {
        if (!status.isLoaded) {
            setHasError(true);
        } else {
            setCountLoaded(count => count + 1);
        }
    }

    /**
     * with everything loaded, playSound function becomes trivial
     */
    const playSound = async (event: SoundEvent) => {

        console.log("attempting to play " + event);
        try {
            await soundObjects[event].replayAsync();
        } catch (error) {
            console.warn(error);
        }
    }

    return {
        isLoaded,
        hasError,
        playSound,
    }

}
