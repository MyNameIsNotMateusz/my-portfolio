import { ThemeToggleStyled } from "./Navbar.styled"

export const ThemeToggle = ({ isDark, setIsDark }) => {

    return (
        <ThemeToggleStyled onClick={() => setIsDark((prev) => !prev)} $isDark={isDark}>
            <span />
            <span>
                <span />
                <span />
                <span />
                <span />
            </span>
            <span />
        </ThemeToggleStyled>
    )
}