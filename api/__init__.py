from datetime import datetime
import moment
from flask import jsonify
from flask_jwt_extended import jwt_required, get_jwt_identity
from flask_restful import Resource, reqparse

from onyx.extensions import db
from neurons.calendar.models.CalendarModel import Calendar as CalendarModel
from onyx.models import to_dict

class CalendarToday(Resource):
    parser = reqparse.RequestParser(bundle_errors=True)

    @jwt_required
    def get(self):
        try:
            user = get_jwt_identity()
            today_events = []

            today = str(datetime.now()).split(" ")[0]

            all_events = [to_dict(event) for event in CalendarModel.query.filter(CalendarModel.user.endswith(str(user['id']))).all()]

            for event in all_events:
                event_date = event['start'].split("T")[0]
                if(today == event_date):
                    today_events.append(event)

            return jsonify(status="success", events=today_events)
        except Exception as e:
            return jsonify(status="error", message="{}".format(e)), 500


class Calendar(Resource):
    parser = reqparse.RequestParser(bundle_errors=True)
    parser.add_argument('id')
    parser.add_argument('title')
    parser.add_argument('place')
    parser.add_argument('start')
    parser.add_argument('end')
    parser.add_argument('color')
    parser.add_argument('note')


    @jwt_required
    def get(self):
        try:
            user = get_jwt_identity()

            events = [to_dict(event) for event in CalendarModel.query.filter(CalendarModel.user.endswith(str(user['id']))).all()]

            return jsonify(status="success", events=events)
        except Exception as e:
            return jsonify(status="error", message="{}".format(e)), 500

    @jwt_required
    def post(self):
        try:
            args = self.parser.parse_args()

            user = get_jwt_identity()

            title = args['title']
            place = args['place']
            note = args['note']
            start = args['start']
            end = args['end']
            color = args['color']

            if place == "e":
                # Adding Espaced Repetition
                repeat = [0,1,2,4,7,15,30]

                for i in repeat:
                    query = CalendarModel(user=user['id'],\
                                           title=title,\
                                           note=note,\
                                           place=place,\
                                           start=str(moment.date(start).add(days=i)).replace("+01.", "+02:"),\
                                           end=str(moment.date(end).add(days=i)).replace("+01.", "+02:"),\
                                           color=color)
                    db.session.add(query)
                    db.session.commit()
            else:
                query = CalendarModel(user=user['id'],\
                                           title=title,\
                                           note=note,\
                                           place=place,\
                                           start=start,\
                                           end=end,\
                                           color=color)
                db.session.add(query)
                db.session.commit()

            return jsonify(status="success")
        except Exception as e:
            print(e)
            return jsonify(status="error", message="{}".format(e)), 500

    @jwt_required
    def put(self):
        try:
            args = self.parser.parse_args()

            user = get_jwt_identity()

            id = args['id']
            start = args['start']
            end = args['end']

            query = CalendarModel.query.filter_by(id=id, user=str(user['id'])).first()

            query.start = start
            query.end = end

            db.session.add(query)
            db.session.commit()

            return jsonify(status="success")
        except Exception as e:
            return jsonify(status="error", message="{}".format(e)), 500

class UpdateCalendar(Resource):
    parser = reqparse.RequestParser(bundle_errors=True)
    parser.add_argument('id')
    parser.add_argument('title')
    parser.add_argument('place')
    parser.add_argument('color')
    parser.add_argument('note')

    @jwt_required
    def post(self):
        try:
            args = self.parser.parse_args()

            user = get_jwt_identity()

            id = args['id']

            title = args['title']
            place = args['place']
            note = args['note']
            color = args['color']

            update = CalendarModel.query.filter_by(id=id, user=str(user['id'])).first()

            update.title = title
            update.note = note
            update.place = place
            update.color = color

            db.session.add(update)
            db.session.commit()

            return jsonify(status="success")
        except Exception as e:
            return jsonify(status="error", message="{}".format(e)), 500

    @jwt_required
    def put(self):
        try:
            args = self.parser.parse_args()

            user = get_jwt_identity()

            id = args['id']

            delete = CalendarModel.query.filter_by(id=id, user=str(user['id'])).first()

            db.session.delete(delete)
            db.session.commit()

            return jsonify(status="success")
        except Exception as e:
            return jsonify(status="error", message="{}".format(e)), 500
