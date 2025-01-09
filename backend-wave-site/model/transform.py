import pandas as pd
from schemas.cluster import RecipeCluster
from schemas.cluster import RecipeCluster

class Transform:
    def __init__(self, new_data: RecipeCluster):
        self.data = pd.read_csv('./data/dataset.csv')
        self.new_data = pd.DataFrame([new_data.dict()])

        # self.prov_mapping = dict(zip(self.data['prov'], self.data['prov_enco']))
        # self.max_encoded_value = self.data['prov_enco'].max()
        
        # self.new_data['prov_enco'] = self.new_data.apply(self.encode_provinces, axis=1)
    
    def add_new_data(self, method, cluster):
        self.new_data[method] = cluster
        
        self.data = pd.concat([self.data, self.new_data], ignore_index=True)
        self.data.to_csv('./data/dataset.csv', index=False)

    # def encode_provinces(self, row):
    #     if row['prov'] in self.prov_mapping:
    #         return self.prov_mapping[row['prov']]
    #     else:
    #         self.max_encoded_value += 1
    #         return self.max_encoded_value
        
    def predict(self, model, cluster, cluster_type):
        features = ['mag', 'depth']
        
        self.new_predict = model.predict(self.new_data[features])
        self.add_new_data(cluster_type, self.new_predict[0])
        respone = self.get_prov(cluster[self.new_predict[0]], cluster_type)
        
        return respone

    def get_prov(self, respone, method):
        respone_trait = ""
        
        prov_count = self.data["prov"][
            (self.data[method] == self.new_predict[0]) & 
            (self.data["prov"] == self.new_data["prov"][0])
        ].count()
        
        if prov_count > 0:
            respone_trait = f"Provinsi {self.new_data['prov'][0]} telah terjadi gempa bumi sebanyak {prov_count} kali pada cluster {self.new_predict[0]}."

        else:
            respone_trait = f"Provinsi {self.new_data['prov'][0]} baru terjadi gempa bumi sebanyak 1 kali pada cluster {self.new_predict[0]}."
        
        respone["trait"].append(respone_trait)
        
        return respone