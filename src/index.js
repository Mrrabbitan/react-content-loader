import React, { Component } from 'react'

import FacebookStyle from './FacebookStyle'
import InstagramStyle from './InstagramStyle'

/**
 * [hashCode - This function is to create an id for SVG]
 * BUT, I can't believe this is the best approach
 * If you know a better solution open a PR, please!
 */
const hashCode = function() {
  var text = ""
  var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"

  for( var i = 0; i < 5; i++ )
      text += possible.charAt(Math.floor(Math.random() * possible.length))

  return text
}

class ContentLoader extends Component {
    constructor(props) {
        super(props)
        
        this.state = {
            style: props.style,
            type: props.type || 'facebook',
            speed: props.speed || 2,
            primaryColor: props.primaryColor || '#f3f3f3',
            secundaryColor: props.secundaryColor || '#ecebeb',
            classNameHash: hashCode()
        }
    }

    render() {
        let elementContentLoader = {}

        switch(this.state.type) {
            case 'facebook': 
                elementContentLoader = <FacebookStyle {...this.state} />
                break

            case 'instagram':
                elementContentLoader = <InstagramStyle {...this.state} />
                break

            default:
                elementContentLoader = <FacebookStyle {...this.state} />
        }

        return elementContentLoader
    }
}

ContentLoader.propTypes = {
  style: React.PropTypes.object,
  type: React.PropTypes.string,
  speed: React.PropTypes.number,
  primaryColor: React.PropTypes.string,
  secundaryColor: React.PropTypes.string
}

export default ContentLoader






