import React, { useState } from 'react'

function useAccordions() {
    const [currentIndex, setCurrentIndex] = useState<number | null>(null)

    function handleSetCurrentIndex(index: number) {
        if (index == currentIndex) {
            setCurrentIndex(null)
            return;
        }

        setCurrentIndex(index)
    }

  return {
    handleSetCurrentIndex,
    currentIndex,
  }
}

export default useAccordions