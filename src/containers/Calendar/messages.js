/*
 * Calendar Messages
 *
 * This contains all the text for the Calendar container.
 */

import { defineMessages } from 'react-intl';

export const scope = 'app.containers.Calendar';

export default defineMessages({
  header: {
    id: `${scope}.header`,
    defaultMessage: 'Calendar',
  },
  title: {
    id: `${scope}.title`,
    defaultMessage: 'Title',
  },
  place: {
    id: `${scope}.place`,
    defaultMessage: 'Place',
  },
  note: {
    id: `${scope}.note`,
    defaultMessage: 'Note',
  },
  start: {
    id: `${scope}.start`,
    defaultMessage: 'Start',
  },
  end: {
    id: `${scope}.end`,
    defaultMessage: 'End',
  },
  send: {
    id: `${scope}.send`,
    defaultMessage: 'Send',
  },
  delete: {
    id: `${scope}.delete`,
    defaultMessage: 'Delete',
  },
  add_event: {
    id: `${scope}.add_event`,
    defaultMessage: 'Add Event',
  },
  update_event: {
    id: `${scope}.update_event`,
    defaultMessage: 'Update Event',
  },
  today: {
    id: `${scope}.today`,
    defaultMessage: 'Today',
  },
  nothing_today: {
    id: `${scope}.nothing_today`,
    defaultMessage: 'Nothing Today',
  },
});

const calendarMessagesFR = {
  allDay: 'Journée',
  previous: 'Précédent',
  next: 'Suivant',
  today: "Aujourd'hui",
  month: 'Mois',
  week: 'Semaine',
  day: 'Jour',
  agenda: 'Agenda',
  date: 'Date',
  time: 'Heure',
  event: 'Événement', // Or anything you want
  showMore: total => `+ ${total} événement(s) supplémentaire(s)`,
};

export function getCalendarMessage(language) {
  let messages = {};

  switch (language) {
    case 'fr-FR':
      messages = calendarMessagesFR;
      break;
    default:
      messages = {};
  }

  return messages;
}
