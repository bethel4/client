import { takeEvery, call, put, all,takeLatest } from "redux-saga/effects";
import {
  getMusicSuccess,
  addMusic,
  AddMusicSuccess,
  getMusicFalirue,
  editMusic,
  RemoveMusic,
  deleteMusic
} from "../musicState";
import {  deleteMusicByIdAPI,createMusicAPI ,updateMusicAPI} from '../../apis/index'
import { DELETE_MUSIC_BY_ID,CREATE_MUSIC,UPDATE_MUSIC_BY_ID } from '../types/index'
import axios from "axios"
function musicFetch() {
  return fetch("http://localhost:9000/musics", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  }).then((res) => res.json());
}




function* workGetMusicsFetch() {
  try {
    const musics = yield call(musicFetch);
    yield put(getMusicSuccess(musics));
  } catch (error) {
    yield put({ type: "musics/getMusicFalirue", error });
  }
}


export function* deleteMusicByIdSaga(action) {
  console.log(action);
  yield deleteMusicByIdAPI(action.id,action.music)
  yield put(deleteMusic(action.musics))
}

export function* createMusicByIdSaga(action) {
  console.log(action);
  yield createMusicAPI(action)
  yield put(addMusic(action))
}

export function* updateMusicSaga(action) {
  console.log(action);
  yield updateMusicAPI(action.id, action.music)
  yield put(editMusic(action))
}
function* mySaga() {
  yield takeEvery("musics/getMusicsFetch", workGetMusicsFetch);
  yield takeEvery(CREATE_MUSIC, createMusicByIdSaga)
  yield takeEvery(DELETE_MUSIC_BY_ID, deleteMusicByIdSaga)
  yield takeEvery(UPDATE_MUSIC_BY_ID, updateMusicSaga)
}
export default function* rootSaga() {
  yield all([
    workGetMusicsFetch(),
    mySaga(),
  ]);
}
