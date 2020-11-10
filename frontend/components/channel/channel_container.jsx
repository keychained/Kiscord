import { connect } from "react-redux";
import ChannelMain from "./channel";

const msp = state => ({
    errors: state.errors.channel,
    servers: Object.values(state.entities.channels),
});

const mdp = dispatch => ({
    
})
