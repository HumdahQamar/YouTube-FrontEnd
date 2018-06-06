import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyDU_7YDsV0cWeRlrhc7JXja5Lln4tG_Y4s';

const App = () => {
    return (
        <div>
            <SearchBar/>
        </div>
    )
};

ReactDOM.render(<App />, document.querySelector('.container'));