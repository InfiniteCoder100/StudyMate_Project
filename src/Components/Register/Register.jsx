import React from 'react'
import './Register.css'
import { useFormik } from 'formik'
import { registeredSchema } from './RegisterValidation'

const initialValues = {
  name: "",
  email: "",
  phone: "",
  gender: "",
  city: "",
  yop: "",
  course: "",
  referral: "",
  query: ""
}

const Register =React.memo(({ registerPopup, closeRegisterPopup }) => {

  const { values, errors, handleBlur, handleChange, handleSubmit,touched } = useFormik({
    initialValues: initialValues,
    validationSchema:registeredSchema,
    onSubmit: (values,action) => {
      console.log(values)
      action.resetForm();
    },
  
  })
  console.log(errors)


  if (!registerPopup) {
    return null
  }
  return (
    <>
      <div className="bg-registered">
        <h2 className="register-title1">Get Your First Dream Job in 100 Days</h2>
        <h4 className="register-title2">
          New Online Batch Starting from 1st January
        </h4>
        
          <form className='r-form' onSubmit={handleSubmit}>
          <div className="register-form">
            <div className="input-block">
              <label htmlFor='name'  >Name</label><br />
              <input className='input-1'
                type="name"
                placeholder='Enter Your Name'
                autoComplete='off'
                name="name"
                id='name'
                value={values.name}
                onChange={handleChange}
                onBlur={handleBlur}
               />
               {errors.name && touched.name ? (<p className='registered-error'>{errors.name}</p>):null }
            </div>

            <div className="input-block">
              <label htmlFor='email' >Email</label><br />
              <input className='input-1'
                type="email"
                placeholder='Enter Your Email'
                autoComplete='off'
                name="email"
                id='email'
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                 />
                   {errors.email && touched.email ? (<p className='registered-error'>{errors.email}</p>):null }
            </div>


            <div className="input-block">
              <label htmlFor='Phone' >Phone Number</label><br />
              <input className='input-1'
                type="number"
                placeholder='Enter Your Phone Number'
                autoComplete='off'
                name="phone"
                id='phone'
                value={values.phone}
                onChange={handleChange}
                onBlur={handleBlur}

                 />
                  {errors.phone && touched.phone ? (<p className='registered-error'>{errors.phone}</p>):null }
            </div>


            <div className="input-block2">
              <label htmlFor='gender' >Gender</label>
              <div className="gender">
              <input type="radio" name='gender' value='Male'
                onChange={handleChange}
                onBlur={handleBlur} />Male
              <input type="radio" name='gender' value='Female'  onChange={handleChange}
                onBlur={handleBlur}/>Female
              <input type="radio" name='gender'
                onChange={handleChange}
                onBlur={handleBlur} value='Others' />Others
                </div>
                  {errors.gender && touched.gender ? (<p className='registered-error'>{errors.gender}</p>):null }
                  
            </div>

            <div className="input-block">
              <label htmlFor='city' >City</label><br />
              <input className='input-1'
                type="text"
                placeholder='Enter Your City'
                autoComplete='off'
                name="city"
                id='city'
                value={values.city}
                onChange={handleChange}
                onBlur={handleBlur}

                 />
                   {errors.city && touched.city ? (<p className='registered-error'>{errors.city}</p>):null }
            </div>

            <div className="input-block">
              <label htmlFor='yop' >YOP</label><br />
              <input className='input-1'
                type="number"
                placeholder='Enter Your Year of PassOut'
                autoComplete='off'
                name="yop"
                id='yop'
                value={values.yop}
                onChange={handleChange}
                onBlur={handleBlur}

                 />
                   {errors.yop && touched.yop ? (<p className='registered-error'>{errors.yop}</p>):null }
            </div>


            <div className="input-block">
              <label htmlFor='course' >Course</label><br/>
              <input className='input-1'
                type="text"
                placeholder='Your Interested Course'
                autoComplete='off'
                name="course"
                id='course'
                value={values.course}
                onChange={handleChange}
                onBlur={handleBlur}
                />
                {errors.course && touched.course ? (<p className='registered-error'>{errors.course}</p>):null }
            </div>

            <div className="input-block">
              <label htmlFor='referral ' >Referral </label><br/>
              <input className='input-1'
                type="text"
                placeholder='Full Name Of Referred Person '
                autoComplete='off'
                name="referral"
                id='referral'
                value={values.referral}
                onChange={handleChange}
                onBlur={handleBlur}
                 />
                   {errors.referral && touched.referral ? (<p className='registered-error'>{errors.referral}</p>):null }
            </div>

            <div className="input-block">
              <label htmlFor='query' >Any Doubt/Query? </label><br/>
              <textarea name="query" id="query" cols="30" rows="2" placeholder='Ask Any Doubt/Query?'
                autoComplete='off'
                value={values.query}
                onChange={handleChange}
                onBlur={handleBlur}
              />
          {errors.query && touched.query ? (<p className='registered-error'>{errors.referral}</p>):null }
            </div>
<div className="register-btn">
            <button className='register-btn1'  type='submit'>SUBMIT</button>
            <button className='register-btn2' onClick={closeRegisterPopup}>cancel</button>
            </div>
            </div>


          </form>
      
      </div>
    </>
  )
})

export default Register