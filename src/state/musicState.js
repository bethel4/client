import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'


const initialState: MusicState = {
  musics: [],
  isLaoding: false
}

export const musicSlice = createSlice({
  name: 'musics',
  initialState,
  reducers: {
    getMusicsFetch: (state) => {
      state.isLaoding = true;
    },
    getMusicSuccess: (state,actions) => {
        state.musics  = actions.payload
        state.isLaoding = false
    },
    getMusicFalirue: (state,actions) => {
        state.isLaoding = false
    },
    addMusic: (state,action) => {
   state.musics.push(action.payload.music)
      state.isLaoding = true
    },
    editMusic:(state,action) => {
     
      state.isLaoding = false
    },
    deleteMusic: (state, action) => {
      //state.musics  = action.payload
      state.isLaoding = false
  }
  },
})

// Action creators are generated for each case reducer function
export const { editMusic,deleteMusic,getMusicsFetch,addMusicSuccess,RemoveMusic, RemoveMusicSuccess,getMusicSuccess,addMusic } = musicSlice.actions

export default musicSlice.reducer