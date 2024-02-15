import { useEffect, useState } from "react";

export default function useLocalStroage({ key, value}) {
    console.log(key)
  const [gnData, SetGnData] = useState(() => {
    try {
      const storedValue = window.localStorage.getItem(key);
      return storedValue ? JSON.parse(storedValue) : value;
    } catch (err) {
      console.error(err);
      return undefined;
    
    }
  });
  useEffect(() => {
    try {
      window.localStorage.setItem(key, JSON.stringify(gnData));
    } catch (err) {
      console.error(err.message);
    }
  }, [key, gnData]);
  return [gnData, SetGnData];
}
