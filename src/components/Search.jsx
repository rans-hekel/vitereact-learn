import { useState } from "react"


function Search(props) {
    const [search, setSearch] = useState("")

    const onChangeSearch = (e) => {
        setSearch(e.target.value)
        props.onChangeSearch(e.target.value)
    }

    return(
        <>
        <div>Cari Artikel : <input onChange={onChangeSearch}/>
        {/* <button >Cari</button> */}
        </div>
        <p> Ditemukan {props.totalposts} Data Dengan Menggunakan Kata : {search}</p>
        </>
    )
}

export default Search