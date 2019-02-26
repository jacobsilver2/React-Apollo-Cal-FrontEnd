import React from 'react'

const CreateActForm = ({loading, uploadFile, act, handleChange, notes, addNoteField}) => (
  
  <fieldset disabled={loading} aria-busy={loading}>
    <label htmlFor="file">
      Image
      <input type="file" id="file" name="file" placeholder="Upload an image" onChange={uploadFile}/>
      {act.image && <img src={act.image} alt="Upload Preview" width="200"/>}
    </label>

    <label htmlFor="name">
      Name
      <input type="text" id="name" name="name" placeholder="Name" required value={act.name} onChange={handleChange}/>
    </label>

    <label htmlFor="description">
      Description
      <textarea id="description" name="description" placeholder="Enter A Description" required value={act.description} onChange={handleChange}/>
    </label>

    <label htmlFor="email">
      Email
      <input type="email" id="email" name="email" placeholder="email" required value={act.email} onChange={handleChange}/>
    </label>

    <label htmlFor="notes">
      Notes
      {notes}
      <button onClick={addNoteField}>&#43;</button>
    </label>
    <button type="submit">Submit</button>
  </fieldset>
);

export default CreateActForm;