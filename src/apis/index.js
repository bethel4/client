import axios from 'axios'

axios.defaults.baseURL = 'http://localhost:9000'

// export const getUsersAPI = async () => axios.get('/users')

// export const getUserByIdAPI = async (id) => axios.get(`/users/${id}`)

export const createMusicAPI = async (music) => axios.post('/musics', music)

export const updateMusicAPI = async (id,music) => axios.patch(`/musics/${id}`, music)

export const deleteMusicByIdAPI = async (id,musics) => axios.delete(`/musics/${id}`,musics)