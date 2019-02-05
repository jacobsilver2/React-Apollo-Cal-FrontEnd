import {ALL_EVENTS_QUERY} from '../queries/queries';



export const updateCache = (cache, payload) => {
  // manually update the cache on the client, so it matches the server
  // 1. Read the cache for the items we want
  const data = cache.readQuery({ query: ALL_EVENTS_QUERY });
  // 2. Filter the deleted itemout of the page
  const eventIndex = data.events.findIndex(event => event.id === payload.data.updateEventMutation.id)
  // data.events[eventIndex].start = payload.data.moveEvent.start;
  // data.events[eventIndex].end = payload.data.moveEvent.end;
  console.log(eventIndex)
  // 3. Put the items back!
  cache.writeQuery({ query: ALL_EVENTS_QUERY, data });
};

// export const quickUpdateCache = (cache, payload) => {
//   const data = cache.readQuery({ query: ALL_EVENTS_QUERY });
//   const eventIndex = data.events.findIndex(event => event.id === payload.data.moveEvent.id)
//   cache.writeQuery({ query: ALL_EVENTS_QUERY, data });
// }

export const handleDeleteNote = (e, index, notes) => {
  e.preventDefault();
  if (notes){
    const notesCopy = [...notes];
    const notesFiltered = notesCopy.filter((note, i) => i !== index );
    return this.setState({notes: notesFiltered});
  }
  const notesCopy = [...this.state.notes];
  const notesFiltered = notesCopy.filter((note, i) => i != index );
  return this.setState({notes: notesFiltered});    
}

export const addNoteField = (e, notes) => {
  e.preventDefault();
  if (notes){
    const notesCopy = [...notes];
    notesCopy.push('')
    return this.setState({notes: notesCopy});
  }
  const notesCopy = [...this.state.notes];
  notesCopy.push('');
  return this.setState({ notes: notesCopy });
}

export const renderPreview = (img) => {
  return (
    <img src={img} alt="Upload Preview" width="200"/>
  )  
}

export const uploadFile = async (e) => {
  const files = e.target.files;  
  const data = new FormData();
  data.append('file', files[0]);
  data.append('upload_preset', 'react-apollo-cal');
  const res = await fetch('https://api.cloudinary.com/v1_1/dlskxwzm6/image/upload', {
    method: 'POST',
    body: data
  });
  const file = await res.json();
  this.setState({
    image: file.secure_url,
    largeImage: file.eager[0].secure_url
  })
}

// export {updateCache, handleDeleteNote, addNoteField, renderPreview, uploadFile}