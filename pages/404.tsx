import Inform from "@/components/Inform";

const NotFound = () => {
    return (
        <div className="flex min-h-screen mt-10 mb-10 relative flex-col">
            <Inform width={"15rem"} message="Page not found" />
        </div>
    )
}
export default NotFound;