import httpClient from "~/services/http-client";

class MarvelServices {
    getCharacterList(params) {
        return httpClient.marvelInstance.get('characters', {
            params: params,
        })
    }

    getCharacterDetail(characterId: number) {
        return httpClient.marvelInstance.get(`characters/${characterId}`)
    }

    getCharacterComicsList(characterId: number) {
        return httpClient.marvelInstance.get(`characters/${characterId}/comics`)
    }
    getCharacterSeriesList(characterId: number) {
        return httpClient.marvelInstance.get(`characters/${characterId}/series`)
    }
}

export default new MarvelServices();