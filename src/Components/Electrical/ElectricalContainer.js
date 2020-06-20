import React, { Component, createContext } from 'react'
import './ElectricalContainer.css'
import Equipment from './Equipment'
import BatteryConnector from '../Connector/BatteryConnector'
import InverterConnector from '../Connector/InverterConnector'
import SolarConnector from '../Connector/SolarConnector'
import LoadConnector from '../Connector/LoadConnector'
import InverterForm from '../EntryForm/InverterForm'
import SolarForm from '../EntryForm/SolarForm'
import Legend from './Legend'
import ControllerForm from '../EntryForm/ControllerForm'
import LoadForm from '../EntryForm/LoadForm'
import BatteryForm from '../EntryForm/BatteryForm'

export const ElectricContext = createContext()

class ElectricalContainer extends Component {
    state = {
        inverterShow : false,
        solarShow : false,
        controllerShow : false,
        loadShow: false,
        batteryShow:false,
        inverterConnection:false,
        inverterHasData:false,
        solarConnection:false,
        solarHasData:false,
        controllerHasData: false,
        loadConnection:false,
        loadHasData:false,
        batteryConnection:false,
        batteryHasData:false,   
        first_data:'',
        second_data:'',
        third_data:'',
        voltage:'3.3V',
    }
    inverterFormOpenHandler = (props) =>{
        this.setState({
            inverterShow:true
        })
    }

    inverterFormCloseHandler = (props) => {
        this.setState({
            inverterShow:false
        })
    }

    inverterFormDataHandler = (event) =>{
        let nam = event.target.name;
        let val = event.target.value;
        this.setState({[nam]: val});
    }

    inverterSubmitHandler = (event) => {
        console.log(this.state.first_data);
        console.log(this.state.second_data);
        console.log(this.state.third_data);
        console.log(this.state.voltage)        
        this.setState({
            inverterConnection:!this.state.inverterConnection,
            inverterHasData:!this.state.inverterHasData
        })
        event.preventDefault();
    }

    solarFormOpenHandler = (props) =>{
        this.setState({
            solarShow:true
        })
    }

    solarFormCloseHandler = (props) => {
        this.setState({
            solarShow:false
        })
    }

    solarFormDataHandler = (event) =>{
        let nam = event.target.name;
        let val = event.target.value;
        this.setState({[nam]: val});
    }

    solarSubmitHandler = (event) => {
        console.log(this.state.first_data);
        console.log(this.state.second_data);
        console.log(this.state.third_data);
        console.log(this.state.voltage)        
        this.setState({
            solarConnection:!this.state.solarConnection,
            solarHasData:!this.state.solarHasData
        })
        event.preventDefault();
    }

    controllerFormOpenHandler = (props) =>{
        this.setState({
            controllerShow:true
        })
    }

    controllerFormCloseHandler = (props) => {
        this.setState({
            controllerShow:false
        })
    }

    controllerFormDataHandler = (event) =>{
        let nam = event.target.name;
        let val = event.target.value;
        this.setState({[nam]: val});
    }

    controllerSubmitHandler = (event) => {
        console.log(this.state.first_data);
        console.log(this.state.second_data);
        console.log(this.state.third_data);
        console.log(this.state.voltage)        
        this.setState({
            controllerHasData:!this.state.controllerHasData
        })
        event.preventDefault();
    }

    loadFormOpenHandler = (props) =>{
        this.setState({
            loadShow:true
        })
    }

    loadFormCloseHandler = (props) => {
        this.setState({
            loadShow:false
        })
    }

    loadFormDataHandler = (event) =>{
        let nam = event.target.name;
        let val = event.target.value;
        this.setState({[nam]: val});
    }

    loadSubmitHandler = (event) => {
        console.log(this.state.first_data);
        console.log(this.state.second_data);
        console.log(this.state.third_data);
        console.log(this.state.voltage)        
        this.setState({
            loadConnection:!this.state.loadConnection,
            loadHasData:!this.state.loadHasData
        })
        event.preventDefault();
    }

    batteryFormOpenHandler = (props) =>{
        this.setState({
            batteryShow:true
        })
    }

    batteryFormCloseHandler = (props) => {
        this.setState({
            batteryShow:false
        })
    }

    batteryFormDataHandler = (event) =>{
        let nam = event.target.name;
        let val = event.target.value;
        this.setState({[nam]: val});
    }

    batterySubmitHandler = (event) => {
        console.log(this.state.first_data);
        console.log(this.state.second_data);
        console.log(this.state.third_data);
        console.log(this.state.voltage)        
        this.setState({
            batteryConnection:!this.state.batteryConnection,
            batteryHasData:!this.state.batteryHasData
        })
        event.preventDefault();
    }

    toggleInverterConnection = () =>{
        this.setState({
            inverterConnection:!this.state.inverterConnection
        })
    }

    toggleSolarConnection = () =>{
        this.setState({
            solarConnection:!this.state.solarConnection
        })
    }

    toggleLoadConnection = () =>{
        this.setState({
            loadConnection:!this.state.loadConnection
        })
    }

    toggleBatteryConnection = () =>{
        this.setState({
            batteryConnection:!this.state.batteryConnection
        })
    }
    render() {
        const { first_data, second_data, third_data } = this.state;
        const isEnabled = first_data.length > 0 && second_data.length > 0 && third_data.length > 0;                
            return (
                <ElectricContext.Provider value={{...this.state, toggleInverterConnection:this.toggleInverterConnection, toggleSolarConnection:this.toggleSolarConnection, toggleLoadConnection:this.toggleLoadConnection, toggleBatteryConnection:this.toggleBatteryConnection}}>
                <div className="electrical-container"> 
                <div className="legend">
                    <Legend/>
                </div>
                <div className="top">
                    <Equipment title="Inverter" image="https://res.cloudinary.com/rajangyawali/image/upload/v1592636461/solarproject/inverter_q2lrk6.png" click={this.inverterFormOpenHandler}/>
                    <InverterForm open={this.state.inverterShow} close={this.inverterFormCloseHandler} submit={this.inverterSubmitHandler} formDataHandler={this.inverterFormDataHandler} enabled={isEnabled} data={this.state}/>
                </div> 
                <div className="top">
                    <InverterConnector status={this.state.inverterConnection}/>
                </div>
                <div className="middle">
                    <Equipment title="Solar Panel" image="https://res.cloudinary.com/rajangyawali/image/upload/v1592636460/solarproject/solar_loqsyg.jpg" click={this.solarFormOpenHandler}/>
                    <SolarForm open={this.state.solarShow} close={this.solarFormCloseHandler} submit={this.solarSubmitHandler} formDataHandler={this.solarFormDataHandler} enabled={isEnabled} data={this.state}/>
                    <SolarConnector  status={this.state.solarConnection}/>
                    <Equipment title="Controller" image="https://res.cloudinary.com/rajangyawali/image/upload/v1592636460/solarproject/chargecontroller_uroesf.jpg" click={this.controllerFormOpenHandler}/>
                    <ControllerForm open={this.state.controllerShow} close={this.controllerFormCloseHandler} submit={this.controllerSubmitHandler} formDataHandler={this.controllerFormDataHandler} enabled={isEnabled} data={this.state}/>
                    <LoadConnector  status={this.state.loadConnection}/>
                    <Equipment title="Load" image="https://res.cloudinary.com/rajangyawali/image/upload/v1592636459/solarproject/load_xynzrs.jpg" click={this.loadFormOpenHandler}/>
                    <LoadForm open={this.state.loadShow} close={this.loadFormCloseHandler} submit={this.loadSubmitHandler} formDataHandler={this.loadFormDataHandler} enabled={isEnabled} data={this.state}/>
                </div> 
                <div className="top">
                    <BatteryConnector status={this.state.batteryConnection}/>
                </div>
                <div className="bottom">             
                    <Equipment title="Battery" image="https://res.cloudinary.com/rajangyawali/image/upload/v1592636460/solarproject/battery_g4btyj.jpg" click={this.batteryFormOpenHandler}/>
                    <BatteryForm open={this.state.batteryShow} close={this.batteryFormCloseHandler} submit={this.batterySubmitHandler} formDataHandler={this.batteryFormDataHandler} enabled={isEnabled} data={this.state}/>
                </div>
            </div>  
            </ElectricContext.Provider>    
        );
    }
}

export default ElectricalContainer;