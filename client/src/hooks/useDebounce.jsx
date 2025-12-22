import React, { useEffect, useState } from 'react'

function useDebounce(value, delay) {

  const [deBounceValue, setDeBounceValue] = useState(value);

  useEffect(() => {

    const timer = setTimeout(() => setDeBounceValue(value), delay);

    return () => clearTimeout(timer);

  }, [value, delay])

  return deBounceValue;
}

export default useDebounce