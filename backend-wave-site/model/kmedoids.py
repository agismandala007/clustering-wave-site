import pickle
from sklearn_extra.cluster import KMedoids
from schemas.cluster import RecipeCluster
from model.transform import Transform

class KMedoidsClustering(Transform):
    def __init__(self, new_data: RecipeCluster):
        super().__init__(new_data)

        with open('./pickle/kmedoids_model.pkl', 'rb') as file:
            self.model = pickle.load(file)
        
        self.encode_provinces()

    def predict(self):
        normalized_data = self.normalize_data()
        return self.model.predict(normalized_data)