import React, { Component } from 'react';
import {Mutation, Query} from 'react-apollo';
import { adopt } from 'react-adopt';
import {CURRENT_USER_QUERY} from './globals/queries/queries';
import {CREATE_EMAIL_MUTATION} from './globals/mutations/mutations';
import Button from './styles/SickButton';
import Form from './styles/Form';

const Composed = adopt({
  currentUser: ({render}) => <Query query={CURRENT_USER_QUERY}>{render}</Query>,
  sendEmail: ({render}) => <Mutation mutation={CREATE_EMAIL_MUTATION}>{render}</Mutation>,
})

class Reminders extends Component {
  state = {
    message: '',
    subject: '',
    sendDate: 'week',
    sendInterval: "1",
  }

  handleChange = (e) => {
    const {name, value} = e.target;
    this.setState({ [name]: value });
  }

  onSendEmail = (e, sendEmail, from, to) => {
    e.preventDefault();
    const vars = {
      from,
      to,
      message: this.state.message,
      subject: this.state.subject
    }
    sendEmail({ variables: vars });
  }

  render() {
    const {event, showQuickUpdate} = this.props;
    return (
      <Composed>
        {({currentUser, sendEmail}) => {
          const currentUserEmail = currentUser.data.me.email;
          return (
            <Form onSubmit={(e) => this.onSendEmail(e, sendEmail, currentUserEmail, event.act.email )}>
                <div></div>
                <fieldset>
                  <h1>Create A Reminder</h1>
                  <label htmlFor="subject">
                    Subject
                    <input type="text" id="subject" name="subject" placeholder="Enter the Subject" value={this.state.subject} required onChange={this.handleChange} />
                  </label>

                  <label htmlFor="message">
                    Message
                    <textarea style={{width: '100%', height: '300px'}} name="message" placeholder='Enter Your Message' value={this.state.message} required onChange={this.handleChange}/>
                  </label>
              
                  <label htmlFor="sendDate">
                    When Would You Like To Send
                    <input type="number" defaultValue={this.state.sendInterval} name="sendInterval" onChange={this.handleChange}/>
                    <select name="sendDate" defaultValue={this.state.sendDate} onChange={this.handleChange}>
                      <option value="week">Week</option>
                      <option value="day">Day</option>
                      <option value="hour">Hour</option>
                    </select>
                  </label>

                  <Button type="submit">Send Email</Button>
                </fieldset>
              </Form>
          )
        }}
      </Composed>
    );
  }
}

export default Reminders;