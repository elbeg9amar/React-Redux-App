import React from 'react'
import styled from 'styled-components'

const Styled = styled.div `
    .column{
        width:100%;
        float: left;
        padding:0px 10px;
    }
    .row{
        content:"";
        display:table;
        clear:both;
        width:100%;
    }
    .card{
        width:80%;
        box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
        margin: auto;
        background-color: white;
        text-align:center;
        border-radius: 40px;
        padding-bottom:15px;
    }

`


const JokesCard = ({data}) => {
    return (
        <Styled>
            <div className="row">
                <div className="column">
                    <div className="card">
                        <p>{data.joke}</p>
                        <p>Category: {data.category}</p>
                        <p>Type: {data.type}</p>
                    </div>
                </div>
            </div>
        </Styled>
    )
}

export default JokesCard