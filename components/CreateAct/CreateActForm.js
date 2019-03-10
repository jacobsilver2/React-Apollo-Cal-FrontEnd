import React from 'react';
import {DndStyles, ImageContainer, PreviewStyles} from '../styles/DropzoneStyles';
import Button from '../styles/SickButton';



const CreateActForm = ({ loading, act, handleChange, notes, addNoteField, dropzone }) => {
  const {getRootProps, getInputProps, isDragActive, isDragAccept, isDragReject, acceptedFiles} = dropzone;
  return (
    <fieldset disabled={loading} aria-busy={loading}>

      <label htmlFor="name">
        Name
      <input type="text" id="name" name="name" placeholder="Name" required value={act.name} onChange={handleChange} />
      </label>

      <label htmlFor="description">
        Description
      <textarea id="description" name="description" placeholder="Enter A Description" required value={act.description} onChange={handleChange} />
      </label>

      <label htmlFor="email">
        Email
      <input type="email" id="email" name="email" placeholder="email" required value={act.email} onChange={handleChange} />
      </label>


      <label htmlFor="dropImage">
        Image
        <DndStyles>
          <ImageContainer isDragActive={isDragActive} isDragReject={isDragReject} {...getRootProps()}> 
            <input {...getInputProps()}/>
            {isDragAccept ? 'Drop' : 'Drag'} image here...
          </ImageContainer>
          <PreviewStyles>
            {act.image && <img src={act.image} alt="Upload Preview" width="200" />}
          </PreviewStyles>
        </DndStyles>
      </label>

      <label htmlFor="notes">
        Notes
      {notes}
        <button onClick={addNoteField}>&#43;</button>
      </label>
      <Button type="submit">Submit</Button>
    </fieldset>
  )
}
  ;

export default CreateActForm;