import React from 'react';
import PropTypes from 'prop-types';

import globalize from 'globalize';
import { FormattedMessage } from 'react-intl';
import { Modal } from 'react-materialize';
import M from 'materialize-css';

import {
  Calendar as BaseCalendar,
  globalizeLocalizer,
} from 'react-big-calendar';
import withDragAndDrop from 'react-big-calendar/lib/addons/dragAndDrop';
import { ChromePicker } from 'react-color';

import 'react-big-calendar/lib/addons/dragAndDrop/styles.css';
//import '../../assets/css/calendar.css';
import 'react-big-calendar/lib/css/react-big-calendar.css';

import messages, { getCalendarMessage } from '../containers/Calendar/messages';

require('globalize/lib/cultures/globalize.culture.fr');

const localizer = globalizeLocalizer(globalize);
const Cal = withDragAndDrop(BaseCalendar);

export default function Calendar({
  user,
  calendar,
  widget,
  events,
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
  return (
    <div>
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
              <FormattedMessage {...messages.end} /> : {calendar.end.toString()}
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
              <FormattedMessage {...messages.end} /> : {calendar.end.toString()}
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
