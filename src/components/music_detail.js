import 'antd/dist/reset.css';
import React,{useEffect} from "react";
import { Space, Table, Tag,Popconfirm } from 'antd';
import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
import { useSelector, useDispatch, } from 'react-redux'
import {getMusicsFetch} from '../state/musicState'
import { DELETE_MUSIC_BY_ID ,CREATE_MUSIC} from '../state/types/index'
import { useNavigate } from "react-router-dom";

import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage, useFormik } from "formik";
//import { postMusic } from '../sagas';

export default function AddMusic() {
  let [isOpen, setIsOpen] = useState(false)
  const navigate = useNavigate();
  useEffect(() => {
    dispatch(getMusicsFetch());
  }, []);
  const musics = useSelector((state) => state.musics.musics )
  const dispatch = useDispatch()
  function closeModal() {
    setIsOpen(false)
  }

  function openModal() {
    setIsOpen(true)
  }

  const onSubmit = (values,e) => {
    dispatch({ type:CREATE_MUSIC, music:values}) 

  };
  const handleDelete = (key: React.Key) => {
   
  const newData = data.filter((item) => item.key !== key);
  console.log(newData[0]._id)
  dispatch({ type:DELETE_MUSIC_BY_ID, id:newData[0]._id, musics:newData}) 

  };
  
  const handleEdit = (key:React.key)=>{
   
    const newData = data.filter((item) => item.key == key);
    console.log(newData[0]._id)
    navigate(`/myForm/${newData[0]._id}`,{state:{data:newData,id:newData[0]._id}});
    
  }
  const initialValues = {
    title: "",
    artist: "",
    album: "",
    genre: "",
  };
  const MusicSchema = Yup.object().shape({
    title: Yup.string()
      .required("Required"),
    album: Yup.string()
      .required("Required"),
    artist: Yup.string()
      .required("Required"),
  });


  const columns = [
    { title: 'Titile', dataIndex: 'title', key: 'title' },
    { title: 'Artist', dataIndex: 'artist', key: 'artist' },
    { title: 'Album', dataIndex: 'album', key: 'album' },
    { title: 'Genre', dataIndex: 'genre', key: 'genre' },
    {
      title: 'Action',
      key: 'operation',
      fixed: 'right',
      width: 100,
      render: (_, record) => (
        <Space size="middle" >
          <a  onClick={() => handleEdit(record.key)}>Edit {record.name}</a>
          <Popconfirm title="Sure to delete?" onConfirm={() => handleDelete(record.key)}>
            <a>Delete</a>
          </Popconfirm>
        </Space>
      ),
    }
  ];
 

const data = musics.map((object,i) => {
  return {...object, key: i};
});

  return (
    <div style={{
      display: 'block', width: 1000, padding: 30
  }} >


<button
          type="button"
          onClick={openModal}
          className="rounded-md bg-black bg-opacity-20 px-4 py-2 text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
        >
          Open dialog
        </button>
        <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900"
                  >
                    Payment successful
                  </Dialog.Title>
                  <div className="mt-10 sm:mt-0">
        <div className="md:grid md:grid-cols-2 md:gap-6">
          
          <div className="mt-5 md:col-span-2 md:mt-0">
          <Formik
          validationSchema={ MusicSchema}
          initialValues={initialValues}
          onSubmit={onSubmit}
          >
          <Form action="#" method="POST">
              <div className="overflow-hidden  sm:rounded-md">
                <div className="bg-white px-8 py-5 sm:p-6">
                  <div className="grid grid-cols-2 gap-6">
                    <div className="col-span-6 sm:col-span-3">
                      <label htmlFor="title" className="block text-sm font-medium leading-6 text-gray-900">
                       Title
                      </label>
                      <Field
                        type="text"
                        name="title"
                        id="title"
                        autoComplete="given-name"
                        className="mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                    <div>
                    {" "}
                    <ErrorMessage  className ="text-red-600" name="title" component="div" />
                  </div>
                    <div className="col-span-6 sm:col-span-3">
                      <label htmlFor="artist" className="block text-sm font-medium leading-6 text-gray-900">
                       Artist
                      </label>
                      <Field
                        type="text"
                        name="artist"
                        id="artist"
                        autoComplete="family-name"
                        className="mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>

                    <div>
                    {" "}
                    <ErrorMessage  className ="text-red-600" name="artist" component="div" />
                  </div>

                    <div className="col-span-6 sm:col-span-3">
                      <label htmlFor="genre" className="block text-sm font-medium leading-6 text-gray-900">
                        Genre
                      </label>
                      <select
                        id="genre"
                        name="genre"
                        autoComplete="genre-name"
                        className="mt-2 block w-full rounded-md border-0 bg-white py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      >
                        <option>Rock</option>
                        <option>Jazzy</option>
                        <option>Country</option>
                      </select>
                    </div>

                   

                    <div className="col-span-6 sm:col-span-6 lg:col-span-2">
                      <label htmlFor="album" className="block text-sm font-medium leading-6 text-gray-900">
                        Album
                      </label>
                      <Field
                        type="text"
                        name="album"
                        id="album"
                        autoComplete="address-level2"
                        className="mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                    <div>
                    {" "}
                    <ErrorMessage  className ="text-red-600" name="album" component="div" />
                  </div>
                    
                   
                  </div>
                </div>
                
                <div className=" px-4 py-3 text-right sm:px-6">
                    <button
                      type="submit"
                      className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      onClick={closeModal}
                    >
                      Add Music
                    </button>
                  </div>
              </div>
            </Form>
          </Formik>
           
          </div>
        </div>
      </div>

                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
      <Table
      
        columns={columns}
      
        dataSource={data}
      />

    </div>
  )
}