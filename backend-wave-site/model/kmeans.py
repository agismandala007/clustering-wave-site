import pickle
from sklearn.cluster import KMeans
from schemas.cluster import RecipeCluster
from model.transform import Transform

class KMeansClustering(Transform):
    def __init__(self, new_data: RecipeCluster):
        super().__init__(new_data)

        with open('./pickle/kmeans_model.pkl', 'rb') as file:
            self.model = pickle.load(file)
        
        self.encode_provinces()

    def predict(self):
        normalized_data = self.normalize_data()
        return self.model.predict(normalized_data)