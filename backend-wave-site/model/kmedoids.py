import pickle
from sklearn_extra.cluster import KMedoids
from schemas.cluster import RecipeCluster
from model.transform import Transform

class KMedoidsClustering(Transform):
    def __init__(self, new_data: RecipeCluster):
        super().__init__(new_data)

        with open('./pickle/kmedoids_model.pkl', 'rb') as file:
            self.model = pickle.load(file)

    def predict(self):
        features = ['mag', 'depth', 'rad', 'prov_enco', 'lat', 'lon']

        result = self.model.predict(self.new_data[features])
        self.add_new_data('kmedoids', result[0])

        return result