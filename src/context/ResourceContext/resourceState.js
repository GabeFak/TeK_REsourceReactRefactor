import React, { useReducer } from 'react';
import resourceContext from './resourceContext';
import resourceReducer from './resourceReducer';
import Articles from "../../components/articles.json"
import {
    SET_ARTICLE_STATE
} from '../types'

const ResourceState = props => {
    const initialState = {
        title: '',
        description: '',
        article: '',
        img: ''
    }


const [state, dispatch] = useReducer(resourceReducer, initialState);

    const displayArticlePage = (articleName) => {
        const Arts = Object.values(Articles);
        let statePayload;
        Arts.forEach((Article, index)=> {
            if(articleName === Article.title) {
                statePayload = Arts[index];
            }
        })
        // console.log(statePayload);
        dispatch({
            type: SET_ARTICLE_STATE,
            payload: statePayload
        })
    }

    return <resourceContext.Provider 
            value={{
                title: state.title,
                description: state.description,
                article: state.article,
                img: state.img,
                displayArticlePage
            }}> {props.children} </resourceContext.Provider>
        }
export default ResourceState; 