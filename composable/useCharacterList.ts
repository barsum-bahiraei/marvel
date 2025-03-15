import { ref } from 'vue';
import MarvelServices from "~/services/marvel-services";

export function useCharacterList() {
    const characterList = ref([]);
    const characterParams = ref({
        limit: 10,
        offset: 1,
        nameStartsWith: null,
    });

    const getCharacterList = async () => {
        try {
            const response = await MarvelServices.getCharacterList(characterParams.value);
            characterList.value = response.data;
        } catch (err) {
            console.error('Error fetching character list:', err);
        }
    };

    return {
        characterList,
        characterParams,
        getCharacterList,
    };
}
