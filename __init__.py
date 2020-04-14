from neurons.calendar.api import *
from onyx.brain.core import OnyxNeuron
from onyx.utils.log import getLogger
from onyx.api.request import BearerAuth
import requests

from neurons.calendar.models.CalendarModel import Calendar as CalendarModel
from onyx.models import to_dict

__author__ = 'Cassim Khouani'

LOGGER = getLogger("Calendar")

class CalendarNeuron(OnyxNeuron):
    def __init__(self):
        super(CalendarNeuron, self).__init__(name="CalendarNeuron", raw_name="calendar")

    def get_api(self):
        api = [
            {
                'route': '/neuron/calendar',
                'class': Calendar
            },
            {
                'route': '/neuron/calendar/today',
                'class': CalendarToday
            },
            {
                'route': '/neuron/calendar/update',
                'class': UpdateCalendar
            }
        ]
        return api

    def handleGetToday(self, event):
        token = event.data['token']

        response = requests.get("http://localhost:5000/neuron/calendar/today", auth=BearerAuth(token))

        all_events = response.json()['events']
        
        text = ', '.join(event['title'] for event in all_events)
        self.speak(text)

    def initialize(self):
        #Initialize the Neuron
        LOGGER.info("Calendar init")
        self.load_intent_file('today', 'today')
        self.sockyx.on('neuron:calendar_today', self.handleGetToday)

    def stop(self):
        pass

def create_neuron():
    return CalendarNeuron()