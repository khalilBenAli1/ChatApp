import { equalTo, get, orderByChild, query, ref, set } from "@firebase/database"
import { _db } from "../../../config/firebase"


export const createUser =async(user:any):Promise<void>=>{
    const userRef=ref(_db,`users/${user.uid}`)
    const snapshot= await get(userRef)
    if(!snapshot.exists()){
        await set(userRef,{
            uid:user.uid,
            email:user.email,
            name:user.displayName,
            avatar:user.photoURL,
        })
    }
}

export const getUserById =async (userId:string)=>{
    
   const userRef= ref(_db,`users/${userId}`)
   try{
    const snapshot = await get(userRef)
    if(snapshot.exists()){
        console.log(snapshot.val(),"connected User")
        return snapshot.val()
    }else{
        return null
    }
   }
   catch(error){
    return null
   }
}

export const getUserByEmail=async(email:string)=>{
    const userRef= ref(_db,`users`)
    const q=query(userRef,orderByChild(`email`),equalTo(email))
    const snapshot = await get(q)
    if(snapshot.exists()){
        return snapshot.val()
    }
    else{
        return null
    }
}




