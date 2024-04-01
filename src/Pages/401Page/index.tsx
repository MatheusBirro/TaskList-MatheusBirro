import { UnauthorizedError } from "../../Components/Errors/401Error";
import { TemplatePage } from "../../Components/Template/TemplatePage";

export const UnauthorizedErrorPage = () => {
    return(
        <>
            <TemplatePage>
                <UnauthorizedError/>
            </TemplatePage>
        </>
    )
}