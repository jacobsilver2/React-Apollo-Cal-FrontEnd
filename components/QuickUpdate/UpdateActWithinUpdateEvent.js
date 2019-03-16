import React from 'react';
import {DndStyles, ImageContainer, PreviewStyles} from '../styles/DropzoneStyles';

const UpdateActWithinUpdateEvent = ({ event, handleChange, image, dropzone }) => {
  const {getRootProps, getInputProps, isDragActive, isDragAccept, isDragReject, acceptedFiles} = dropzone;
  return (
    <fieldset>
      <h3>Edit Existing Act</h3>
      <h6>note: this will alter every event this act is associated with</h6>
      <label htmlFor="name">
        Act Name
          <textarea id="name" name="name" placeholder="Act Name" defaultValue={event.act ? event.act.name : event.title} onChange={handleChange} />
      </label>
      <label htmlFor="description">
        Blurb
          <textarea id="description" name="description" placeholder="Blurb" defaultValue={event.act ? event.act.description : null} onChange={handleChange} />
      </label>
      <label htmlFor="email">
        Email
          <textarea id="email" name="email" defaultValue={event.act ? event.act.email : null} onChange={handleChange} />
      </label>
      <label htmlFor="image">
        <DndStyles>
          <ImageContainer isDragActive={isDragActive} isDragReject={isDragReject} {...getRootProps()}>
            <input {...getInputProps()}/>
            {isDragAccept ? 'Drop' : 'Drag'} image here...
          </ImageContainer>
          <PreviewStyles>
            {image ? <img src={image} alt="Upload Preview" width="200" /> : <img src={event.act ? event.act.image : null} alt="Upload Preview" width='200'/>}
          </PreviewStyles>
        </DndStyles>
      </label>
      <hr />
    </fieldset>
  );
}

export default UpdateActWithinUpdateEvent;