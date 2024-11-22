from pydantic import BaseModel

class RecipeCluster(BaseModel):
    mag: float
    depth: float
    rad: float
    lat: float
    lon: float
    prov: str