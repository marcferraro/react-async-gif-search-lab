import React from 'react'

export default class GifList extends React.Component{
    render(){
        return(
            // <div>Hello from gif list</div>
            <ul>
                {this.props.gifs.map(gif => <li key={gif.id}><img src={gif.images.original.url} alt="A gif from Giphy"></img></li>)}
            </ul>
            
        )
    }
}