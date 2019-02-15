import React, { Component } from "react";
import { Mutation, Query } from "react-apollo";
import { adopt } from "react-adopt";
import Router from "next/router";
import Form from "./styles/Form";
import Error from "./ErrorMessage";
import moment from "moment";
import * as mutations from "./globals/mutations/mutations";
import * as queries from "./globals/queries/queries";
import { possibleStatus } from "../lib/possibleStatus";
import Button from "./styles/DeleteButtonStyles";

const Composed = adopt({
  singleEventQuery: ({ singleEventId, render }) => (
    <Query query={queries.SINGLE_EVENT_QUERY} variables={{ id: singleEventId }}>
      {render}
    </Query>
  )
  // allActsQuery: ({render}) => <Query query={ALL_ACTS_QUERY}>{render}</Query>,
  // updateEventMutation:({updateVars, render}) => <Mutation mutation={UPDATE_EVENT_MUTATION} variables={updateVars}>{render}</Mutation>,
});

class UpdateEvent extends Component {
  // todo: it would be great to not have the image preloaded into state
  state = {
    image: ""
  };

  componentDidMount() {
    if (Router.query.start) {
      this.setState({
        start: new Date(decodeURIComponent(Router.query.start))
      });
    }
  }

  handleChange = (e, event) => {
    const { name, type, value } = e.target;

    switch (name) {
      case "status":
        return this.setState({ status: value });
      case "select-existing-act":
        return this.setState({
          actId: value,
          name: "",
          email: "",
          description: "",
          image: "",
          largeImage: ""
        });
      case "duration":
        let val = parseFloat(value);
        return this.setState({
          duration: val,
          end: !!this.state.start
            ? moment(this.state.start)
                .add(val, "minutes")
                .toDate()
            : moment(event.start)
                .add(val, "minutes")
                .toDate()
        });
      case "draw":
        val = parseFloat(value);
        return this.setState({ [name]: value });
      case "notes":
        const notes = [...this.state.notes];
        const selectedIndex = parseInt(e.target.dataset.key);
        notes[selectedIndex] = value;
        return this.setState({ notes });
    }

    switch (type) {
      case "date":
        if (this.state.start != null) {
          const time = moment(this.state.start).format("hh:mm");
          let startDateTime = new Date(`${value} ${time}`);
          const title = moment(value).format("YYYY-M-D");
          let end = moment(startDateTime)
            .add(this.state.duration, "minutes")
            .toDate();
          this.setState({ start: startDateTime, title, end });
          break;
        }
        let duration = moment(event.end).diff(event.start, "minutes");
        const startTime = moment(event.start).format("hh:mm");
        let startDateTime = new Date(`${value} ${startTime}`);
        let end = moment(startDateTime)
          .add(duration, "minutes")
          .toDate();
        const title = moment(value).format("YYYY-M-D");
        this.setState({ start: startDateTime, title, end, duration });
        break;
      case "time":
        const date = !!this.state.start
          ? moment(this.state.start)
              .format("YYYY-M-D")
              .toString()
          : moment(event.start)
              .format("YYYY-M-D")
              .toString();
        startDateTime = new Date(`${date} ${value}`);
        duration = moment(event.end).diff(event.start, "minutes");
        end = !!this.state.duration
          ? moment(startDateTime)
              .add(this.state.duration, "minutes")
              .toDate()
          : moment(startDateTime)
              .add(duration, "minutes")
              .toDate();
        this.setState({ start: startDateTime, end });
        break;
      case "checkbox":
        this.setState({ allDay: !this.state.allDay });
        break;
      default:
        this.setState({ [name]: value });
    }
  };

  updateEvent = async (e, updateEventMutation, actId) => {
    e.preventDefault();
    const res = await updateEventMutation({
      variables: {
        id: this.props.id,
        start: this.state.start,
        actId,
        ...this.state
      }
    });
    Router.push({
      pathname: "/"
    });
  };

  uploadFile = async e => {
    const files = e.target.files;
    const data = new FormData();
    data.append("file", files[0]);
    data.append("upload_preset", "react-apollo-cal");
    const res = await fetch(
      "https://api.cloudinary.com/v1_1/dlskxwzm6/image/upload",
      {
        method: "POST",
        body: data
      }
    );
    const file = await res.json();
    this.setState({
      image: file.secure_url,
      largeImage: file.eager[0].secure_url
    });
  };

  // if a new image has been added, it will be put in state and previewed.
  // otherwise, the image preview will be from the query
  renderPreview = img => {
    if (this.state.image) {
      return <img src={this.state.image} alt="Upload Preview" width="200" />;
    }
    this.setState({
      image: img
    });
    return <img src={img} alt="Upload Preview" width="200" />;
  };

  addNoteField = (e, notes) => {
    e.preventDefault();
    if (notes) {
      const notesCopy = [...notes];
      notesCopy.push("");
      return this.setState({ notes: notesCopy });
    }
    const notesCopy = [...this.state.notes];
    notesCopy.push("");
    return this.setState({ notes: notesCopy });
  };

  handleDeleteNote = (e, index, notes) => {
    e.preventDefault();
    if (notes) {
      const notesCopy = [...notes];
      const notesFiltered = notesCopy.filter((note, i) => i !== index);
      return this.setState({ notes: notesFiltered });
    }
    const notesCopy = [...this.state.notes];
    const notesFiltered = notesCopy.filter((note, i) => i != index);
    return this.setState({ notes: notesFiltered });
  };

  render() {
    return (
      <Composed singleEventId={this.props.id}>
        {({ singleEventQuery }) => {
          if (singleEventQuery.loading) return <p>Loading...</p>;
          if (!singleEventQuery.data.event)
            return <p>No Event Found for ID {this.props.id}</p>;
          const { event } = singleEventQuery.data;

          let notes = null;
          if (this.state.notes) {
            notes = this.state.notes.map((note, index) => (
              <div key={index}>
                <textarea
                  id="notes"
                  data-key={index}
                  name="notes"
                  placeholder="Enter A Note"
                  value={note}
                  onChange={e => this.handleChange(e, event)}
                />
                <Button onClick={e => this.handleDeleteNote(e, index)}>
                  -
                </Button>
              </div>
            ));
          } else if (event.notes.length > 0) {
            notes = event.notes.map((note, index) => (
              <div key={index}>
                <textarea
                  id="notes"
                  data-key={index}
                  name="notes"
                  placeholder="Enter A Note"
                  value={note}
                  onChange={e => this.handleChange(e, event)}
                  disabled
                />{" "}
                <Button
                  onClick={e => this.handleDeleteNote(e, index, event.notes)}
                >
                  -
                </Button>
              </div>
            ));
          }
          const formattedDate = moment(event.start).format("YYYY-MM-DD");
          const formattedTime = moment(event.start).format("HH:mm");

          return (
            <Mutation
              mutation={mutations.UPDATE_EVENT_MUTATION}
              variables={this.state}
              refetchQueries={[
                {
                  query: queries.ALL_EVENTS_QUERY
                },
                {
                  query: queries.ALL_ACTS_QUERY
                },
              ]}
            >
              {(updateEvent, { loading, error }) => (
                <Query query={queries.ALL_ACTS_QUERY}>
                  {({ data }) => (
                    <Form
                      onSubmit={e =>
                        this.updateEvent(e, updateEvent, event.act.id)
                      }
                    >
                      <Error error={error} />

                      <fieldset disabled={loading} aria-busy={loading}>
                        <label htmlFor="date">
                          Date
                          <input
                            type="date"
                            id="date"
                            name="date"
                            placeholder="Date"
                            required
                            defaultValue={formattedDate}
                            onChange={e => this.handleChange(e, event)}
                          />
                        </label>

                        <label htmlFor="time">
                          Time
                          <input
                            type="time"
                            id="time"
                            name="time"
                            placeholder="Date"
                            required
                            defaultValue={formattedTime}
                            onChange={e => this.handleChange(e, event)}
                          />
                        </label>

                        <label htmlFor="duration">
                          Duration (minutes)
                          <input
                            type="number"
                            id="duration"
                            name="duration"
                            defaultValue={moment(event.end).diff(
                              moment(event.start),
                              "minutes"
                            )}
                            onChange={e => this.handleChange(e, event)}
                          />
                        </label>

                        <label htmlFor="status">
                          Status
                          <select
                            name="status"
                            defaultValue={event.status}
                            onChange={e => this.handleChange(e, event)}
                          >
                            {possibleStatus.map(status => (
                              <option key={status} value={status}>
                                {status}
                              </option>
                            ))}
                          </select>
                        </label>

                        <label htmlFor="allDay">
                          All Day
                          <input
                            type="checkbox"
                            id="allday"
                            name="allday"
                            checked={event.allDay}
                            onChange={e => this.handleChange(e, event)}
                          />
                        </label>

                        <label htmlFor="notes">
                          Notes
                          {notes}
                          <Button
                            onClick={e =>
                              this.addNoteField(
                                e,
                                this.state.notes ? null : event.notes
                              )
                            }
                          >
                            &#43;
                          </Button>
                        </label>

                        <label htmlFor="draw">
                          Draw
                          <input
                            type="number"
                            id="draw"
                            name="draw"
                            placeholder={event.draw || 0}
                            onChange={e => this.handleChange(e, event)}
                          />
                        </label>

                        <label htmlFor="name">
                          Act Name
                          <textarea
                            id="name"
                            name="name"
                            placeholder="Act Name"
                            required
                            defaultValue={event.act.name}
                            onChange={e => this.handleChange(e, event)}
                          />
                        </label>

                        <label htmlFor="description">
                          Blurb
                          <textarea
                            id="description"
                            name="description"
                            placeholder="Blurb"
                            required
                            defaultValue={event.act.description}
                            onChange={e => this.handleChange(e, event)}
                          />
                        </label>

                        <label htmlFor="email">
                          Email
                          <textarea
                            id="email"
                            name="email"
                            placeholder="contact email"
                            required
                            defaultValue={event.act.email}
                            onChange={e => this.handleChange(e, event)}
                          />
                        </label>

                        <label htmlFor="image">
                          Picture
                          <input
                            type="file"
                            id="file"
                            name="file"
                            placeholder="Upload an image"
                            onChange={this.uploadFile}
                          />
                          {this.renderPreview(event.act.image)}
                        </label>
                        <hr />
                        <h3>Or Change To A Different Act</h3>
                        <select
                          defaultValue=""
                          onChange={e => this.handleChange(e, event)}
                        >
                          <option value="" disabled>
                            Acts
                          </option>
                          {data.acts.map(act => (
                            <option key={act.id} value={act.id}>
                              {act.name}
                            </option>
                          ))}
                        </select>
                        <button type="submit">
                          Sav{loading ? "ing" : "e"} Changes
                        </button>
                      </fieldset>
                    </Form>
                  )}
                </Query>
              )}
            </Mutation>
          );
        }}
      </Composed>
    );
  }
}

export default UpdateEvent;
