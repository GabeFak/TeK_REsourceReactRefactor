import React from 'react';
import { Link } from 'react-router-dom';
import Article1 from "../../images/Article1Img.jpg";
import Article2 from "../../images/Article2Img.jpg";
import Article3 from "../../images/Article3Img.jpg";
import Article4 from "../../images/Article4Img.jpg";
import Article5 from "../../images/Article5Img.jpg";
import Article6 from "../../images/Article6Img.png";
import Article7 from "../../images/Article7Img.png";
import Article8 from "../../images/Article8Img.jpg";
import Article9 from "../../images/Article9Img.png";
import Article10 from "../../images/Article10Img.png";
import Article11 from "../../images/Article11Img.png";
import Article12 from "../../images/Article12Img.png";
import "../../resources.css";

const ResourceItem = ({ imgIndex, article: { title, Description}}) => {
    const ArtImages = [ Article1, Article2, Article3, Article4, Article5, Article6, Article7, Article8, Article9, Article10, Article11, Article12 ];
    return(
        <div className="imageAndTextWrapper">
            <Link className="two" to={`/Resource/${title}`}><img className="resourceImg" src={ArtImages[imgIndex]} alt="ResourceIMG" width="500"/><div className="innerTex"> <h1>{title}</h1><h2>{Description}</h2></div></Link>
        </div>
    )
}

export default ResourceItem;