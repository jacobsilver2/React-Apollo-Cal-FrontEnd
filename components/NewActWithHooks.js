import React, {useState} from 'react';
import { Mutation } from 'react-apollo';
import { adopt } from 'react-adopt';
import { Spring } from 'react-spring/renderprops'
import Router from 'next/router';
import Form from './styles/Form';
import Error from './ErrorMessage';
import * as mutations from './globals/mutations/mutations';

const Composed = adopt({
  createAct: ({updates, render}) => <Mutation mutation={mutations.CREATE_ACT_MUTATION} variables={updates}>{render}</Mutation>,
  spring: ({render}) => <Spring from={{ opacity: 0 }} to={{ opacity: 1 }}>{render}</Spring>,
})

const NewActWithHooks = () => {
  const [act, setAct] = useState({
    name: '',
    description: '',
    image: '',
    largeImage: '',
    email: '',
    notes: [''],
  });

  function handleChange(e) {
    const { name, type, value } = e.target;
    let val = value;
    if (type === 'number') {
      val = parseFloat(value)
    }
    setAct({...act, [name]: val})
  };

  function updateNotes(e) {
    const { value } = e.target;
    const notes = [...act.notes];
    const selectedIndex = parseInt(e.target.dataset.key);
    notes[selectedIndex] = value;
    setAct({...act, notes})
  }

  async function uploadFile(e) {
    const files = e.target.files;
    const data = new FormData();
    data.append('file', files[0]);
    data.append('upload_preset', 'react-apollo-cal');
    const res = await fetch('https://api.cloudinary.com/v1_1/dlskxwzm6/image/upload', {
      method: 'POST',
      body: data
    });
    const file = await res.json();
    setAct({...act, image: file.secure_url, largeImage: file.eager[0].secure_url})
  }

  function addNoteField(e) {
    e.preventDefault();
    const notes = [...act.notes];
    notes.push('');
    setAct({...act, notes});
  }

  function renderNotes(notes) {
    return notes.map((note, index) => <textarea id="notes" key={index} data-key={index} name="notes" placeholder="Enter A Note" value={note} onChange={updateNotes} />)
  }

  const notes = renderNotes(act.notes);

  return (
    <Composed updates={act}>
    {({createAct, spring} ) => (
      <div style={spring}>
        <Form onSubmit={ async (e) => {
          e.preventDefault();
          const res = await createAct();
          Router.push({
            pathname: '/'
          })
        }}>
          <Error error={createAct.error} />
          <h2>Create A New Act</h2>
          <fieldset disabled={createAct.loading} aria-busy={createAct.loading}>
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
        </Form>  
      </div>    
    )}
  </Composed>
  );
}

export default NewActWithHooks;