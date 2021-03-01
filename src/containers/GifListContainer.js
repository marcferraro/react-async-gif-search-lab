import React from 'react'
import GifSearch from '../components/GifSearch'
import GifList from '../components/GifList'


export default class GifListContainer extends React.Component{
    
    constructor(){
        super()
        this.state = {
            gifs: [],
            search: ""
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

    handleSearch = event => {
        this.setState({
          search: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        
        fetch(`https://api.giphy.com/v1/gifs/search?q=${this.state.search}&api_key=dc6zaTOxFJmzC&rating=g`)
        .then(resp => resp.json())
        .then(results => {
            this.setState({
                gifs: results['data'].slice(0, 3)
            })
        })

        event.target.reset()
    }

    render(){
        return(
            <div>
                < GifSearch handleSearch={this.handleSearch} handleSubmit={this.handleSubmit}/>
                < GifList gifs={this.state.gifs} />
            </div>
        )
    }

    componentDidMount(){
        this.splashGifs()
    }
}