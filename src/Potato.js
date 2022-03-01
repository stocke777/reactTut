import React from 'react'
import "./Potato.css";



export default function BookList(props) {
    console.log(props)
  return (
    <div>
      <div className="booklist">
        {books.map((book)=>{
          return <Book book={book}/>
        })}
      </div>
      
    </div>
  )
}

const Book = (props)=> {
  const {author, title, img} = props.book
  return (
    <div className='book'>
      <img src={img} alt="" />
      <h1>{title}</h1>
      <h4>{author}</h4>
    </div>
  )
}

const books = [
  {
    'author': "Astro",
    'title': "to Astro World",
    'img': "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F38%2F2019%2F01%2F12214257%2Fchefs-what-they-do-f9d9ce8a.jpg"
  },
  {
    'author': "Bronto",
    'title': "to Bronto World",
    'img': "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F38%2F2019%2F01%2F12214257%2Fchefs-what-they-do-f9d9ce8a.jpg"
  },
  {
    'author': "Catto",
    'title': "to Catto World",
    'img': "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F38%2F2019%2F01%2F12214257%2Fchefs-what-they-do-f9d9ce8a.jpg"
  }
]
