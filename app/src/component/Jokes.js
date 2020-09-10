import React from 'react'
import styled from 'styled-components'
import { connect } from "react-redux";
import JokesCard from './JokesCard'

const Styled = styled.div `
  background-color:black;
`


const Jokes = (props) =>{
    console.log(props)
    return (
        <Styled>
            {
                props.datas.map((data) =>{
                    return <JokesCard data={data} key={data.id}/>
                })
            }
        </Styled>
    )
}

function mapStateToProps(state) {
    return {
        datas:state.jokes
    }
}

export default connect(mapStateToProps,{})(Jokes)