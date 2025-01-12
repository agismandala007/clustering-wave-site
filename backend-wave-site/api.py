from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from schemas.cluster import RecipeCluster
from model.kmeans import KMeansClustering
from model.kmedoids import KMedoidsClustering
import pandas as pd
import json

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=False,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.post("/api/kmeans")
async def postKmeans(items: RecipeCluster):
    clustering_instance = KMeansClustering(items)
    labels = clustering_instance.start_predict()

    return {
        'status': "200",
        'data': {
            'method': 'kmeans',
            'data': labels
        }
    }


@app.post("/api/kmedoids")
async def postKmedoids(items: RecipeCluster):
    clustering_instance = KMedoidsClustering(items)
    labels = clustering_instance.start_predict()

    return {
        'status': "200",
        'data': {
            'method': 'kmedoids',
            'data': labels
        }
    }
    
@app.get("/api/show")
def showData():
    data = pd.read_csv('./data/dataset.csv')
    to_json = data.to_dict(orient="records")
    
    return json.dumps(to_json)
    