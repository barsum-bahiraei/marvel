import { ref } from 'vue';
import MarvelServices from "~/services/marvel-services";

export function useCharacterDetail() {
    const characterDetail = ref(null);

    const getCharacterDetail = async (characterId) => {
        try {
            const response = await MarvelServices.getCharacterDetail(characterId);
            characterDetail.value = response.data;
        } catch (err) {
            console.error('Error fetching character detail:', err);
        }
    };

    return {
        characterDetail,
        getCharacterDetail,
    };
}
