import React from "react";
import { ProtectedRoute, Route } from "../../util/route_util";

class ChannelMain extends React.Component {
    constructor(props) {
        super(props)

    }

   componentDidMount() {
    this.props.getAllChannels(this.props.match.params.server_id)
   }

   render() {
       return(
        <div></div>
       )
   }
}

export default ChannelMain;