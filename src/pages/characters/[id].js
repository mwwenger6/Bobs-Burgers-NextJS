import Link from "next/link";
import {useRouter} from "next/router";

export const getStaticPaths = async () => {
    const res = await fetch("https://bobsburgers-api.herokuapp.com/characters/")
    const data = await res.json()
    console.log(data)

    //  map to an array of path objects with param id
    const paths = data.map(
        characterData => {
            return {
                params: {id: characterData.id.toString()}
            }
        }
    )

    return {
        paths: paths,
        fallback: true
    }
}
export const getStaticProps = async (context) => {
    const id = context.params.id;
    const res = await fetch(`https://bobsburgers-api.herokuapp.com/characters/${id}`)
    const data = await res.json()
    console.log(data)
    return {
        props: {char: data}
    }
}

const PostChar = ({char}) => {
    const router = useRouter();

    const goBack = async () => {
        await router.push('/characters');
    }

    const nextChar = async () => {
        await router.push(`/characters/${char.id+1}`)
    }

    const prevChar = async () => {
        await router.push(`/characters/${char.id-1}`)
    }

    const previousCharacter =()=>{
        if (char.id > 1){
            return(
                <button className="red btn" onClick={prevChar}>Previous Character</button>
            )
        }
    }

    const nextCharacter = () =>{
        if (char.id != 506){
            return (
                <button className="red btn" onClick={nextChar}>Next Character</button>
            )
        }
    }

    return (
        <div>
            <h1>{char.name} Details</h1>
            <div className="card blue lighten-2">
                <div className="card-content white-text">
                    <div style={{display: 'flex', alignItems: 'center'}}>
                        <img src={char.image} style={{height: "300px", width: "auto"}}></img>
                        <div style={{marginLeft: '10px'}}>
                            <h6>Name: {char.name}</h6>
                            <h6>Gender: {char.gender}</h6>
                            <h6>Hair Color: {char.hairColor}</h6>
                            <h6>Occupation: {char.occupation}</h6>
                            <h6>First Episode: {char.firstEpisode}</h6>
                            <h6>Voiced By: {char.voicedBy}</h6>
                            <Link href={char.wikiUrl} style={{ color: 'red'}}>More Information Here</Link>
                        </div>
                    </div>
                </div>
            </div>
            {previousCharacter()}
            <button className="red btn" onClick={goBack}>Go Back To All Characters</button>
            {nextCharacter()}        
        </div>
    )
}

export default PostChar;