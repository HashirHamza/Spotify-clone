import React from 'react'
import styled from "styled-components"
export default function Login() {
  const handleClick = () => {
    const clientId = "20133447731a4d7383f2cc9e8e27cdaf";
    const redirectUrl = "http://localhost:3000/";
    const apiUri = "https://accounts.spotify.com/authorize";
    const scope = [
      "user-read-email",
      "user-read-private",
      "user-modify-playback-state",
      "user-read-playback-state",
      "user-read-currently-playing",
      "user-read-recently-played",
      "user-read-playback-position",
      "user-top-read",
      "streaming",
    ];
    window.location.href = `${apiUri}?client_id=${clientId}&redirect_uri=${redirectUrl}&scope=${scope.join(
      " "
      )}&response_type=token&show_dialog=true`;
  };
  return (
    <Container>
        <img src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_CMYK_White.png" 
        alt="" />
        <button onClick={handleClick}> CONNECT WITH SPOTIFY</button>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100%;
  background-color: black;
  gap: 5rem;
  img{
    height: 20vh
  }
  button{
    padding: 20px;
    border-radius: 99px;
    background-color: #1db954;
    font-weight: 800;
    color: white;
    text-decoration: none;
    cursor: pointer;
  }

`;