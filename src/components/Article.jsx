// const ArticleStatus =({isNew}) => {
//     return isNew && <span> -- Baru!!!</span>
// }
import { useContext} from "react"
import { GlobalContext } from "../context"

const NewArticle = () => {
    return <span> -- Baru!!!</span>
}


function Article(props) {
    const user = useContext(GlobalContext)
    return (
        <>
        <h3>Judul : {props.title}</h3>
        <small>
            Terbit : {props.date}, Tags : {props.tags.join(", ")}
            {props.isNew ? <NewArticle /> : ''} 
            {/* <ArticleStatus isNew={props.isNew}/> */}
            {/* {props.isNew ? '-- Baru' : ''}  */}
            </small> 
        <div>- {props.isi}</div> 
        <div>
            <small>Ditulis Oleh : {user.username}</small>
        </div><br />
        
        {/* <div>
            {data.titles.map((title) => {
                return <div>- {title}</div>
            })}
        </div> */}
        </>
    )
}

export default Article