import { createSlice } from '@reduxjs/toolkit';


const initialState = {
  activites:null,
  partenaires:null,
  pages:null,
  rapports:null,
  avis:null,
  bulletins:null,
  page:0,
  adescos:null,
  loading:false,
  photos:null,
  videos:null,
  activite:null,
  categories_galerie:null,
  selected_categorie:null,
  visite:null,
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
    },
    setPage:(state,action)=>{
      state.page=action.payload;
    },
    setAdescos:(state,action)=>{
      state.adescos=action.payload;
    },
    setLoading:(state,action)=>{
      state.loading=action.payload;
    },
    setPhotos:(state,action)=>{
      state.photos=action.payload;
    },
    setVideos:(state,action)=>{
      state.videos=action.payload;
    },
    setActivite:(state,action)=>{
      state.activite=action.payload;
    },
    setCategorie_galerie:(state,action)=>{
      state.categories_galerie=action.payload;
    },
    setSelected_categorie:(state,action)=>{
      state.selected_categorie=action.payload;
    },
    setVisite:(state,action)=>{
      state.visite=action.payload;
    }
  },
 
});

export const { setActivites,setPartenaires,setPages,setRapports,
setAvis,
setBulletins,
setPage,
setAdescos,
setLoading,
setPhotos,
setVideos,
setActivite,
setCategorie_galerie,
setSelected_categorie,
setVisite
} = counterSlice.actions;


export const selectActivites = (state) => state.counter.activites;
export const selectPartenaires=(state)=> state.counter.partenaires;
export const selectPages=(state)=> state.counter.pages;
export const selectRapports=(state)=> state.counter.rapports;
export const selectAvis=(state)=> state.counter.avis;
export const selectBulletins=(state)=> state.counter.bulletins;
export const selectPage=(state)=> state.counter.page;
export const selectAdescos=(state)=> state.counter.adescos;
export const selectLoading=(state)=> state.counter.loading;
export const selectPhotos=(state)=> state.counter.photos;
export const selectVideos=(state)=> state.counter.videos;
export const selectActivite=(state)=> state.counter.activite;
export const selectCategorie_galerie=(state)=> state.counter.categories_galerie;
export const selectSelected_categorie=(state)=> state.counter.selected_categorie
export const selectVisite=(state)=> state.counter.visite;

export default counterSlice.reducer;
