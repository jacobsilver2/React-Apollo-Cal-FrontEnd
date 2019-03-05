import React from 'react'
import styled from 'styled-components';
import {DndStyles, ImageContainer, PreviewStyles} from '../styles/DropzoneStyles';

const Field = styled.fieldset`
  height: 85%;
`;

const NewActForm = ({values, handleChange, uploadFile, dropzone}) => {
  const {getRootProps, getInputProps, isDragActive, isDragAccept, isDragReject, acceptedFiles} = dropzone;  
  return (
  <Field>
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
    
    <label htmlFor="dropImage">
      Image
        <DndStyles>
        <ImageContainer isDragActive={isDragActive} isDragReject={isDragReject} {...getRootProps()}>
          <input {...getInputProps()} />
          {isDragAccept ? 'Drop' : 'Drag'} image here...
          </ImageContainer>
        <PreviewStyles>
          {values.image && <img src={values.image} alt="Upload Preview" width="200" />}
        </PreviewStyles>
      </DndStyles>
    </label>
    
</Field>
);
  }
export default NewActForm;