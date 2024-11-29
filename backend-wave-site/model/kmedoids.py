import pickle
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

    def predict(self):
        features = ['mag', 'depth', 'rad', 'prov_enco', 'lat', 'lon']

        new_predict = self.model.predict(self.new_data[features])
        self.add_new_data('kmedoids', new_predict[0])


        return self.cluster[new_predict[0]]