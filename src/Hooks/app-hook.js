import { useContext } from "react";
import { AppContext } from "../Providers/app-provider";

const useApp = () =>{
    const {
        stringState,
        greet
    } = useContext(AppContext)

    return {
        stringState,
        greet
    }

}
export default useApp