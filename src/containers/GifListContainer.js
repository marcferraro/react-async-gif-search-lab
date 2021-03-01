import React from 'react'
import GifSearch from '../components/GifSearch'
import GifList from '../components/GifList'


export default class GifListContainer extends React.Component{
    render(){
        return(
            <div>
                <div>Hello from gif list container</div>
                < GifSearch/>
                < GifList/>
            </div>
        )
    }
}