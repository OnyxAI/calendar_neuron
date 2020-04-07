from onyx.extensions import db

class Calendar(db.Model):
    __tablename__ = 'calendar'
    
    id = db.Column(db.Integer, primary_key=True)
    user = db.Column(db.String(), nullable=False)
    title = db.Column(db.String(64))
    place = db.Column(db.String(255))
    note = db.Column(db.String(255))
    start = db.Column(db.String(64))
    end = db.Column(db.String(64))
    color = db.Column(db.String(64))
    allday = db.Column(db.String(64))
