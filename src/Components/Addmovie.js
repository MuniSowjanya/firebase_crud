import React,{useState,useEffect} from 'react'

const Addmovie=(props) =>{
    const initialFieldValues={
        Title:'',
        Year:'',
        Released:'',
        Director:'',
        Language:''
    }
    const [value,setValue]=useState(initialFieldValues)
   useEffect(()=>{
        
        if(props.movieId==''){
            setValue({
                ...initialFieldValues
            })

        }        
        else{
            setValue({
                ...props.movie[props.movieId]
            })
        }

    },[props.movieId,props.movie,initialFieldValues])
    const handleInputchange=e=>{
        const {title,value}=e.target
        setValue({
            ...value,
            [title]:value
        })
    }
    const handleSubmit=e=>{
        e.preventDefault();
        props.addOrEdit(value)
    }
    return (
        <div>
            <form autoComplete="off" onSubmit={()=>handleSubmit}>
                <div className="form-group input-group">
                    <div className="input-group-prepend">
                        <div className="input-group-text"></div>
                        <i class="bi bi-film"></i>
                    </div>
                </div>
                <input className="form-control" placeholder="Title" name="Title" value={value.Title}
                onChange={()=>handleInputchange}/>
                <div className="form-group input-group">
                    <div className="input-group-prepend">
                        <div className="input-group-text"></div>
                        <i class="fa fa-calendar" aria-hidden="true"></i>
                    </div>
                </div>
                <input className="form-control" placeholder="Year" name="Year" value={value.Year}
                onChange={()=>handleInputchange}/>
                <div className="form-group input-group">
                    <div className="input-group-prepend">
                        <div className="input-group-text"></div>
                        <i class="fa fa-calendar" aria-hidden="true"></i>
                    </div>
                </div>
                <input className="form-control" placeholder="Released" name="Released" value={value.Released}
                onChange={()=>handleInputchange}/>
                <div className="form-group input-group">
                    <div className="input-group-prepend">
                        <div className="input-group-text"></div>
                        <i class="fas fa-film"></i>
                    </div>
                </div>
                <input className="form-control" placeholder="Director" name="Director" value={value.Director}
                onChange={()=>handleInputchange}/>
                <div className="form-group input-group">
                    <div className="input-group-prepend">
                        <div className="input-group-text"></div>
                        <i class="fa fa-language" aria-hidden="true"></i>
                    </div>
                </div>
                <input className="form-control" placeholder="Language" name="Language" value={value.Language}
                onChange={()=>handleInputchange}/>
                <div className="form-group">
                    <input type="submit" value={props.movieId===''?"Add":"Update"} className="btn btn-primary btn-block"/>
                </div>
            </form>
        </div>
    )
}
export default Addmovie