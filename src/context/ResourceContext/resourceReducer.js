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
                    // console.log(forHTML)
                return forHTML;
            }
            
            // let splitRegion = [];
            // const breakIntoNewParagraph = (input) => {
            //     // let articleParagraph = [];
            //     // let switchOver = 0;
            //     // input.forEach(item=> {
            //     //     articleParagraph[switchOver][].push(item);
            //     //     if(item.includes('^')){
            //     //         switchOver++;
            //     //     }
            //     // })
            //     // return (articleParagraph)
                

            //     input.forEach((item, index) => {
            //         if(item.includes("^")) {
            //             splitRegion.push(index);
            //         }
            //     })
            // }
            let foo = parser(action.payload.article)
            foo.toString();
            console.log(foo)

            // let sliced = []
            // foo.forEach((item, index)=> {
            //     let lastIndex = 0;
            //     if(item.includes("^")) {
            //         sliced.push(foo.slice(lastIndex, index));
            //         lastIndex = index;
            //         sliced.push(foo.slice(lastIndex, index));
            //     }
            //     console.log(sliced)
            // })
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