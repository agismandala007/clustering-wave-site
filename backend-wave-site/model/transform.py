import pandas as pd
from schemas.cluster import RecipeCluster
from schemas.cluster import RecipeCluster

class Transform:
    def __init__(self, new_data: RecipeCluster):
        self.data = pd.read_csv('./data/dataset.csv')
        self.new_data = pd.DataFrame([new_data.dict()])

        self.prov_mapping = dict(zip(self.data['prov'], self.data['prov_enco']))
        self.max_encoded_value = self.data['prov_enco'].max()
        
        self.new_data['prov_enco'] = self.new_data.apply(self.encode_provinces, axis=1)
    
    def add_new_data(self, method, cluster):
        self.new_data[method] = cluster
        self.data = pd.concat([self.data, self.new_data], ignore_index=True)
        self.data.to_csv('./data/dataset.csv', index=False)

    def encode_provinces(self, row):
        if row['prov'] in self.prov_mapping:
            return self.prov_mapping[row['prov']]
        else:
            self.max_encoded_value += 1
            return self.max_encoded_value

    def load_data(self):
        return self.data
