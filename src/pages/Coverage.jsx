import { useLoaderData } from "react-router"
import BangladeshLIve from "./BangladeshLIve";

const Coverage = () => {
    const loadData = useLoaderData()
    return (
        <div>
            <p>Coverage</p>
            <BangladeshLIve loadData={loadData} />
        </div>
    )
}

export default Coverage