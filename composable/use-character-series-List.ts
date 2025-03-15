import { ref } from 'vue';
import MarvelServices from "~/services/marvel-services";

export function useCharacterSeriesList() {
    const characterSeriesList = ref([]);

    const getCharacterSeriesList = async (characterId) => {
        try {
            const response = await MarvelServices.getCharacterSeriesList(characterId);
            characterSeriesList.value = response.data;
        } catch (err) {
            console.error('Error fetching character series list:', err);
        }
    };

    return {
        characterSeriesList,
        getCharacterSeriesList,
    };
}
