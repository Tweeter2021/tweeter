import React from 'react'
import TweetCard from '../Tweet/TweetCard'
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
class Explore extends React.Component {
    // eslint-disable-next-line no-useless-constructor
    constructor() {
        super();
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

    render() {

        return (
            <>
                <ExploreContainer>
                    <ExplorWrapper >
                        <Sidebar id='searchdiv'>
                            <SearchFilter className='searchfilter active' >Top</SearchFilter>
                            <SearchFilter className='searchfilter'>Latest</SearchFilter>
                            <SearchFilter className='searchfilter'>People</SearchFilter>
                            <SearchFilter className='searchfilter'>Media</SearchFilter>
                        </Sidebar>
                        <Mainbar>
                            <Searchbar>
                                <SearchIcon className="fa fa-search" aria-hidden="true" ></SearchIcon>
                                <SearchField type="text" placeholder="Search" ></SearchField>
                                <SearchBtn >Search</SearchBtn>
                            </Searchbar>

                            <Tweetbar>
                                {/* <TweetCard></TweetCard> */}
                            </Tweetbar>
                        </Mainbar>

                    </ExplorWrapper>
                </ExploreContainer>
            </>
        )
    }
}

export default Explore