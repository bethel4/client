import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage, useFormik } from "formik";
import { Box, Button, Flex } from "rebass";
import { UPDATE_MUSIC_BY_ID } from "../state/types/index";
import { useLocation,useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
function EditMusic() {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();
  const initialValues = {
    title: location.state.data[0].title,
    artist: location.state.data[0].artist,
    album: location.state.data[0].album,
    genre: location.state.data[0].genre,
  };
  const MusicSchema = Yup.object().shape({
    title: Yup.string().required("Required"),
    album: Yup.string().required("Required"),
    artist: Yup.string().required("Required"),
  });
  
  const onEdit = (values) => {
   const id =  location.state.id
   console.log(values)
    dispatch({ type:UPDATE_MUSIC_BY_ID, music:values,id:id}) 
    navigate('/view');
    
  };
  return (
    <div style={{ display: "block", width: 500, padding: "100px" }}>
      <div className="md:grid md:grid-cols-2 md:gap-6">
        <div className="mt-5 md:col-span-2 md:mt-0">
          <Formik
            validationSchema={MusicSchema}
            initialValues={initialValues}
            onSubmit={onEdit}
          >
            <Form action="#" method="POST">
              <div className="overflow-hidden  sm:rounded-md">
                <div className="bg-white px-8 py-5 sm:p-6">
                  <div className="grid grid-cols-2 gap-6">
                    <h3>Edit Music</h3>
                    <div className="col-span-6 sm:col-span-3">
                      <label
                        htmlFor="title"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
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
                      <ErrorMessage
                        className="text-red-600"
                        name="title"
                        component="div"
                      />
                    </div>
                    <div className="col-span-6 sm:col-span-3">
                      <label
                        htmlFor="artist"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
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
                      <ErrorMessage
                        className="text-red-600"
                        name="artist"
                        component="div"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-3">
                      <label
                        htmlFor="genre"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
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
                      <label
                        htmlFor="album"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
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
                      <ErrorMessage
                        className="text-red-600"
                        name="album"
                        component="div"
                      />
                    </div>
                  </div>
                </div>

                <div className=" px-4 py-3 text-right sm:px-6">
                  <button
                    type="submit"
                    className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                  >
                    Edit Music
                  </button>
                </div>
              </div>
            </Form>
          </Formik>
        </div>
      </div>
    </div>
  );
}

export default EditMusic;
