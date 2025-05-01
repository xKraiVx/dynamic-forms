export const loadState = <T>(key: string): T | undefined => {
  try {
    const serializedState = localStorage.getItem(key);
    if (!serializedState) return undefined;
    return JSON.parse(serializedState);
  } catch (err: unknown) {
    console.log("Error loading state from localStorage", err);
  }
};

export const saveState = <T>(state: T, key: string) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem(key, serializedState);
  } catch (err) {
    console.log("Error saving state to localStorage", err);
  }
};
