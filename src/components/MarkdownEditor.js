import React, { useEffect, useState } from 'react'
import ReactMarkdown from 'react-markdown'


const MarkdownEditor = () => {
   const[text,setText] = useState("")
   const[preview,setPreview]=useState("")
   useEffect(()=>{
        setPreview(text)
   },[text])
  return (
    <div className='main'>
      <textarea 
        placeholder='write here' 
        className='textarea'
        value={text}
        onChange={(e)=>
        setText(e.target.value)
      }    
      />

    <div >
        <ReactMarkdown className='preview'>
            {preview}  
         </ReactMarkdown>
    </div>
    </div>
  )
}

export default MarkdownEditor