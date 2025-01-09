import pickle
import json
from sklearn_extra.cluster import KMedoids
from schemas.cluster import RecipeCluster
from model.transform import Transform

class KMedoidsClustering(Transform):
    def __init__(self, new_data: RecipeCluster):
        super().__init__(new_data)

        with open('./pickle/kmedoids_model.pkl', 'rb') as file:
            self.model = pickle.load(file)

        with open('./data/kmedoids.json', 'r') as file:
            self.cluster = json.load(file)

    def start_predict(self):
        respone = self.predict(self.model, self.cluster, "kmedoids")
        
        return respone