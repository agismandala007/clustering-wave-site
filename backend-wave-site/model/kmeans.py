import pandas as pd
from sklearn.cluster import KMeans
from sklearn.preprocessing import Normalizer
from schemas.cluster import RecipeCluster

class KMeans_Clustering:
    def __init__(self, newData: RecipeCluster):
        oldData = pd.read_csv('../data/save-ok.csv')
        newPd = pd.DataFrame([newData])

        oldData = pd.concat([oldData, newPd], ignore_index=True)

        return oldData[1]

