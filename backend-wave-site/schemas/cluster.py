from pydantic import BaseModel

class RecipeCluster(BaseModel):
    mag: float
    depth: float
    prov: str