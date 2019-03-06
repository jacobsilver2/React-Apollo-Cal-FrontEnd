import React from 'react';
import Dropzone from 'react-dropzone';
import {DndStyles, ImageContainer, PreviewStyles} from '../styles/DropzoneStyles';

const UpdateActWithinUpdateEvent = ({ event, handleChange, uploadFile, image }) => {

  return (
    <fieldset>
      <h3>Edit Existing Act</h3>
      <h6>note: this will alter every event this act is associated with</h6>
      <label htmlFor="name">
        Act Name
          <textarea id="name" name="name" placeholder="Act Name" defaultValue={event.act.name} onChange={handleChange} />
      </label>
      <label htmlFor="description">
        Blurb
          <textarea id="description" name="description" placeholder="Blurb" defaultValue={event.act.description} onChange={handleChange} />
      </label>
      <label htmlFor="email">
        Email
          <textarea id="email" name="email" defaultValue={event.act.email} onChange={handleChange} />
      </label>
      <label htmlFor="image">
        <Dropzone accept="image/*" onDrop={uploadFile}>
          {({getRootProps, getInputProps}) => 
            <section>
              <ImageContainer {...getRootProps()}>
                <p>Drag 'n' drop some files here, or click to select files</p>
                <img src={image || event.act.image} alt="Image Preview" width="200px"></img>
                <input {...getInputProps()}></input>
              </ImageContainer>
            </section>
          }
        </Dropzone>
      </label>
      <hr />
    </fieldset>
  );
}

export default UpdateActWithinUpdateEvent;