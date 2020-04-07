/* eslint-disable no-undef */
/**
 *
 * Calendar
 *
 */

import React, { memo, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import globalize from 'globalize';

import { Card, CardBody, CardHeader, CardTitle } from 'uikit-react';
import { Modal } from 'react-materialize';
import M from 'materialize-css';

import {
  Calendar as BaseCalendar,
  globalizeLocalizer,
} from 'react-big-calendar';
import withDragAndDrop from 'react-big-calendar/lib/addons/dragAndDrop';
import { ChromePicker } from 'react-color';

import makeSelectCalendar, { makeSelectEvents } from './selectors';
import {
  getEvents,
  addEvent,
  updateDateEvent,
  updateEvent,
  deleteEvent,
  changeStart,
  changeEnd,
  changeColor,
  changeTitle,
  changePlace,
  changeNote,
  changeId,
} from './actions';
import calendarReducer from './reducer';
import calendarSaga from './saga';
import messages, { getCalendarMessage } from './messages';

import 'react-big-calendar/lib/addons/dragAndDrop/styles.css';
import 'react-big-calendar/lib/css/react-big-calendar.css';

require('globalize/lib/cultures/globalize.culture.fr');

export const reducer = calendarReducer;
export const saga = calendarSaga;

const localizer = globalizeLocalizer(globalize);
const Cal = withDragAndDrop(BaseCalendar);

export function Calendar({
  user,
  calendar,
  widget,
  events,
  getEventsFunc,
  addEventFunc,
  deleteEventFunc,
  updateDateEventFunc,
  updateEventFunc,
  changeIdFunc,
  changeColorFunc,
  changeEndFunc,
  changeNoteFunc,
  changeStartFunc,
  changeTitleFunc,
  changePlaceFunc,
}) {

  useEffect(() => {
    getEventsFunc();
  }, [0]);

  return (
    <div>
      <Helmet>
        <title>Calendar</title>
        <meta name="description" content="Description of Calendar" />
      </Helmet>
      <Card hover className={widget && 'widget'}>
        <CardHeader>
          <CardTitle>
            <FormattedMessage {...messages.header} />
          </CardTitle>
          <CardBody>
            <Cal
              localizer={localizer}
              events={events !== undefined ? events : []}
              eventPropGetter={event => {
                if (event.color) {
                  return { style: { backgroundColor: event.color } };
                }
                return {};
              }}
              resizable
              culture={user.language.substring(0, 2)}
              messages={getCalendarMessage(user.language)}
              selectable
              onEventDrop={({ event, start, end }) =>
                updateDateEventFunc(event.id, start, end)
              }
              onEventResize={({ event, start, end }) =>
                updateDateEventFunc(event.id, start, end)
              }
              onSelectSlot={({ start, end }) => {
                changeStartFunc(start);
                changeEndFunc(end);
                // eslint-disable-next-line no-undef
                M.Modal.getInstance(addModal).open();
              }}
              onSelectEvent={event => {
                changeStartFunc(event.start);
                changeEndFunc(event.end);
                changeColorFunc(event.color);
                changeNoteFunc(event.note);
                changePlaceFunc(event.place);
                changeTitleFunc(event.title);
                changeIdFunc(event.id);
                // eslint-disable-next-line no-undef
                M.Modal.getInstance(updateModal).open();
              }}
              startAccessor="start"
              endAccessor="end"
              style={{ height: widget ? '29vh' : 500 }}
            />
            <Modal
              id="addModal"
              actions={<p />}
              header={<FormattedMessage {...messages.add_event} />}
            >
              <form onSubmit={addEventFunc}>
                <div className="uk-padding-small">
                  <label htmlFor="title">
                    <FormattedMessage {...messages.title} />
                  </label>
                  <FormattedMessage {...messages.title}>
                    {message => (
                      <input
                        type="text"
                        className="uk-input uk-form-large"
                        value={calendar.title}
                        name="title"
                        id="title"
                        onChange={changeTitleFunc}
                        placeholder={message}
                      />
                    )}
                  </FormattedMessage>
                </div>
                <div className="uk-padding-small">
                  <label htmlFor="place">
                    <FormattedMessage {...messages.place} />
                  </label>
                  <FormattedMessage {...messages.place}>
                    {message => (
                      <input
                        type="text"
                        className="uk-input uk-form-large"
                        value={calendar.place}
                        name="place"
                        id="place"
                        onChange={changePlaceFunc}
                        placeholder={message}
                      />
                    )}
                  </FormattedMessage>
                </div>
                <div className="uk-padding-small">
                  <label htmlFor="note">
                    <FormattedMessage {...messages.note} />
                  </label>
                  <FormattedMessage {...messages.note}>
                    {message => (
                      <input
                        type="text"
                        className="uk-input uk-form-large"
                        value={calendar.note}
                        name="note"
                        id="note"
                        onChange={changeNoteFunc}
                        placeholder={message}
                      />
                    )}
                  </FormattedMessage>
                </div>
                <div className="uk-padding-small uk-position-top-center uk-position-relative">
                  <ChromePicker
                    color={calendar.color}
                    onChangeComplete={changeColorFunc}
                  />
                </div>
                <div className="uk-padding-small">
                  <p>
                    <FormattedMessage {...messages.start} /> :{' '}
                    {calendar.start.toString()}
                  </p>
                  <p>
                    <FormattedMessage {...messages.end} /> :{' '}
                    {calendar.end.toString()}
                  </p>
                </div>
                <div className="uk-padding-small center">
                  <button
                    type="submit"
                    className="uk-button uk-button-primary uk-button-large"
                  >
                    <FormattedMessage {...messages.send} />
                  </button>
                </div>
              </form>
            </Modal>
            <Modal
              id="updateModal"
              actions={<p />}
              header={<FormattedMessage {...messages.update_event} />}
            >
              <form onSubmit={updateEventFunc}>
                <div className="uk-padding-small">
                  <label htmlFor="title">
                    <FormattedMessage {...messages.title} />
                  </label>
                  <FormattedMessage {...messages.title}>
                    {message => (
                      <input
                        type="text"
                        className="uk-input uk-form-large"
                        value={calendar.title}
                        name="title"
                        id="title"
                        onChange={changeTitleFunc}
                        placeholder={message}
                      />
                    )}
                  </FormattedMessage>
                </div>
                <div className="uk-padding-small">
                  <label htmlFor="place">
                    <FormattedMessage {...messages.place} />
                  </label>
                  <FormattedMessage {...messages.place}>
                    {message => (
                      <input
                        type="text"
                        className="uk-input uk-form-large"
                        value={calendar.place}
                        name="place"
                        id="place"
                        onChange={changePlaceFunc}
                        placeholder={message}
                      />
                    )}
                  </FormattedMessage>
                </div>
                <div className="uk-padding-small">
                  <label htmlFor="note">
                    <FormattedMessage {...messages.note} />
                  </label>
                  <FormattedMessage {...messages.note}>
                    {message => (
                      <input
                        type="text"
                        className="uk-input uk-form-large"
                        value={calendar.note}
                        name="note"
                        id="note"
                        onChange={changeNoteFunc}
                        placeholder={message}
                      />
                    )}
                  </FormattedMessage>
                </div>
                <div className="uk-padding-small uk-position-top-center uk-position-relative">
                  <ChromePicker
                    color={calendar.color}
                    onChangeComplete={changeColorFunc}
                  />
                </div>
                <div className="uk-padding-small">
                  <p>
                    <FormattedMessage {...messages.start} /> :{' '}
                    {calendar.start.toString()}
                  </p>
                  <p>
                    <FormattedMessage {...messages.end} /> :{' '}
                    {calendar.end.toString()}
                  </p>
                </div>
                <div className="uk-padding-small center">
                  <button
                    type="button"
                    className="uk-margin-right uk-button uk-button-primary uk-button-large"
                    onClick={deleteEventFunc}
                  >
                    <FormattedMessage {...messages.delete} />
                  </button>
                  <button
                    type="submit"
                    className="uk-margin-left uk-button uk-button-primary uk-button-large"
                  >
                    <FormattedMessage {...messages.send} />
                  </button>
                </div>
              </form>
            </Modal>
          </CardBody>
        </CardHeader>
      </Card>
    </div>
  );
}

Calendar.propTypes = {
  user: PropTypes.object,
  widget: PropTypes.bool,
  events: PropTypes.array,
  calendar: PropTypes.object,
  getEventsFunc: PropTypes.func,
  addEventFunc: PropTypes.func,
  updateDateEventFunc: PropTypes.func,
  updateEventFunc: PropTypes.func,
  deleteEventFunc: PropTypes.func,
  changeColorFunc: PropTypes.func,
  changePlaceFunc: PropTypes.func,
  changeTitleFunc: PropTypes.func,
  changeNoteFunc: PropTypes.func,
  changeStartFunc: PropTypes.func,
  changeEndFunc: PropTypes.func,
  changeIdFunc: PropTypes.func,
};

export const mapStateToProps = createStructuredSelector({
  events: makeSelectEvents(),
  calendar: makeSelectCalendar(),
});

export function mapDispatchToProps(dispatch) {
  return {
    getEventsFunc: () => {
      dispatch(getEvents());
    },
    addEventFunc: evt => {
      if (evt !== undefined && evt.preventDefault) evt.preventDefault();
      M.Modal.getInstance(addModal).close();
      dispatch(addEvent());
    },
    updateDateEventFunc: (id, start, end) => {
      dispatch(updateDateEvent(id, start, end));
    },
    deleteEventFunc: () => {
      M.Modal.getInstance(updateModal).close();
      dispatch(deleteEvent());
    },
    updateEventFunc: evt => {
      if (evt !== undefined && evt.preventDefault) evt.preventDefault();
      M.Modal.getInstance(updateModal).close();
      dispatch(updateEvent());
    },
    changeColorFunc: color => {
      if (color.hex) {
        dispatch(changeColor(color.hex));
      } else {
        dispatch(changeColor(color));
      }
    },
    changeIdFunc: id => {
      dispatch(changeId(id));
    },
    changeTitleFunc: evt => {
      if (evt.target) {
        dispatch(changeTitle(evt.target.value));
      } else {
        dispatch(changeTitle(evt));
      }
    },
    changePlaceFunc: evt => {
      if (evt.target) {
        dispatch(changePlace(evt.target.value));
      } else {
        dispatch(changePlace(evt));
      }
    },
    changeNoteFunc: evt => {
      if (evt.target) {
        dispatch(changeNote(evt.target.value));
      } else {
        dispatch(changeNote(evt));
      }
    },
    changeStartFunc: start => {
      dispatch(changeStart(start));
    },
    changeEndFunc: end => {
      dispatch(changeEnd(end));
    },
  };
}
