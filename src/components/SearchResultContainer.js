import React, { Component } from "react";
import SearchForm from "./pages/Search";
import ResultList from "./ResultList";
import API from "../utils/API";

class SearchResultContainer extends Component {
    state = {
        search: "Poodle",
        results: []
    };

    // When this component mounts, search the Dog API for pictures of kittens
    componentDidMount() {
        this.searchDog(this.state.search);
    }

    searchDog = query => {
        
        API.search("/breed/" + query + "/images")
            .then(res => {  
                this.setState({
                    results: res.data.message
                })
            })
            .catch(err => console.log(err));
    };

    handleInputChange = event => {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({
            [name]: value
        });
    };

    // When the form is submitted, search the DOg API for `this.state.search`
    handleFormSubmit = event => {
        event.preventDefault();
        this.searchDog(this.state.search);
    };

    render() {
        return (
            <div className="row">
                <div className="col-2"></div>
                <div className="col-8 py-5">
                    <SearchForm
                        search={this.state.search}
                        handleFormSubmit={this.handleFormSubmit}
                        handleInputChange={this.handleInputChange}
                    />
                    <h3 className="mb-3 text-center">Here are the {this.state.search}s</h3>
                    <ResultList results={this.state.results} />
                </div>
                <div className="col-2"></div>
            </div>
        );
    }
}

export default SearchResultContainer;