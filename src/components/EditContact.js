import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link,useNavigate,useParams } from 'react-router-dom'
import { toast } from 'react-toastify'

const EditContact = (match) => {

    const [name,setName]=useState("")
    const [email,setEmail]=useState("")
    const [number,setNumber]=useState("")


    const navigate=useNavigate()

    const {id}=useParams()

    const contacts=useSelector(state=>state)
    const dispatch=useDispatch()

    const currentContact=contacts.find(contact=>contact.id===parseInt(id))

    useEffect(()=>{
        if(currentContact){
            setName(currentContact.name)
            setEmail(currentContact.email)
            setNumber(currentContact.number)
        }
        
    },[currentContact])


    const submitHandle=(e)=>{
        e.preventDefault();

        const checkEmail=contacts.find((contact)=> contact.id !==parseInt(id) && contact.email===email && email);
        const checkNumber=contacts.find((contact)=>contact.id !==parseInt(id) && contact.number===parseInt(number) && number)

        if(!email || !number || !name){
            return toast.warning("Please fill in all fields")
        }
        if(checkEmail){
            return toast.error("This email already Exists!")
        }
        if(checkNumber){
            return toast.error("this Number already Exists!")
        }

        const data={
            id:parseInt(id),
            name,
            email,
            number
        }
        dispatch({type:"UPDATE_CONTACT",payload:data});
        toast.success("Student updated successfully")
        navigate("/")
    }


    

  return (
    <div className="container">
        {currentContact?
        (
            <>
            <h1 className="dispaly-3 my-5 text-center">
            Edit Contact {id}
        </h1>
    <div className="row">
        <div className="col-md-6 shadow mx-auto p-5">
            <form onSubmit={submitHandle}>
                <div className="form-group m-2">
                    <input type="text" placeholder="Name" className="form-control" value={name} onChange={e=>setName(e.target.value)}/>
                </div>
                <div className="form-group m-2">
                    <input type="email" placeholder="Email" className="form-control" value={email} onChange={e=>setEmail(e.target.value)}/>
                </div>
                <div className="form-group m-2">
                    <input type="number" placeholder="Phone Number" className="form-control" value={number} onChange={e=>setNumber(e.target.value)}/>
                </div>
                <div className="form-group m-2">
                    <input type="submit" value="Update Contact" className="btn  btn-dark"/>
                    <Link to="/" className="btn btn-danger m-2">Cancel</Link>
                </div>
            </form>
        </div>
    </div>
    </>
        ):
        (
            <h1 className='display-3 my-5 text-center'>Student Contact with id {id} is not exists</h1>
        )
        }
        
</div>
  )
}

export default EditContact