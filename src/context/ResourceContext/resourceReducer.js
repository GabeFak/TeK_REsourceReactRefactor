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
            let foo = [];
            if(typeof(action.payload.article) === 'string'){
                foo = [parser(action.payload.article)];
            }else{
                let pass = Object.values(action.payload.article);
                pass.forEach(item => {
                    foo.push(parser(item));
                    console.log(item)
                })
            }
            console.log(foo)
            return {
                ...state,
                title: action.payload.title,
                description: action.payload.Description,
                article: foo,
                img: action.payload.img
            }
        default:
            return state;
    }
}