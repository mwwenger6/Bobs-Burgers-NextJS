import Link from "next/link";

export const getStaticProps = async () => {
    const res = await fetch("https://bobsburgers-api.herokuapp.com/characters/")
    const data = await res.json()
    console.log(data)
    return {
        props: {
            chars: data
        }
    }
}

const ViewChars = ({chars}) => {

    let charsData = (chars && chars.length > 0)
        ? chars.map(
            char => {
                return (
                    <Link key={char.id} href={`/characters/${char.id}`}>
                        <div style={{display: 'flex', alignItems: 'center', border: '1px solid black', backgroundColor: '#f0f0f0', cursor: 'pointer'}}>
                            <img src={char.image} style={{height: "150px", width: "auto"}}></img>
                            <div style={{marginLeft: '10px', color: 'blue'}}>{char.name}</div>
                        </div>
                    </Link>
                )
            }
        )
        : (
            <div>
                No Characters
            </div>
        )
    charsData = (chars && chars.length > 0)
        ? (<div className="collection">{charsData}</div>) : charsData;

    return (
        <>
            <h3>Bob's Burgers Characters</h3>
            {charsData}
        </>
    )
}

export default ViewChars;
