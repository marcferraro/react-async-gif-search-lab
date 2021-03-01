import React from 'react'

export default class GifSearch extends React.Component{
    render(){
        return(
            <div>
                <form onSubmit={this.props.handleSubmit}>
                    <label>Search Gifs</label>
                    <input type="text" id="search" onChange={this.props.handleSearch}></input>
                    <input type="submit"></input>
                </form>
            </div>
        )
    }
}