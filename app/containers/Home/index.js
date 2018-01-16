import React from 'react'

const styles = require('./styles.css')

class Home extends React.Component {

  render () {
    return(
      <div className={styles.container}>
        <h1>React Brunch</h1>
        <p> React skeleton with Babel/ES6/ReactRouter/PostCSS for Brunch :)</p>
      </div>
    )
  }
}

module.exports = Home
