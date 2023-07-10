import { styled } from 'styled-components';

function Ytsstyled({ banner, profile, text, channelname, views,link,onClick, published }) {
    return (
        <>


            <Maindiv  onClick={() => onClick(link)}>
                <YTBanner src={banner} />
                <Secdiv>
                    <Profileimg src={profile} />
                    <Info>
                        <Content>{text}</Content>
                        <Chanelname>{channelname}</Chanelname>
                        <Views>{views} . {published}</Views>
                    </Info>
                </Secdiv>
            </Maindiv>

        </>
    )
}




const Maindiv = styled.div`
`;

const YTBanner = styled.img`
    border-radius: 20px;
    width: 100%;
    height: auto;
`;

const Secdiv = styled.div`
    display: flex;
    gap: 10px;
    margin-top: 10px;
`;

const Content = styled.div`
    font-size:20px;
    text-align: left;
`;

const Profileimg = styled.img`
max-height: 50px;
max-width: 50px;
    border-radius: 100%;
    
`;

const Chanelname = styled.div`
    color: purple;
`;

const Views = styled.div`
    color: a19f9f;
`;

const Info = styled.div`
display: flex;
flex-direction: column;
justify-content: flex-start;
align-items: flex-start;
`;





export default Ytsstyled