import { createContext, useState } from "react";

const AppContext = createContext()

export default AppContext

export const AppProvider = ({children}) => {
    const [isBlurred, setIsBlurred] = useState(false)

    const blurBg = () => {
        setIsBlurred(true)
    }

    const removeBlur = () => {
        setIsBlurred(false)
    }

    const contextData = {
        isBlurred,
        blurBg,
        removeBlur
    }

    return (
        <AppContext.Provider value={contextData}>
            {children}
        </AppContext.Provider>
    )
}