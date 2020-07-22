import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import {Route, Switch} from 'react-router-dom';
import Article from './components/Article';
import Home from './components/Home';
import Admin from './components/Admin';
import ManageArticles from './components/cms/managearticles/ManageArticles';
import AddArticle from './components/cms/managearticles/AddArticle';
import ManageMenus from    './components/cms/managemenus/ManageMenus';
import SettingsCms from    './components/cms/settingscms/SettingsCms';
import ModifyArticle from './components/cms/managearticles/ModifyArticle';

class RouterAll extends Component {
    extractArray(arr){
        let names = [];
        let routes = [];

        for (let i = 0; i < arr.length; i++) {
            if(arr[i].sub.length > 0){
                for (let j = 0; j < arr[i].sub.length; j++) {
                    names.push(arr[i].sub[j].name);
                    routes.push(arr[i].sub[j].router);
                }
            }
            names.push(arr[i].name);
            routes.push(arr[i].router);
            
        }
        return [names, routes];
    }

    render() {
        const {props} = this;
        const {bottomMenu,articleMenuItems} = this.props.article;
        const pages = this.extractArray(articleMenuItems);
        return (
            <Fragment>            
                {/* <Menu {...props}/> */}
                <Switch>
                    {bottomMenu.links.map((link, index)=> {return(
                        <Route
                            key = {index}
                            path={'/'+link}
                            render={({location, match}) => <Article {...props} match={match}/>}    
                        />
                    )})}

                    {pages[1].map((link, index)=>{return(
                        <Route
                            key = {index}
                            path={'/'+link}
                            render={({location, match}) => <Article {...props} match={match}/>}    
                        />
                    )})}

                    <Route
                        path='/admin' exact
                        render={({location, match}) => <Admin {...props}/>}    
                    />
                    

                    {/* change home when page done */}
                    <Route
                        path='/sub-second-two' exact   
                        render={({location, match}) => <Home {...props}/>}    
                    />
                    <Route
                        path='/manage-articles' exact   
                        render={({location, match}) => <ManageArticles {...props}/>}    
                    />
                    <Route
                        path='/manage-menus' exact   
                        render={({location, match}) => <ManageMenus {...props}/>}    
                    />
                    <Route
                        path='/settings-cms' exact   
                        render={({location, match}) => <SettingsCms {...props}/>}    
                    />
                    <Route
                        path='/add-article' exact   
                        render={({location, match}) => <AddArticle {...props}/>}    
                    />
                    <Route
                        path='/modify-article' exact   
                        render={({location, match}) => <ModifyArticle {...props}/>}    
                    />
                </Switch>
            </Fragment>
        );
    }
}

export default connect(state => state)(RouterAll);