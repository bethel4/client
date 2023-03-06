import React from "react";
import { Text } from "rebass";
import { Image, Card, Heading, Button } from "rebass";
import styled from "@emotion/styled/macro";
import { useSelector, useDispatch } from 'react-redux'
import {getMusicsFetch} from '../state/musicState'
import {Link} from "react-router-dom"
export default function Music() {
  const musics = useSelector((state) => state.musics.musics )
  const dispatch = useDispatch()
  const countsong = musics.filter(function(item){
    if (item.title !== "") {
      return true;
    } else {
      return false;
    }
  })
  const countsalbum = musics.filter(function(item){
    if (item.title !== "") {
      return true;
    } else {
      return false;
    }
  })
  const countsartist = musics.filter(function(item){
    if (item.title !== "") {
      return true;
    } else {
      return false;
    }
  })
 
  const Hover = styled.div({
    opacity: 0,
    transition: "opacity 350ms ease",
  });
  const DisplayOver = styled.div({
    height: "100%",
    left: "0",
    position: "absolute",
    top: "0",
    width: "100%",
    zIndex: 2,
    transition: "background-color 350ms ease",
    backgroundColor: "transparent",
    padding: "20px 20px 0 20px",
    boxSizing: "border-box",
  });
  const SubTitle = styled.h4({
    fontFamily: "Helvetica",
    transform: "translate3d(0,50px,0)",
    transition: "transform 350ms ease",
  });

  const Paragraph = styled.p({
    transform: "translate3d(0,50px,0)",
    transition: "transform 350ms ease",
  });

  const CTA = styled.a({
    position: "absolute",
    bottom: "20px",
    left: "20px",
  });
  const Background = styled.div({
    // Other background code
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    color: "#FFF",
    position: "relative",
    width: "400px",
    height: "200px",
    cursor: "pointer",
    backgroundImage:
      "url(https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fG11c2ljJTIwYmFja2dyb3VuZHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60)",

    [`:hover ${DisplayOver}`]: {
      backgroundColor: "rgba(0,0,0,.5)",
    },
    [`:hover ${SubTitle}, :hover ${Paragraph}`]: {
      transform: "translate3d(0,0,0)",
    },
    [`:hover ${Hover}`]: {
      opacity: 1,
    },
  });

  const BigTitle = styled.h2({
    textTransform: "uppercase",
    fontFamily: "Helvetica",
  });
  return (
    <div id="gfg">
      <div >
        <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
          <h2 className="sr-only">Products</h2>
          <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 xl:gap-x-8">
            <a href="#" className="group">
              <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg  xl:aspect-w-7 xl:aspect-h-8">
                <Background>
                  <DisplayOver>
                    <BigTitle>Total Albums</BigTitle>
                    <Hover>
                    
                      <Paragraph>
                     More than {countsalbum.length} albums 
                     enjoy your day by listening to
                      the best albums 
                      </Paragraph>
                      <CTA><Link to={'/view'}>View More</Link></CTA>
                    </Hover>
                  </DisplayOver>
                </Background>
              </div>
             
            </a>
            <a href="#" className="group">
              <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8">
              <Background>
                  <DisplayOver>
                    <BigTitle>Total Songs</BigTitle>
                    <Hover>
                      <Paragraph>
                     We have  {countsong.length} total songs
                     enjoy your day by listening to
                      the best songs and make your day a postive day
                      </Paragraph> 
                      <CTA><Link to={'/view'}>View Mor</Link></CTA>
                    </Hover>
                  </DisplayOver>
                </Background>
              </div>
             
            </a>
            <a href="#" className="group">
              <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8">
              <Background>
                  <DisplayOver>
                    <BigTitle>Total Artist</BigTitle>
                    <Hover>
                    
                      <Paragraph>
                        Best aritst with total 
                      {countsartist.length} enkoy your day by choosing best artist
                      and listening there song
                      </Paragraph>
                      <CTA><Link to='/view'>View More</Link></CTA>
                    </Hover>
                  </DisplayOver>
                </Background>
              </div>
              
            </a>
            <a href="#" className="group">
              <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8">
              <Background>
                  <DisplayOver>
                    <BigTitle>Total Genre</BigTitle>
                    <Hover>
                     
                      <Paragraph>
                        choose your favorite genre and think postive
                        More description about this really cool random desert
                        photo from unsplash!
                      </Paragraph>
                      <CTA><Link to={'/view'}>View More</Link></CTA>
                    </Hover>
                  </DisplayOver>
                </Background>
              </div>
             
            </a>
            {/* More products... */}
          </div>
        </div>
      </div>
    </div>
  );
}
