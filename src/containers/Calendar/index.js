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
import { useInjectSaga } from 'onyx/utils';
import { useInjectReducer } from 'onyx/utils';
import { Container } from 'onyx/components';
import { Widget } from 'onyx/components';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import CalendarComponent from '../../components/Calendar';

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
  getTodayEvents,
} from './actions';
import saga from './saga';
import reducer from './reducer';
import messages from './messages';

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
  useInjectReducer({ key: 'calendar', reducer });
  useInjectSaga({ key: 'calendar', saga });

  useEffect(() => {
    getEventsFunc();
  }, [0]);

  return (
    <div>
      <Helmet>
        <title>Calendar</title>
        <meta name="description" content="Description of Calendar" />
      </Helmet>
      <Container user={user} title={<FormattedMessage {...messages.header} />}>
        <CalendarComponent
          calendar={calendar}
          events={events}
          user={user}
          widget={false}
          addEventFunc={addEventFunc}
          deleteEventFunc={deleteEventFunc}
          updateEventFunc={updateEventFunc}
          updateDateEventFunc={updateDateEventFunc}
          changeStartFunc={changeStartFunc}
          changeEndFunc={changeEndFunc}
          changeIdFunc={changeIdFunc}
          changeColorFunc={changeColorFunc}
          changeNoteFunc={changeNoteFunc}
          changeTitleFunc={changeTitleFunc}
          changePlaceFunc={changePlaceFunc}
        />
      </Container>
    </div>
  );
}

export function CalendarWidgetComponent({
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
  deleteWidget,
}) {
  useInjectReducer({ key: 'calendar', reducer });
  useInjectSaga({ key: 'calendar', saga });

  useEffect(() => {
    getEventsFunc();
  }, [0]);

  return (
    <div>
      <Widget delete={() => deleteWidget()} title={<FormattedMessage {...messages.header} />}>
        <CalendarComponent
          calendar={calendar}
          events={events}
          user={user}
          widget
          addEventFunc={addEventFunc}
          deleteEventFunc={deleteEventFunc}
          updateEventFunc={updateEventFunc}
          updateDateEventFunc={updateDateEventFunc}
          changeStartFunc={changeStartFunc}
          changeEndFunc={changeEndFunc}
          changeIdFunc={changeIdFunc}
          changeColorFunc={changeColorFunc}
          changeNoteFunc={changeNoteFunc}
          changeTitleFunc={changeTitleFunc}
          changePlaceFunc={changePlaceFunc}
        />
      </Widget>
    </div>
  );
}

export function TodayWidgetComponent({ deleteWidget, getTodayEventsFunc, calendar, events }){
  useInjectReducer({ key: 'calendar', reducer });
  useInjectSaga({ key: 'calendar', saga });

  useEffect(() => {
    getTodayEventsFunc();
  }, [0])

  return (
    <div>
      {calendar && calendar.todayEvents.length !== 0 ? (
        <Widget
          title={<FormattedMessage {...messages.header} />}
          delete={() => deleteWidget()}
        >
          <ul className="uk-list uk-list-bullet">
            {calendar.todayEvents.map(event => (
              <li>{event.title}</li>
            ))}
          </ul>
        </Widget>
      ) : (
        <Widget
          title={<FormattedMessage {...messages.header} />}
          delete={() => deleteWidget()}
        >
          <p>{<FormattedMessage {...messages.nothing_today} />}</p>
        </Widget>
      )}
    </div>
  )
}

TodayWidgetComponent.propTypes = {
  calendar: PropTypes.object,
  deleteWidget: PropTypes.func,
  getTodayEventsFunc: PropTypes.func,
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

CalendarWidgetComponent.propTypes = {
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
  deleteWidget: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  events: makeSelectEvents(),
  calendar: makeSelectCalendar(),
});

function mapDispatchToProps(dispatch) {
  return {
    getTodayEventsFunc: () => {
      dispatch(getTodayEvents());
    },
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

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export const CalendarWidget = compose(
  withConnect,
  memo,
)(CalendarWidgetComponent);


export const TodayWidget = compose(
  withConnect,
  memo,
)(TodayWidgetComponent);

export default compose(
  withConnect,
  memo,
)(Calendar);
