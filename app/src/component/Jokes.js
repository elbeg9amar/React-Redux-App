import React from 'react'
import { connect } from "react-redux";
import JokesCard from './JokesCard'


const Jokes = (props) =>{
    console.log(props)
    return (
        <div>
            <h2>from Jokes</h2>
            {
                props.datas.map((data) =>{
                    return <JokesCard data={data} key={data.id}/>
                })
            }
        </div>
    )
}

function mapStateToProps(state) {
    return {
        datas:state.jokes
    }
}

export default connect(mapStateToProps,{})(Jokes)