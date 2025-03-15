import {ref} from 'vue';
import MarvelServices from "~/services/marvel-services";
import {isLoading} from "~/composable/use-loading";

export function useCharacterDetail() {
    const characterDetail = ref(null);

    const getCharacterDetail = async (characterId: number) => {
        isLoading.value = true;
        try {
            const response = await MarvelServices.getCharacterDetail(characterId);
            characterDetail.value = response.data;
        } catch (err) {
            console.error('Error fetching character detail:', err);
        } finally {
            isLoading.value = false;
        }
    };

    return {
        characterDetail,
        getCharacterDetail,
    };
}
