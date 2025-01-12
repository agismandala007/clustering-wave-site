import pickle
import json
from schemas.cluster import RecipeCluster
from model.predict import Predict

class KMeansClustering(Predict):
    def __init__(self, new_data: RecipeCluster):
        super().__init__(new_data)

        with open('./pickle/kmeans_model.pkl', 'rb') as file:
            self.model = pickle.load(file)

        with open('./data/kmeans.json', 'r') as file:
            self.cluster = json.load(file)
            
    def start_predict(self):
        respone = self.predict(self.model, self.cluster, "kmeans")
        
        return respone

    

        