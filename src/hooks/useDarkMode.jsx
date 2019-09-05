import { useEffect } from 'react'
import useLocalStorage from './useLocalStorage'

const useDarkMode = initialValue => {
    const [displayMode, setDisplayMode] = useLocalStorage('Dark Mode', initialValue)

    useEffect(() => {
        document.body.className = displayMode ? 'dark-mode' : ''
        const chartLines = document.getElementsByClassName('recharts-line-curve')
        // console.log(chartLines)
        Array.prototype.forEach.call(chartLines, function(line) {
            line.setAttribute('stroke', displayMode ? '#f68819' : '#8884d8')
        })
        const chartDots = document.getElementsByClassName('recharts-line-dot')
        // console.log(chartDots)
        Array.prototype.forEach.call(chartDots, function(dot) {
            dot.setAttribute('stroke', displayMode ? '#f68819' : '#8884d8')
        })


    }, [displayMode])

    return [displayMode, setDisplayMode]
}

export default useDarkMode