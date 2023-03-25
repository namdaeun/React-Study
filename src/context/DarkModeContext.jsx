import { createContext, useState } from "react";

// context만듦
export const DarkModeContext = createContext();

export function DarkModeProvider({children}) {
    // 우산 컴포넌트
    const [darkMode, setDarkMode] = useState(false);
    const toggleDarkMode = () => setDarkMode((mode) => !mode);
    return (
        // 자식 컴포넌트와 공유하고 싶은 데이터는 value에 저장
        <DarkModeContext.Provider value={{ darkMode, toggleDarkMode }}>
            {children}
        </DarkModeContext.Provider>
    )

}