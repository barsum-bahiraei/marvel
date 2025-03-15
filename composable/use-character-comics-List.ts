import { ref } from 'vue';
import MarvelServices from "~/services/marvel-services";

export function useCharacterComicsList() {
    const characterComicsList = ref([]);

    const getCharacterComicsList = async (characterId) => {
        try {
            const response = await MarvelServices.getCharacterComicsList(characterId);
            characterComicsList.value = response.data;
        } catch (err) {
            console.error('Error fetching character series list:', err);
        }
    };

    return {
        characterComicsList,
        getCharacterComicsList,
    };
}
