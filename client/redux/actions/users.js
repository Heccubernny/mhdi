import * as api from '../../pages/api/index'
import * as t from '../types'
// import axios from "axios"
// import request from '../../util/request'
// creating action
// api.fetchUsers 
export const getUsers = () => async(dispatch) => {
    try{
        const {data} = await api.fetchUsers()
        dispatch({type:'FETCH_ALL', payload: data})
    }catch(err){
        console.log(error.message)
    }


}

export const createUsers = (user) => async(dispatch) => {
    try{
        const {data} = await api.createUsers(user);
        dispatch({ type: 'CREATE', payload: data })

    }catch(err){
        // res.status(404).json({msg: "Cant create User"})
        console.log(err.message)
    }

}

// export const setUsers = (firstName) =>  dispatch = {
//     dispatch({
//         type: t.SET_USER, payload: firstName
//     })
    
// }