import AsyncStorage from "@react-native-community/async-storage";
import {useEffect, useState} from "react";

/**
 * this app needs extremely little storage, so use AsyncStorage directly rather than redux-persist
 * AsyncStorage stores everything as strings, but can store complex objects using JSON.stringify
 *
 * needs to store:
 *  - high score
 *  - sound on/off setting
 *
 * could store:
 *  - games played
 *  - score history
 *
 * note: can continue to store high score in state and useEffect to push changes to storage, or can read from storage
 * directly
 */

/**
 * like a useState tuple but with a third value for hasErrors
 */
export type Returns<T> = [
    T,
    (value: T) => void,
    boolean
]

const useStoredValue = <T>(key: StorageKeys, fallback: T): Returns<T> => {

    /**
     * don't want to have to fetch from storage every time, so store the found value
     */
    const [fetched, setFetched] = useState<T>();

    /**
     * right now only storing errors on retrieval
     */
    const [hasError, setHasError] = useState(false);

    /**
     * load the value once on mount
     */
    useEffect(() => {
        fetch()
    }, [fallback]);
    const fetch = async () => {
        try {
            const stored = await AsyncStorage.getItem(key);
            /**
             * set stored value to the fallback it didn't exist - null value means nothing stored
             */
            if (stored === null) {
                await AsyncStorage.setItem(key, JSON.stringify(fallback));
            } else {
                setFetched(JSON.parse(stored));
            }
        } catch (e) {
            setHasError(true);
        }
    }

    /**
     * update changes locally as well as pushing so that the returned value stays correct
     */
    const handleUpdate = (value: T) => {
        setFetched(value);
        AsyncStorage.setItem(key, JSON.stringify(value));
    }

    /**
     * always return a value
     */
    const value = fetched === undefined ? fallback : fetched;

    return [
        value,
        handleUpdate,
        hasError
    ]
};

/**
 * create specific instance of useStoredValue for this app
 */

enum StorageKeys {
    IS_AUDIO = "isAudio",
    TOP_SCORE = "topScore",
}

export const useIsAudio = () => useStoredValue(StorageKeys.IS_AUDIO, true);

export const useTopScore = () => useStoredValue(StorageKeys.TOP_SCORE, 0);
