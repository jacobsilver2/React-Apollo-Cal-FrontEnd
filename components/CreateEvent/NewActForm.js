import React from 'react'

const NewActForm = ({values, handleChange, uploadFile}) => (
  <fieldset>
  <h4>New Act</h4>
  <hr />
  <label htmlFor="name">
    Name
    <input type="text" id="name" name="name" placeholder="Name" disabled={!!values.actId} required={!values.actId} value={values.name} onChange={handleChange}/>
  </label>
    
  <label htmlFor="description">
    Description
    <textarea id="description" name="description" placeholder="Enter A Description" disabled={!!values.actId} required={!values.actId} value={values.description} onChange={handleChange}/>
  </label>
    
  <label htmlFor="email">
    Email
    <input type="email" id="email" name="email" placeholder="email" disabled={!!values.actId} required={!values.actId} value={values.email} onChange={handleChange}/>
  </label>
    
  <label htmlFor="file">
    Image
    <input type="file" id="file" name="file" disabled={!!values.actId} placeholder="Upload an image" onChange={uploadFile}/>
    {values.image && <img src={values.image} alt="Upload Preview" width="200"/>}
  </label>
    
</fieldset>
);

export default NewActForm;