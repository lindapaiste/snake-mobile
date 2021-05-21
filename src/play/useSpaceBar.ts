/**
 * Pause handler needs an analogous hook for native,
 * even though this functionality is not required.
 */
const useSpaceBar: (onPress?: () => void) => void = () => undefined;
export default useSpaceBar;