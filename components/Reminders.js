import React, { Component } from 'react';
import {Mutation, Query} from 'react-apollo';
import { adopt } from 'react-adopt';
import { Spring } from 'react-spring/renderprops.cjs';
import HTML5Backend from 'react-dnd-html5-backend';
import { DragDropContext } from 'react-dnd';
import moment from 'moment';
import {CURRENT_USER_QUERY} from './globals/queries/queries';
import {CREATE_EMAIL_MUTATION} from './globals/mutations/mutations';
import Button from './styles/SickButton';
import Form from './styles/Form';
import TextToken from './TextToken';
import ReminderMessage from './ReminderMessage';

const Composed = adopt({
  currentUser: ({render}) => <Query query={CURRENT_USER_QUERY}>{render}</Query>,
  sendEmail: ({render}) => <Mutation mutation={CREATE_EMAIL_MUTATION}>{render}</Mutation>,
  spring:({render}) => <Spring from={{ opacity: 0, marginTop: -500 }} to={{ opacity: 1, marginTop: 0 }} config={{ duration: 250}}>{render}</Spring>,
})



class Reminders extends Component {
  state = {
    message: '',
    subject: '',
    sendDuration: 'week',
    sendInterval: "1",
  }

  handleChange = (e) => {
    const {name, value} = e.target;
    this.setState({ [name]: value });
  }

  onSendEmail = (e, sendEmail, from, to, startDate) => {
    e.preventDefault();
    const sendDate = moment(startDate).subtract(this.state.sendInterval, this.state.sendDuration).toDate();
    const vars = {
      from,
      to,
      message: this.state.message,
      subject: this.state.subject,
      sendDate
    }
    sendEmail({ variables: vars });
  }

  handleDrop = (text, name) => {
    this.setState(prevState => {
      const prevText = prevState.message;
      const newText = prevText + text;
      return { message: newText }
    })
  }
  

  render() {

    const {event, toggle} = this.props;
    return (

      <Composed>
        {({currentUser, sendEmail, spring}) => {
          const currentUserEmail = currentUser.data.me.email;
          const startDateFormatted = moment(event.start).format("MMMM Do, YYYY")
          return (
            <div style={spring}>
            <Form onSubmit={(e) => this.onSendEmail(e, sendEmail, currentUserEmail, event.act.email, event.start )}>
              <div className="tokens">
                <TextToken text={event.act.name} handleDrop={() => this.handleDrop(event.act.name)}/>
                <TextToken text={moment(event.start).format('dddd')} handleDrop={ () => this.handleDrop(moment(event.start).format('dddd'))} />
                <TextToken text={moment(event.start).format('MMMM')} handleDrop={ () => this.handleDrop(moment(event.start).format('MMMM'))} />
                <TextToken text={moment(event.start).format('Do')} handleDrop={ () => this.handleDrop(moment(event.start).format('Do'))} />
                <TextToken text={moment(event.start).format('YYYY')} handleDrop={ () => this.handleDrop(moment(event.start).format('YYYY'))} />
                <TextToken text={moment(event.start).format('h:mA')} handleDrop={ () => this.handleDrop(moment(event.start).format('h:mmA'))} />
              </div>
                <fieldset>
                  <h1>Create A Reminder</h1>
                  <label htmlFor="subject">
                    Subject
                    <ReminderMessage width="100%" height="25px" name="subject" placeholder="Enter the Subject" value={this.state.subject} change={this.handleChange}/>
                  </label>

                  <label htmlFor="message">
                    Message
                    <ReminderMessage width="100%" height="300px" name="message" placeholder="Enter Your Message" value={this.state.message} change={this.handleChange}/>
                  </label>
                </fieldset>
                <fieldset>
                  <label htmlFor="sendDate">
                    When Would You Like To Send?
                    <input type="number" defaultValue={this.state.sendInterval} name="sendInterval" onChange={this.handleChange}/>
                    <select name="sendDuration" defaultValue={this.state.sendDuration} onChange={this.handleChange}>
                      <option value="week">{parseInt(this.state.sendInterval) > 1 ? 'Weeks' : 'Week'}</option>
                      <option value="day">{parseInt(this.state.sendInterval) > 1 ? 'Days' : 'Day'}</option>
                      <option value="hour">{parseInt(this.state.sendInterval) > 1 ? 'Hours' : 'Hour'}</option>
                      <option value="minute">{parseInt(this.state.sendInterval) > 1 ? 'Minutes' : 'Minute'}</option>
                    </select>

                    <p>Before {startDateFormatted}.</p>
                    <p>This email will send on {moment(event.start).subtract(this.state.sendInterval, this.state.sendDuration).format("LLLL")}.</p>
                  </label>

                  <p><Button onClick={toggle}>Back</Button></p>
                  
                  <p><Button type="submit">Create Reminder</Button></p>
                </fieldset>
              </Form>
            </div>
          )
        }}
      </Composed>
    );
  }
}

export default DragDropContext(HTML5Backend)(Reminders);