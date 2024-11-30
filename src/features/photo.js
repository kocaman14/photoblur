import { createSlice } from "@reduxjs/toolkit";

const initialState={
blurNum:0,    
}



const photoSlice=createSlice({
name:"photos",
initialState,
reducers:{
    changeBlur:(state,action)=>{
state.blurNum=action.payload
console.log(state.blurNum)

    }

}



})




export const {changeBlur} = photoSlice.actions
export default photoSlice.reducer