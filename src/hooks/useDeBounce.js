import { useState, useEffect } from "react"

export const useDeBounce = (value, delay) => {
  const [debounceValue, setDebounceValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebounceValue(value);
    }, delay)

    return () => clearTimeout(handler)
  }, [value, delay])

  return debounceValue;
}