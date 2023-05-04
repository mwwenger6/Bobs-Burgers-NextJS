import {Inter} from 'next/font/google'
import {useRouter} from "next/router";


const inter = Inter({subsets: ['latin']})

export default function Home() {

    const router = useRouter();

    const viewChars = async () => {
        await router.push("/characters")
    }

    return (
        <>
            <div>
                <h1>Welcome to the Bob's Burgers Characters App!</h1>
                <button className="red btn" onClick={viewChars}>See Characters</button>
            </div>
        </>
    )
}
