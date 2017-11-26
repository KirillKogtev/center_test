import React, { Component } from 'react';
import ReactSVG from 'react-svg';
import Icon from './relef.svg';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import muiTheme from './muiTheme';

import {Toolbar, ToolbarGroup, ToolbarTitle} from 'material-ui/Toolbar';
import {MenuItem, DropDownMenu, Subheader} from 'material-ui';
import {GridList, GridTile} from 'material-ui/GridList';



import styles from './styles';
import defStyle from './App.css'

const tilesData = [
    {
        PREVIEW_PATH: '/upload/iblock/c98/c981a7b86c13d27b4ce3871b5116f62a.jpg',
        NAME: 'Breakfast',
        DATE: 1482181200,
    },
    {
        PREVIEW_PATH: '/upload/iblock/c98/c981a7b86c13d27b4ce3871b5116f62a.jpg',
        NAME: 'Tasty burger',
        DATE: 1482181200,
    },
    {
        PREVIEW_PATH: '/upload/iblock/c98/c981a7b86c13d27b4ce3871b5116f62a.jpg',
        NAME: 'Camera',
        DATE: 1482181200,
    },
    {
        PREVIEW_PATH: '/upload/iblock/c98/c981a7b86c13d27b4ce3871b5116f62a.jpg',
        NAME: 'Morning',
        DATE: 1482181200,
    },
    {
        PREVIEW_PATH: '/upload/iblock/c98/c981a7b86c13d27b4ce3871b5116f62a.jpg',
        NAME: 'Hats',
        DATE: 1482181200,
    },
    {
        PREVIEW_PATH: '/upload/iblock/c98/c981a7b86c13d27b4ce3871b5116f62a.jpg',
        name: 'Honey',
        DATE: 1482181200,
    },
    {
        PREVIEW_PATH: '/upload/iblock/c98/c981a7b86c13d27b4ce3871b5116f62a.jpg',
        NAME: 'Vegetables',
        DATE: 1482181200,
    },
    {
        PREVIEW_PATH: '/upload/iblock/c98/c981a7b86c13d27b4ce3871b5116f62a.jpg',
        NAME: 'Water plant',
        DATE: 1482181200,
    },
];

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            value: 1,
        };
    }

    getDate = (date) => new Date(date * 1000).toLocaleDateString();

    handleChange = (event, index, value) => this.setState({value});

    render() {

        return (
            <MuiThemeProvider muiTheme={muiTheme}>
                <Toolbar>
                    <ToolbarGroup>
                        <svg viewBox="0 0 98 39" style={styles.svgIcon}>
                            <path fill="#1a1919" fill-rule="evenodd"
                                  d="M12.86.76h-12.07v5.64h5.33v24.45h-5.33v5.65h17.55v-5.65h-5.48v-30.09zm9.28 1c-1.63-.52-3.61-.83-6.02-.84v6.74h.46c3.8 0 5.66 1.56 5.66 4.71 0 4.42-4 4.87-5.71 4.87l-.41-.01v6.74h.6c8.93 0 13-6.02 13-11.6 0-2.77-.87-8.44-7.58-10.61zm0 0M37.53 20.68c.59.06 1.39.06 1.8.06 3.32 0 5.09-2.14 5.09-4.51 0-2.28-1.29-4.46-5.38-4.46-.98 0-3.18.04-3.95.04v12.18h2.44v-3.31zm0-6.59c.65-.02 1.25-.04 1.75-.04 1.66 0 2.56.72 2.56 2.16 0 1.55-1.14 2.25-2.58 2.25-.56 0-1.16-.04-1.73-.1v-4.27zm42.6 13.44c-.91 0-2.97.03-3.7.03v10.99h2.29v-2.84c.56.06 1.3.06 1.69.06 3.11 0 4.68-1.93 4.68-4.14 0-2.14-1.12-4.1-4.96-4.1zm.21 6.1c-.52 0-1.08-.04-1.62-.1v-3.83c.61-.02 1.17-.04 1.64-.04 1.56 0 2.31.59 2.31 1.95 0 1.45-.97 2.02-2.33 2.02zm-30.42-9.42c1.25 0 2.52-.36 3.41-1.12l-.65-1.6c-.52.41-1.43.81-2.52.81-1.41 0-2.48-.73-2.68-2.08h6.45c.1-.34.14-.68.14-1.24 0-2.5-1.93-4.15-4.23-4.15-2.94 0-4.73 2.09-4.73 4.69 0 2.82 1.93 4.69 4.81 4.69zm-.18-7.47c1.31 0 2.07.85 2.05 1.95h-4.39c.24-1.18.97-1.95 2.34-1.95zm9.33 1.55l.06-.95h2.37v6.65h2.28v-8.94h-6.77l-.14 2.78c-.2 3.46-1.25 4.19-2.03 4.11l.2 2.23c2.41 0 3.6-1.01 4.03-5.88zm14.7 2.3c0-1.59-.89-3.09-3.93-3.09h-1.23v-2.45h-2.29v8.94h3.34c3.04 0 4.11-1.69 4.11-3.4zm-5.16 1.41v-2.68h1.03c1.23 0 1.71.54 1.71 1.35 0 .82-.5 1.33-1.73 1.33h-1.01zm14.59 1.09l-.65-1.6c-.52.41-1.43.81-2.52.81-1.41 0-2.49-.73-2.69-2.08h6.46c.1-.34.14-.68.14-1.24 0-2.5-1.93-4.15-4.23-4.15-2.94 0-4.73 2.09-4.73 4.69 0 2.82 1.93 4.69 4.81 4.69 1.25 0 2.52-.36 3.41-1.12zm-3.59-6.35c1.31 0 2.06.85 2.04 1.95h-4.39c.24-1.18.98-1.95 2.35-1.95zm12.97-1.69h-.16v-1.43h-2.29v1.43h-.14c-3.11 0-4.82 2.18-4.82 4.47 0 2.29 1.73 4.47 4.84 4.47h.12v1.43h2.29v-1.43h.16c3.23 0 4.8-2.18 4.8-4.47 0-2.29-1.73-4.47-4.8-4.47zm-2.45 7.11h-.06c-1.64 0-2.46-1.47-2.46-2.64 0-1.17.68-2.62 2.36-2.62h.16v5.26zm2.37 0h-.08v-5.26h.16c1.61 0 2.36 1.45 2.36 2.62 0 1.17-.8 2.64-2.44 2.64zm-49.17 5.4h-2.29v6.81h-3.67v-6.81h-2.28v8.94h7.58v2.05h2.15v-4.18h-1.49v-6.81zm7.17-.22c-2.94 0-4.73 2.09-4.73 4.69 0 2.82 1.92 4.69 4.81 4.69 1.25 0 2.52-.36 3.41-1.12l-.65-1.6c-.52.41-1.43.81-2.53.81-1.41 0-2.48-.74-2.68-2.09h6.46c.1-.33.14-.67.14-1.23 0-2.5-1.93-4.15-4.23-4.15zm-2.45 3.86c.24-1.18.98-1.95 2.35-1.95 1.31 0 2.06.85 2.04 1.95h-4.39zm14.72-.26h-3.91v-3.38h-2.29v8.94h2.29v-3.42h3.91v3.42h2.28v-8.94h-2.28v3.38zm3.89-1.09h2.94v6.65h2.28v-6.65h2.92v-2.29h-8.14v2.29zm0 0">
                            </path>
                        </svg>
                    </ToolbarGroup>
                    <ToolbarGroup>
                        <ToolbarTitle text="Новостей на странице:" style={styles.toolbarTitle}/>
                        <DropDownMenu>
                            <MenuItem value={6} primaryText="6 новостей"/>
                            <MenuItem value={12} primaryText="12 новостей"/>
                            <MenuItem value={24} primaryText="24 новости"/>
                        </DropDownMenu>
                        <ToolbarTitle text="Сортировать:" style={styles.toolbarTitle}/>
                        <DropDownMenu value={this.state.value}>
                            <MenuItem value={1} primaryText="По дате" />
                            <MenuItem value={2} primaryText="По названию" />
                        </DropDownMenu>
                    </ToolbarGroup>
                </Toolbar>
                <div style={styles.root}>
                    <GridList
                        cols={3}
                    >
                        <Subheader>Новости</Subheader>
                        {tilesData.map((item) => (
                            <GridTile
                                key={`http://relefopt.ru${item.PREVIEW_PATH}`}
                                title={item.NAME}
                                subtitle={<span>Дата публикации: <b>{this.getDate(item.DATE)}</b></span>}
                            >
                                <img src={`http://relefopt.ru${item.PREVIEW_PATH}`}/>
                            </GridTile>
                        ))}
                    </GridList>
                </div>
            </MuiThemeProvider>

        );
    }
}

export default App;
