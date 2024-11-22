from pydantic import BaseModel

class RecipeCluster(BaseModel):
    mag: float
    depth: float
    rad: float
    lat: float
    long: float
    loc: str