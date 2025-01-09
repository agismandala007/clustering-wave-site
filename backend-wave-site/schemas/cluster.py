from pydantic import BaseModel

class RecipeCluster(BaseModel):
    date: str
    mag: float
    depth: float
    prov: str