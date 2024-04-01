import { NotFoundError } from "../../Components/Errors/404Error";
import { TemplatePage } from "../../Components/Template/TemplatePage";

export const NotFoundErrorPage = () => {
    return(
        <>
            <TemplatePage>
                <NotFoundError/>
            </TemplatePage>
        </>
    )
}