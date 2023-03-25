import React from 'react'

export class Search extends React.Component {
    state = {
        search: 'matrix',
        type: 'all',
    }

    handleKey = (event) => {
        if (event.key === 'Enter') {
            this.props.searchMovies(this.state.search,this.state.type)
        }
    }
    handleFilter = (event) => {
        this.setState(
            () => ({ type: event.target.dataset.type }),
            () => {
                this.props.searchMovies(this.state.search, this.state.type)
            }
        )
    }
    render() {
        return (
            <div className="row">
                <div className="col s12">
                    <div className="input-field">
                        <input
                            placeholder="search"
                            value={this.state.search}
                            type="search"
                            className="validate"
                            onChange={(e) =>
                                this.setState({ search: e.target.value })
                            }
                            onKeyDown={this.handleKey}
                        />
                        <button
                            className="btn btn-search"
                            onClick={() =>
                                this.props.searchMovies(this.state.search,this.state.type)
                            }
                        >
                            Search
                        </button>
                    </div>
                    <div>
                        <label>
                            <input
                                className="with-gap"
                                name="type"
                                data-type="all"
                                onChange={this.handleFilter}
                                type="radio"
                                checked={this.state.type === 'all'}
                            />
                            <span>All</span>
                        </label>
                        <label>
                            <input
                                className="with-gap"
                                name="type"
                                data-type="movie"
                                onChange={this.handleFilter}
                                type="radio"
                                checked={this.state.type === 'movie'}
                            />
                            <span>Movies only</span>
                        </label>
                        <label>
                            <input
                                className="with-gap"
                                name="type"
                                data-type="series"
                                onChange={this.handleFilter}
                                type="radio"
                                checked={this.state.type === 'series'}
                            />
                            <span>Series only</span>
                        </label>
                    </div>
                </div>
            </div>
        )
    }
}
