import {
    SET_ARTICLE_STATE
} from '../types'

export default (state, action) => {
    switch(action.type) {
        case SET_ARTICLE_STATE:
            return {
                ...state,
                title: action.payload.title,
                description: action.payload.Description,
                article: action.payload.article,
                img: action.payload.img
            }
        default:
            return state;
    }
}