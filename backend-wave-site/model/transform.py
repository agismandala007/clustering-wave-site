import pandas as pd
from schemas.cluster import RecipeCluster
from sklearn.preprocessing import Normalizer
from schemas.cluster import RecipeCluster

class Transform:
    def __init__(self, new_data: RecipeCluster):
        self.data = pd.read_csv('./data/dataset-with-label.csv')
        self.data.drop('prov_enco', axis=1, inplace=True)
        self.mapLoc = {}

        self.add_new_data(new_data)
    
    def add_new_data(self, new_data: RecipeCluster):
        new_df = pd.DataFrame([new_data.dict()])
        self.data = pd.concat([self.data, new_df], ignore_index=True)

    def encode_provinces(self):
        unique_locs = self.data['prov'].unique()
        self.mapLoc = {prov: i + 1 for i, prov in enumerate(unique_locs)}
        self.data['prov_enco'] = self.data['prov'].map(self.mapLoc)

    def normalize_data(self):
        features = ['mag', 'depth', 'rad', 'lat', 'lon', 'prov_enco']
        last_row = self.data.iloc[-1:][features]
        normalizer = Normalizer()
        normalized_data = normalizer.fit_transform(last_row)

        return normalized_data
