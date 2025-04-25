import { useLocation, useNavigate } from "react-router-dom";

const useHandleClick = () => {
    const navigate = useNavigate()
    const location = useLocation()

    return (path: string) => {
        if (location.pathname !== path) {
            navigate(path)
        }
    }
}

export default useHandleClick
