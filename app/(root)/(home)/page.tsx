import { UserButton } from "@clerk/nextjs";

const Home = () => {
    return (
        <div>
            <UserButton afterSignOutUrl="/" />
            Home
        </div>
    )
}
export default Home