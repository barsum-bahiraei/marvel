import {ref} from 'vue';
import MarvelServices from "~/services/marvel-services";
import {isLoading} from "~/composable/use-loading";

export function useCharacterList() {
    const characterList = ref([]);
    const characterParams = ref({
        limit: 12,
        offset: 0,
        nameStartsWith: null,
    });
    const getCharacterList = async () => {
        isLoading.value = true;
        try {
            const response = await MarvelServices.getCharacterList(characterParams.value);
            characterList.value = response.data;
        } catch (err) {
            console.error('Error fetching character list:', err);
        } finally {
            isLoading.value = false;
        }
    };

    return {
        characterList,
        characterParams,
        getCharacterList
    };
}
