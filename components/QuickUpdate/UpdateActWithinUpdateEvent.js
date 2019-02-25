import React from 'react';

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
        Picture
          <input type="file" id="file" name="file" placeholder="Upload an image" onChange={uploadFile} />
        {/* {this.renderPreview(event.act.image)} */}
        <img src={image ? image : event.act.image} alt="Image Preview" width="200"/>
      </label>
      <hr />
    </fieldset>
  );
}

export default UpdateActWithinUpdateEvent;