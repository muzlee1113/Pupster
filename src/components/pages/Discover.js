import React, { Component } from "react";
import API from "../../utils/API";


class DiscoverResults extends Component {
    state = {
        result: "",
        matches: 0
    }
    componentDidMount() {
        this.searchDog();
    }

    handleLike = () => {
        let randomNumber = Math.floor(Math.random() * 5)
        this.searchDog(randomNumber)
    }

    handleDislike = () => {
        this.searchDog()
    }

    searchDog = (matches) => {
        console.log(matches)
        API.search("/breeds/image/random")
            .then(res => {
                if (matches === 0) {
                    this.setState({
                        result: res.data.message,
                        matches: this.state.matches + 1
                    })

                } else {
                    this.setState({
                        result: res.data.message
                    })
                }
                console.log(res)
            })
            .catch(err => console.log(err));
    }

    render() {
        return (<div className="text-center">
            <h1>Make New Friends</h1>
            <h3>Thumbs up on any pups you'd like to meet!</h3>
            <img className="img-thumbnail mb-2" src={this.state.result} />
            <div className="mb-2">
                <button className="btn btn-danger mr-5" onClick={this.handleDislike}><i class="fas fa-thumbs-down"></i></button>
                <button className="btn btn-success ml-5" onClick={this.handleLike}><i class="fas fa-thumbs-up"></i></button>
            </div>
            <h1>Made friends with {this.state.matches} pups so far!</h1>
        </div>)
    }
}

export default DiscoverResults