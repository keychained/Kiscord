import React from "react";

class ChannelMain extends React.Component {
    constructor(props) {
        super(props)

    }

   componentDidMount() {
    this.props.getAllChannels(this.props.match.params.server_id)
   }

   render() {
       return(
           <div>TEST</div>
       )
   }
}

export default ChannelMain;