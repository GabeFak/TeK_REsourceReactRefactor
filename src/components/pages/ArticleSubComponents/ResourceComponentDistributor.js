import React from 'react';
import ResourceComponentLink from './ResourceComponentLink';
import ResourceComponentText from './ResourceComponentText';

const ResourceComponentDistributor = ({articleParagraph}) => {
    return (
        <div>                            
            {articleParagraph.map((articleEl, index) => {
                if(index % 2 === 0) {
                    return <ResourceComponentText text={articleEl} key={articleEl}/>
                }else{
                    return <ResourceComponentLink link={articleEl[0]} key={articleEl}/>
                };
            })}    
        </div>
    )
}

export default ResourceComponentDistributor;