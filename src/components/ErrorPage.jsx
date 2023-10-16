import { useRouteError } from "react-router-dom";

function ErrorPage() {
    const error = useRouteError()
    return <div>Error Halaman Tidak Diteemukan</div>
}

export default ErrorPage