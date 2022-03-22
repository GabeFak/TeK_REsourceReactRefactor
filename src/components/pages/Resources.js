import React from 'react';
import Articles from "../articles.json";
import "../../resources.css";
import ResourceItem from './ResourseItem';

const Resources = () => {
    const Arts = Object.values(Articles);
    Arts.reverse();
    return (
        <div className="contentdivR">
            {Arts.map((Article, index) => (
                <ResourceItem key={Arts[index].id} article={Arts[index]} imgIndex={Arts.length - (index + 1)}/>
            ))}
        </div>
    )
}

export default Resources;

