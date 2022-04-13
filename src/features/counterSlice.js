import { createSlice } from '@reduxjs/toolkit';


const initialState = {
  activites:null,
  partenaires:null,
  pages:null,
  rapports:null,
  avis:null,
  bulletins:null,
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
    },
    setAvis:(state,action)=>{
      state.avis=action.payload;
    },
    setBulletins:(state,action)=>{
      state.bulletins=action.payload;
    }
  },
 
});

export const { setActivites,setPartenaires,setPages,setRapports,
setAvis,
setBulletins
} = counterSlice.actions;


export const selectActivites = (state) => state.counter.activites;
export const selectPartenaires=(state)=> state.counter.partenaires;
export const selectPages=(state)=> state.counter.pages;
export const selectRapports=(state)=> state.counter.rapports;
export const selectAvis=(state)=> state.counter.avis;
export const selectBulletins=(state)=> state.counter.bulletins;

export default counterSlice.reducer;
