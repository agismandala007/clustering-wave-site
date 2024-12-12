from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from schemas.cluster import RecipeCluster
from model.kmeans import KMeansClustering
from model.kmedoids import KMedoidsClustering

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
    labels = clustering_instance.predict()

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
    labels = clustering_instance.predict()

    return {
        'status': "200",
        'data': {
            'method': 'kmedoids',
            'data': labels
        }
    }