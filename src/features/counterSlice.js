import { createSlice } from '@reduxjs/toolkit';


const initialState = {
  activites:null,
  partenaires:null,
};



export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    
   
    setActivites:(state,action)=>{
      state.activites=action.payload;
    },
    setPartenaires:(state,action)=>{
      state.partenaires=action.payload;
    }
  },
 
});

export const { setActivites,setPartenaires } = counterSlice.actions;


export const selectActivites = (state) => state.counter.activites;
export const selectPartenaires=(state)=> state.counter.partenaires;

export default counterSlice.reducer;
