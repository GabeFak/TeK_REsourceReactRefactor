import React, {useEffect, useContext} from 'react';
import { useParams } from 'react-router-dom';
import "../../blogPost.css";
import ResourceContext from '../../context/ResourceContext/resourceContext';
import { Link } from 'react-router-dom';
import ResourceComponentDistributor from './ArticleSubComponents/ResourceComponentDistributor';
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
const ArtImages = [ Article1, Article2, Article3, Article4, Article5, Article6, Article7, Article8, Article9, Article10, Article11, Article12 ];

const Resource = () => {
    const resourceContext = useContext(ResourceContext);
    const { displayArticlePage, title, article, img} = resourceContext;

    const loginParam = useParams();

    useEffect(() => {
        displayArticlePage(loginParam.article);
    }, []);

    return (
        <div className="blogPostCDWrapper">
            <img className="blogImage" src={ArtImages[img]} alt="ResourceIMG" width="500"/>
                <div className="contentdiv2">
                    <p><b><i className="what-if-it-was-green">/</i>{title}<i className="what-if-it-was-green">/</i></b></p>
                        {article !== "" && article.map((articleEl, index) => (
                            <ResourceComponentDistributor articleParagraph={articleEl} key={index}/>
                        ))}  
                </div>
                <div><Link className="back" to="/Resources">Back</Link></div>
                <div className="spacer"></div>
      </div>
    )
}

export default Resource;
