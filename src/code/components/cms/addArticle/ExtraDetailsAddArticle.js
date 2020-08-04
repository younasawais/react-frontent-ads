import React, { Component, Fragment } from 'react';
import UploadPicAddArticle from './UploadPicAddArticle';
import TextAndLabel from '../elements/TextAndLabel';
import TextAndCheckbox from '../elements/TextAndCheckbox';

class ExtraDetailsAddArticle extends Component {
    render() {
        const {dispatch, addArticle} = this.props;
        return (
            <Fragment>  
                <TextAndLabel 
                        labelName='Link ID: ' 
                        dispatch={dispatch} 
                        reducerType='linkIdAddArticle' 
                        value={addArticle.linkId}/>
                <TextAndLabel 
                        labelName='Tags: ' 
                        dispatch={dispatch} 
                        reducerType='tagsAddArticle' 
                        value={addArticle.tags}/>
                <TextAndLabel 
                        labelName='Reference: '
                        dispatch={dispatch} 
                        reducerType='referenceAddArticle' 
                        value={addArticle.reference} />
                <TextAndCheckbox 
                        checked={addArticle.active}
                        text='Active?'
                        dispatch={dispatch}
                        reducerType='activeAddArticle' />
                <UploadPicAddArticle text={'Upload 1'}/>
                <UploadPicAddArticle text={'Upload 2'}/>
            </Fragment>
        );
    }
}


export default ExtraDetailsAddArticle;