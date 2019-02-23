import React, { Component, useState } from 'react';
import { Mutation, Query } from 'react-apollo';
import { adopt } from 'react-adopt';
import {SINGLE_EVENT_QUERY, CURRENT_USER_QUERY} from './globals/queries/queries';
import {CREATE_EMAIL_MUTATION} from './globals/mutations/mutations';
import Router from 'next/router';
import Form from './styles/Form';
import Button from './styles/SickButton';
import User from './User';

const Composed = adopt({
  singleEvent: ({id, render}) => <Query query={SINGLE_EVENT_QUERY} variables={id}>{render}</Query>,
  currentUser: ({render}) => <Query query={CURRENT_USER_QUERY}>{render}</Query>,
  sendEmail: ({render}) => <Mutation mutation={CREATE_EMAIL_MUTATION}>{render}</Mutation>,
})

const Automations = () => {
  const [email, setEmail] = useState({message: '', subject: ''});

  function handleChange(e) {
    const {name, value} = e.target;
    setEmail({...email, [name]: value})
  }

  function onSendEmail(e, sendEmail, from, to) {
    e.preventDefault();
    const vars = {
      from,
      to,
      message: email.message,
      subject: email.subject
    }
    sendEmail({ variables: vars})
  }

  return (
      <User>
        {({ data: { me } }) => 
        <Composed id={{id: decodeURIComponent(Router.query.id)}} >
          {({singleEvent, sendEmail}) => {
            if (singleEvent.loading) return <p>Loading...</p>
            if (!singleEvent.data.event) return <p>No Event Found for ID {Router.query.id}</p>;
            const {event} = singleEvent.data;
            return (
              <Form onSubmit={(e) => onSendEmail(e, sendEmail, me.email, event.act.email )}>
                <div></div>
                <fieldset>
                  <h1>Welcome to the brand new Automations page!</h1>
                  <p>Currently viewing info for {event.act.name || event.title}</p>
                  <p>Recipient is {event.act.email}</p>
                  <label htmlFor="subject">
                    Subject
                    <input type="text" id="subject" name="subject" placeholder="Enter the Subject" value={email.subject} required onChange={handleChange} />
                  </label>

                  <label htmlFor="message">
                    Message
                    <textarea style={{width: '100%', height: '300px'}} name="message" placeholder='Enter Your Message' value={email.message} required onChange={handleChange}/>
                  </label>
                  <Button type="submit">Send Email</Button>
                </fieldset>
              </Form>
            )
          }}
        </Composed>
      }
      </User>
    );
  }

export default Automations;


// class Automations extends Component {
//   state = {
//     message: '',
//     subject: '',
//   }

//   handleChange = (e) => {
//     const {name, value} = e.target;
//     this.setState({ [name]: value });
//   }

//   onSendEmail = (e, sendEmail, from, to) => {
//     e.preventDefault();
//     const vars = {
//       from,
//       to,
//       message: this.state.message,
//       subject: this.state.subject
//     }
//     sendEmail({ variables: vars });
//   }
  
//   render() {

//     return (
//       <User>
//         {({ data: { me } }) => 
//         <Composed id={{id: decodeURIComponent(Router.query.id)}} >
//           {({singleEvent, sendEmail}) => {
//             if (singleEvent.loading) return <p>Loading...</p>
//             if (!singleEvent.data.event) return <p>No Event Found for ID {Router.query.id}</p>;
//             const {event} = singleEvent.data;
//             return (
//               <Form onSubmit={(e) => this.onSendEmail(e, sendEmail, me.email, event.act.email )}>
//                 <div></div>
//                 <fieldset>
//                   <h1>Welcome to the brand new Automations page!</h1>
//                   <p>Currently viewing info for {event.act.name || event.title}</p>
//                   <p>Recipient is {event.act.email}</p>
//                   <label htmlFor="subject">
//                     Subject
//                     <input type="text" id="subject" name="subject" placeholder="Enter the Subject" value={this.state.subject} required onChange={this.handleChange} />
//                   </label>

//                   <label htmlFor="message">
//                     Message
//                     <textarea style={{width: '100%', height: '300px'}} name="message" placeholder='Enter Your Message' value={this.state.message} required onChange={this.handleChange}/>
//                   </label>
//                   <Button type="submit">Send Email</Button>
//                 </fieldset>
//               </Form>
//             )
//           }}
//         </Composed>
//       }
//       </User>
//     );
//   }
// }

// export default Automations;