import makeSelectCalendar, { selectCalendarDomain } from '../selectors';

describe('selectCalendarDomain', () => {
  it('should select the calendar state', () => {
    const calendarState = {
      userData: {},
    };
    const mockedState = {
      calendar: calendarState,
    };
    expect(selectCalendarDomain(mockedState)).toEqual(calendarState);
  });
});

describe('makeSelectCalendar', () => {
  const calendarSelector = makeSelectCalendar();
  it('should select the calendar', () => {
    const calendar = {};
    const mockedState = {
      calendar: {},
    };
    expect(calendarSelector(mockedState)).toEqual(calendar);
  });
});
