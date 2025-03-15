import httpClient from "~/services/http-client";

class MarvelServices {
    schoolControl() {
        return httpClient.marvelInstance.get('school-item-creator/school-control')
    }
}

export default new MarvelServices();