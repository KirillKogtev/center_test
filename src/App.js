import React, { Component } from 'react';
import ReactSVG from 'react-svg';
import relef from './relef.svg';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {Toolbar, ToolbarGroup, MenuItem, DropDownMenu, ToolbarTitle} from 'material-ui';

import {GridList, GridTile} from 'material-ui/GridList';

import styles from './App.css';

const tilesData = [
    {
        img: 'http://relefopt.ru/upload/iblock/c98/c981a7b86c13d27b4ce3871b5116f62a.jpg',
        title: 'Breakfast',
        author: 'jill111',
    },
    {
        img: 'http://relefopt.ru/upload/iblock/c98/c981a7b86c13d27b4ce3871b5116f62a.jpg',
        title: 'Tasty burger',
        author: 'pashminu',
    },
    {
        img: 'http://relefopt.ru/upload/iblock/c98/c981a7b86c13d27b4ce3871b5116f62a.jpg',
        title: 'Camera',
        author: 'Danson67',
    },
    {
        img: 'http://relefopt.ru/upload/iblock/c98/c981a7b86c13d27b4ce3871b5116f62a.jpg',
        title: 'Morning',
        author: 'fancycrave1',
    },
    {
        img: 'http://relefopt.ru/upload/iblock/c98/c981a7b86c13d27b4ce3871b5116f62a.jpg',
        title: 'Hats',
        author: 'Hans',
    },
    {
        img: 'http://relefopt.ru/upload/iblock/c98/c981a7b86c13d27b4ce3871b5116f62a.jpg',
        title: 'Honey',
        author: 'fancycravel',
    },
    {
        img: 'http://relefopt.ru/upload/iblock/c98/c981a7b86c13d27b4ce3871b5116f62a.jpg',
        title: 'Vegetables',
        author: 'jill111',
    },
    {
        img: 'http://relefopt.ru/upload/iblock/c98/c981a7b86c13d27b4ce3871b5116f62a.jpg',
        title: 'Water plant',
        author: 'BkrmadtyaKarki',
    },
];

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            value: 1,
        };
    }

    handleChange = (event, index, value) => this.setState({value});

    render() {
        return (
            <MuiThemeProvider>
                <Toolbar style={styles.toolbar}>
                    <ToolbarGroup>
                        <ReactSVG path={relef}/>
                    </ToolbarGroup>
                    <ToolbarGroup onChange={this.handleChange}>
                        <DropDownMenu value={this.state.value} >
                            <MenuItem value={1} primaryText="Дата" />
                            <MenuItem value={2} primaryText="Имя" />
                        </DropDownMenu>
                    </ToolbarGroup>
                </Toolbar>
                <GridList
                    cellHeight={180}
                >
                    {tilesData.map((tile) => (
                        <GridTile
                            key={tile.img}
                            title={tile.title}
                            subtitle={<span>by <b>{tile.author}</b></span>}
                        >
                            <img src={tile.img} />
                        </GridTile>
                    ))}
                </GridList>
            </MuiThemeProvider>

        );
    }
}

export default App;
