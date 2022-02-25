import React from 'react'
import "./Potato.css";
export default function Potato(props) {
    console.log(props)
  return (
    <div>
      <Book/>
      Potato {props.value}
    </div>
  )
}

const Book = ()=> {
  return (
    <div>
      <Title/>
      <Author/>
      <Image/>
    </div>
  )
}
const Title = () => <h1>This is the title</h1>
const Author = () => <h1>John Doe</h1>
const Image = ()=> <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Electronics/Clearance/Clearance_store_Desktop_CC_1x._SY304_CB628315133_.jpg" alt="" srcset="" />
