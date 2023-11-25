import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { Article } from 'entities/Article';
import {
    getArticlesPageHasMore, getArticlesPageIsLoading,
    getArticlesPageLimit,
    getArticlesPageNum,
} from '../../selectors/articlePageSelectors';
import { articlesPageActions } from '../../slices/ArticlesPageSlice';
import { fetchArticlesList } from '../../services/fetchArticlesList/fetchArticlesList';

interface FetchArticlesListProps {
    page?: number
}

export const fetchNextArticlesPage = createAsyncThunk<
    void,
    void,
    ThunkConfig<string>
>(
    'articlePage/fetchNextArticlesPage',
    async (_, thunkApi) => {
        const { getState, dispatch } = thunkApi;
        const hasMore = getArticlesPageHasMore(getState());
        const page = getArticlesPageNum(getState());
        const isLoading = getArticlesPageIsLoading(getState());

        if (hasMore && !isLoading) {
            dispatch(articlesPageActions.setPage(page + 1));
            dispatch(fetchArticlesList({
                page: page + 1,
            }));
        }
    },
);
