import React from 'react'
import GifSearch from '../components/GifSearch'
import GifList from '../components/GifList'


export default class GifListContainer extends React.Component{
    
    constructor(){
        super()
        this.state = {
            gifs: []
        }
    }

    splashGifs =  () => {
        fetch('https://api.giphy.com/v1/gifs/search?q=YOUR QUERY HERE&api_key=dc6zaTOxFJmzC&rating=g')
        .then(resp => resp.json())
        .then(gifs => {
            console.log(gifs['data'].slice(0, 3))
            this.setState({
                gifs: gifs['data'].slice(0, 3)
            })
        })
    }


    render(){
        return(
            <div>
                < GifSearch/>
                < GifList gifs={this.state.gifs} />
            </div>
        )
    }

    componentDidMount(){
        this.splashGifs()
    }
}