import React, { Component, Fragment } from 'react';
import SelectMenuAddArticle from './SelectMenuAddArticle';
import ArticleTextAddArticle from './ArticleTextAddArticle';
import ExtraDetailsAddArticle from './ExtraDetailsAddArticle';
import TextAndLabel from '../elements/TextAndLabel';
import AlertMessage from '../elements/AlertMessage';
import ButtonCustom from '../elements/ButtonCustom';
import axios from 'axios';

class AddArticles extends Component {
    constructor(props){
        super(props);
        this.handleSaveChanges = this.handleSaveChanges.bind(this);
    }

    async handleSaveChanges(){
        const {title, menuItemName, files} = this.props.addArticle;
        const {dispatch,addArticle} = this.props;
        // let ObjWithoutPic = {...this.props.addArticle};
        // delete ObjWithoutPic.imageData;

        const data = new FormData();
        for (let i = 0; i < files.length; i++) {
            data.append('file', files[i] )}

        let addArticleValues = [];
        let addArticleProps  = [];

        // delete addArticle.files;
        for(let key in addArticle) {
            addArticleValues.push(addArticle[key]);
            addArticleProps.push(key);
        }
        console.log(addArticleValues);
        console.log(addArticleProps);
        for (let i = 0; i < addArticleProps.length; i++) {
            data.append(addArticleProps[i], addArticleValues[i]);
        }
        console.log(data);
        
        if(title !== '' || menuItemName !== ''){
            const response2 = await axios.post('http://localhost:4000/addArticleData', data);
            console.log(response2);
        }else{
                dispatch({
                type :'updateAlertAddArticle', 
                payload : {
                    input : 'Check Title and/or menu item name',
                    alertType : 'warning'
                }
            });
            setTimeout(function() {
                dispatch({
                    type :'updateAlertAddArticle', 
                    payload : {
                        input : '',
                        alertType : ''
                    }
                });
            }, 3000);
        }
    }

    render() {
        const {dispatch, addArticle} = this.props;
        return (
            <Fragment>
            <div style={{maxWidth:"1100px", marginLeft: 'auto', marginRight: 'auto', paddingLeft: '10px', paddingRight: '10px'}}>
                    {(addArticle.statusArticle !== '') ? <AlertMessage text={addArticle.statusArticle} type={addArticle.alertType} /> : '' }
                    <ButtonCustom text='Save Changes' handleSaveChanges={this.handleSaveChanges} />
                    <ButtonCustom text='Close' type='warning'/><hr/>
                    <TextAndLabel labelName='Title: ' 
                        dispatch={dispatch} 
                        reducerType='titleAddArticle' 
                        value={addArticle.title}/>
                    <TextAndLabel labelName='Item name inside menu: '
                        dispatch={dispatch} 
                        reducerType='menuItemNameAddArticle' 
                        value={addArticle.menuItemName}/>
                    <SelectMenuAddArticle {...this.props} />
                    <ArticleTextAddArticle label='Text 1'
                        dispatch={dispatch} 
                        reducerType='text1AddArticle' 
                        value={addArticle.text1}/>
                    <ArticleTextAddArticle label='Text 2'
                        dispatch={dispatch} 
                        reducerType='text2AddArticle' 
                        value={addArticle.text2}/>
                    {(addArticle.statusArticle !== '') ? <AlertMessage text={addArticle.statusArticle} type={addArticle.alertType} /> : '' }
                    <ExtraDetailsAddArticle {...this.props} />
                    <ButtonCustom text='Save Changes' handleSaveChanges={this.handleSaveChanges} />
                    <ButtonCustom text='Close' type='warning'/>
            </div>
            </Fragment>
        );
    }
}

export default AddArticles;