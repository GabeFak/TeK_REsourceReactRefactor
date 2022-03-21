import {
    SET_ARTICLE_STATE
} from '../types'

export default (state, action) => {
    switch(action.type) {
        case SET_ARTICLE_STATE:
            const parser = (article) => {
                let forHTML = [];
                const regX = /\|/;
                const newTextArray = article.split(regX);
        
                    newTextArray.forEach((text, index) => {
                        if(index % 2 === 0) {
                            forHTML.push(text);
                        }else{
                            const splitLinkReg = /\*/
                            let linkSplit = text.split(splitLinkReg)
                            forHTML.push([[linkSplit[0], linkSplit[1]]]);
                        }
                    })
                return forHTML;
            }
            return {
                ...state,
                title: action.payload.title,
                description: action.payload.Description,
                article: parser(action.payload.article),
                // article: action.payload.article,
                img: action.payload.img
            }
        default:
            return state;
    }
}