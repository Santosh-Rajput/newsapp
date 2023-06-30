import React from 'react'

const NewsItems =(props)=> {
  
   
    let {title,description,imageUrl,newsUrl,author,date,source}=props;
   
    return (
      <div>
       <div className="card" >
        {/* style={{width: "18rem"}}  */}
        <div style={{
          display:'flex',
          justifyContent: 'flex-end',
          position:'absolute',
          right:'0' }}>
            <span className=" badge rounded-pill bg-danger" > {source} </span>
            </div>
            <img src={!imageUrl?"https://images.livemint.com/img/2022/07/03/1140x641/vitolda-klein-unsplash_1656844127371_1656844127565.jpg":imageUrl} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title"> {title}...</h5>
                <p className="card-text">{description}...</p>
                <p className="card-text"><small className="text-muted">By {author?author:"Unkown"} on {new Date(date).toLocaleString()}</small></p>
                <a href={newsUrl} className="btn btn-sm  btn-outline-warning">Read More</a>
            </div>
        </div>
      </div>
    )
  
}

export default NewsItems


