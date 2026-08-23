import { ItemWrapper, StepLabel, StepTitle, StepDescription } from "./HowIWorkSection.styled"

export const HowIWorkItem = ({ step, title, description }) => {
    return (
        <ItemWrapper>
            <StepLabel>
                {step}
            </StepLabel>
            <StepTitle>
                {title}
            </StepTitle>
            <StepDescription>
                {description}
            </StepDescription>
        </ItemWrapper>
    )
}