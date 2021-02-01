import React from 'react'
import TweetCard from '../Tweet/TweetCard'
import axios from 'axios';

import {
    ExploreContainer,
    Sidebar,
    Mainbar,
    Searchbar,
    Tweetbar,
    ExplorWrapper,
    SearchFilter,
    SearchIcon,
    SearchField,
    SearchBtn
} from './exploreelements'
import '../../App.css'
import SearchPeople from '../PeopleSearch';
class Explore extends React.Component {
    // eslint-disable-next-line no-useless-constructor
    constructor(props) {
        super();
        this.state = {
            searchit: '',
            searchResult: '',
            searchfilter: 'top',
            peopleresult: ''
        }
        this.searching = this.searching.bind(this)
        this.handelchange = this.handelchange.bind(this)
        this.handelchangefilter = this.handelchangefilter.bind(this)



    }

    componentDidMount() {
        var header = document.getElementById("searchdiv");
        console.log(header)
        var btns = header.getElementsByClassName("searchfilter");
        console.log(btns)

        for (var i = 0; i < btns.length; i++) {
            btns[i].addEventListener("click", function () {
                console.log('clicked')
                var current = document.getElementsByClassName("active");
                current[0].className = current[0].className.replace(" active", "");
                this.className += " active";
            });
        }
    }
    handelchangefilter(data) {
        this.setState({
            searchfilter: data
        })
        // console.log(data)
        this.searching()
    }
    searching() {
        //search tweet


        if (this.state.searchfilter === 'people')
            axios.post('/searchpeople', { search: this.state.searchit.toUpperCase() })
                .then((response) => {
                    console.log(response.data)
                    this.setState({
                        peopleresult: response.data
                    })
                })
                .catch((err) => {
                    console.log(err)
                })
        else
            axios.post('/search', { search: this.state.searchit.toUpperCase() })
                .then((response) => {
                    // console.log(response.data)
                    if (this.state.searchfilter === 'top') {
                        response.data.sort((a, b) => {
                            return a.likes.length - b.likes.length;
                        });
                        this.setState({
                            searchResult: response.data
                        })

                    }
                    else if (this.state.searchfilter === 'media') {
                        var result = []
                        for (var i in response.data) {
                            if (response.data[i].images[0])
                                result.push(response.data[i])
                        }
                        this.setState({
                            searchResult: result
                        })
                    }
                    else {
                        response.data.sort((a, b) => {
                            return a.likes.length - b.likes.length;
                        });
                        this.setState({
                            searchResult: response.data
                        })
                    }
                })
                .catch((err) => {
                    console.log(err)
                })

    }
    handelchange(e) {
        this.setState({
            searchit: e.target.value,
        })
    }
    render() {

        return (
            <>
                <ExploreContainer>
                    <ExplorWrapper >
                        <Sidebar id='searchdiv'>
                            <SearchFilter onClick={() => this.handelchangefilter('top')} className='searchfilter active' >Top</SearchFilter>
                            <SearchFilter onClick={() => this.handelchangefilter('latest')} className='searchfilter'>Latest</SearchFilter>
                            <SearchFilter onClick={() => this.handelchangefilter('people')} className='searchfilter'>People</SearchFilter>
                            <SearchFilter onClick={() => this.handelchangefilter('media')} className='searchfilter'>Media</SearchFilter>
                        </Sidebar>
                        <Mainbar>
                            <Searchbar>
                                <SearchIcon className="fa fa-search" aria-hidden="true" ></SearchIcon>
                                <SearchField type="text" placeholder="Search" onChange={this.handelchange}></SearchField>
                                <SearchBtn onClick={this.searching} >Search</SearchBtn>
                            </Searchbar>

                            <Tweetbar>
                                {(this.state.searchResult && this.state.searchfilter !== 'people') && (
                                    this.state.searchResult.slice(0).reverse().map((tweet, key) =>
                                    (<TweetCard username={tweet.username} key={key}
                                        createdAt={tweet.createdAt}
                                        description={tweet.description}
                                        images={tweet.images}
                                        likes={tweet.likes}
                                        id={tweet._id}></TweetCard>))


                                )}

                                {(this.state.peopleresult && this.state.searchfilter === 'people') && (
                                    this.state.peopleresult.map((user, key) =>
                                        <SearchPeople key={key} user={user}></SearchPeople>

                                    )


                                )}
                            </Tweetbar>
                        </Mainbar>

                    </ExplorWrapper>
                </ExploreContainer>
            </>
        )
    }
}

export default Explore