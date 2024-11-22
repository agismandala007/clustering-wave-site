from fastapi import FastAPI
from pydantic import BaseModel
from schemas.cluster import RecipeCluster
from model.kmeans import KMeans_Clustering

app = FastAPI()

@app.post("/api/kmeans")
def postKmeans(items: RecipeCluster):
    result = KMeans_Clustering(items)

    return {
        'status': "200",
        'data': {
            result
        }
    }