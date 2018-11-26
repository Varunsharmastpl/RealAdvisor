import React from 'react';
import { Formik } from 'formik';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import FormControl from '@material-ui/core/FormControl';
import { Flex } from '@rebass/grid/emotion';

const App = (props) => (
  <div>
    <Formik
      initialValues={{ Living_surface: '', Land_surface: '', Number_of_rooms: '', Number_of_parkings: '' }}
      onSubmit={(values, { setSubmitting }) => {
          console.log('props', props);
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 500);
      }}
    >
      {props => {
        const {
          values,
          touched,
          errors,
          dirty,
          isSubmitting,
          handleChange,
          handleBlur,
          handleSubmit,
          handleReset,
        } = props;
        return (
          <form onSubmit={handleSubmit}>
            <Flex>
            <FormControl>
              <TextField
                  id="Living_surface"
                  variant="filled"
                  placeholder="Living surface"
                  type="text"
                  value={values.Living_surface}
                  onChange={handleChange}
                  onBlur={handleBlur}
              
              />
              {errors.Living_surface &&
              touched.Living_surface && <div className="input-feedback">{errors.Living_surface}</div>}
            </FormControl>
            </Flex>
            <Flex>
            <FormControl>
              <TextField
                id="Land_surface"
                variant="filled"
                placeholder="Land surface"
                type="text"
                value={values.Land_surface}
                onChange={handleChange}
                onBlur={handleBlur} 
              />
              {errors.Land_surface &&
              touched.Land_surface && <div className="input-feedback">{errors.Land_surface}</div>}
            </FormControl>
              </Flex>
            <Flex>
            <FormControl>
              <TextField
                id="Number_of_rooms"
                variant="filled"
                placeholder="Number of rooms"
                type="text"
                value={values.Number_of_rooms}
                onChange={handleChange}
                onBlur={handleBlur}
              
              />
                {errors.Number_of_rooms &&
                touched.Number_of_rooms && <div className="input-feedback">{errors.Number_of_rooms}</div>}
            </FormControl>
            </Flex>
            <Flex>
              <TextField
                id="Number_of_parkings"
                variant="filled"
                placeholder="Number of parkings"
                type="text"
                value={values.Number_of_parkings}
                onChange={handleChange}
                onBlur={handleBlur}
              />
                {errors.Number_of_parkings &&
                touched.Number_of_parkings && <div className="input-feedback">{errors.Number_of_parkings}</div>}
            </Flex>                    
            <Button variant="contained" color="primary" type="submit" disabled={isSubmitting}>
              Save
            </Button>
          </form>
        );
      }}
    </Formik>
  </div>
);

export default App;