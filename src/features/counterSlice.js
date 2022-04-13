import { createSlice } from '@reduxjs/toolkit';


const initialState = {
  activites:null,
  partenaires:null,
  pages:null,
  rapports:null,
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
    },
    setPages:(state,action)=>{
      state.pages=action.payload;
    },
    setRapports:(state,action)=>{
      state.rapports=action.payload;
    }
  },
 
});

export const { setActivites,setPartenaires,setPages,setRapports } = counterSlice.actions;


export const selectActivites = (state) => state.counter.activites;
export const selectPartenaires=(state)=> state.counter.partenaires;
export const selectPages=(state)=> state.counter.pages;
export const selectRapports=(state)=> state.counter.rapports;

export default counterSlice.reducer;
