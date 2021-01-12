import React,{useState,useEffect} from 'react'
import firebaseDb from '../firebase'
import Addmovie from '../Components/Addmovie'

const Movies=()=> {
    var [movie,setMovie]=useState({})
    var [movieId,setMovieId]=useState('')
    useEffect(()=>{
        firebaseDb.child('Movies').on('value',snapshot=>{
            if(snapshot.val()!=null)
            setMovie({...snapshot.val()})
            else{
                setMovie({})
            }
        })
    },[])
    const addOrEdit=obj=>{
        if(movieId===''){
            firebaseDb.child('Movies').push(
                obj,
                err=>{
                    if(err){
                        console.log(err)
                    }
                    // else{
                    //     setMovieId('')
                    // }
                }
            )
        }
        // else{
        //     firebaseDb.child(`Movies/${movieId}`).set(
        //         obj,
        //         err=>{
        //             if(err){
        //                 console.log(err)
        //             }
        //                 // else{
        //                 //     setMovieId('')
        //                 // }
        //             }
                
        //     )
        // }
        
    }
    const onDelete=key=>{
    if(window.confirm('Do you want to delete movie?')){
        firebaseDb.child(`Movies/${key}`).remove(
            err=>{
                if(err){
                    console.log(err)
                }
                    else{
                        setMovieId('')
                    }
                }
            
        )
    }
    }
    return (
        <>
        <div>
            <div class="jumbotron jumbotron-fluid">
                <div class="container">
                <h1 class="display-4 text-center">Movies</h1>
                </div>                
            </div>
            <div className="row">
                <div className="col-md-5">
                    <Addmovie {...setMovieId({addOrEdit,movieId,movie})}/>
                </div>
                <div className="col-md-7">
                    <table className="table table-borderless table-stripped">
                        <thead className="thead-light">
                            <tr>
                                <th>Title</th>
                                <th>Year</th>
                                <th>Released</th>
                                <th>Director</th>
                                <th>Language</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {Object.keys(movie).map(id=>{
                                return <tr key={id}>
                                    <td>{movie[id].Title}</td>
                                    <td>{movie[id].Year}</td>
                                    <td>{movie[id].Released}</td>
                                    <td>{movie[id].Director}</td>
                                    <td>{movie[id].Language}</td>
                                    <td>
                                        <a className="btn text-primary" 
                                        onClick={()=>setMovieId(id)}
                                        >
                                            <i className="fas fa-pencil-alt"></i> </a>
                                        <a className="btn text-danger">
                                            <i className="far fa-trash -alt"
                                            onClick={()=>onDelete(id)}
                                            ></i>
                                        </a>
                                    </td>
                                </tr>
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        </>
    )
}
export default Movies;
