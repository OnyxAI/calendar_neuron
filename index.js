import {
  Calendar,
  mapDispatchToProps,
  mapStateToProps,
  reducer,
  saga,
} from './src/containers/Calendar';

const api = [
  {
    name: 'Calendar',
    url: '/calendar',
    component: Calendar,
    mapDispatchToProps,
    mapStateToProps,
    reducers: { key: 'calendar', reducer },
    sagas: { key: 'calendar', saga },
  },
];

export default api;
