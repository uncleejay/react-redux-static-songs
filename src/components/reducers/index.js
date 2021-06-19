import { combineReducers } from 'redux';


// song list reducer
const songsReducer = () => {
    return [
        {title: 'No Scrubs', duration: '4:05'},
        {title: 'Macarena', duration:'2:30'},
        {title: 'All Star', duration:'2:15'},
        {title: 'I want it that way', duration:'1:45'}
    ];
};


// selecting a list of song reducer or selected song reducer
const selectedSongReducer = (selectedSong = null, action) => {
    if(action.type === 'SONG_SELECTED'){
        return action.payload;
    }
    return selectedSongReducer;
};

export default combineReducers({
    songs: songsReducer,
    selectedSong: selectedSongReducer
});