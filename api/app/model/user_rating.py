from sqlalchemy import Column, Integer, ForeignKey

from api.app.model.base import BareBaseModel


class UserRating(BareBaseModel):
    __tablename__ = 'user_rating'
    user_id = Column(Integer, ForeignKey('user.id'), nullable=False)
    variant_id = Column(Integer, ForeignKey('variant.id'), nullable=False)
    rating = Column(Integer, nullable=False)
