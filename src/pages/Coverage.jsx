import { useLoaderData } from "react-router"

const Coverage = () => {
    const loadData = useLoaderData()
    console.log(loadData);
    
    return (
        <div>Coverage</div>
    )
}

export default Coverage