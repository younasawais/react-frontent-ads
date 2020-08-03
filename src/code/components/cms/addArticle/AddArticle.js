import React, { Component, Fragment } from 'react';
import SelectMenuAddArticle from './SelectMenuAddArticle';
import ArticleTextAddArticle from './ArticleTextAddArticle';
import ExtraDetailsAddArticle from './ExtraDetailsAddArticle';
import TextAndLabel from '../elements/TextAndLabel';
import AlertMessage from '../elements/AlertMessage';
import ButtonCustom from '../elements/ButtonCustom';

class AddArticles extends Component {
    // constructor(props){
    //     super(props);
    // }
    // TODO:: add props to ExtraDetails.....

    render() {
        return (
            <Fragment>
            <div style={{maxWidth:"1100px", marginLeft: 'auto', marginRight: 'auto', paddingLeft: '10px', paddingRight: '10px'}}>
                    <AlertMessage text='test' />
                    <ButtonCustom text='Save Changes'/>
                    <ButtonCustom text='Close' type='warning'/><hr/>
                    <TextAndLabel labelName='Title: ' 
                        dispatch={this.props.dispatch} 
                        reducerType='titleAddArticle' 
                        value={this.props.addArticle.title}/>
                    <TextAndLabel labelName='Item name inside menu: '
                        dispatch={this.props.dispatch} 
                        reducerType='menuItemNameAddArticle' 
                        value={this.props.addArticle.menuItemName}/>
                    <SelectMenuAddArticle {...this.props} />
                    <ExtraDetailsAddArticle {...this.props} />
                    <ArticleTextAddArticle label='Text 1'/>
                    <ArticleTextAddArticle label='Text 2'/>
            </div>
            </Fragment>
        );
    }
}

export default AddArticles;