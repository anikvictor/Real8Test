import React from 'react'

export default class Footer extends React.Component{
    render(){
        return(
            <footer>
               Copyright &copy;{(new Date().getFullYear())}
            </footer>
        )
    }
}
 