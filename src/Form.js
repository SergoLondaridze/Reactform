import React, { Component } from 'react'

export default class Form extends Component {
    constructor() {
        super();
        this.state = {
            visible: false,
            // name: '',
            // mail: '',
            // password: ''
        }
        this.refName = React.createRef();
        this.refMail = React.createRef();
        this.refPass1 = React.createRef();
        this.refPass2 = React.createRef();
    }
    // change = (event) => {
    //     this.setState({
    //         name: event.target.value,
    //         mail: event.target.value,
    //         password: event.target.value
    //     })
    // }

    submit = (event) => {
        let mail = this.refMail.current.value;
        event.preventDefault();
        if ((this.refName.current.value).length < 3) {
            alert("Name langth less 3");
        } else if (!(mail.includes('@'))) {
            alert("Bad mail not @")
        } else if (this.refPass1.current.value !== this.refPass2.current.value || (this.refPass1.current.value == "" || this.refPass2.current.value == "")) {
            alert("Password not much")
        } else {
            this.setState({
                visible: true,
            })
        }
    }
    render() {
        return (
            <div>
                <form action="#" onSubmit={this.submit} className='form'>
                    <p>Name</p>
                    <input type="text" placeholder='Name' ref={this.refName} />
                    <p>Mail</p>
                    <input type="text" placeholder='Email' ref={this.refMail} />
                    <p>Password</p>
                    <input type="password" placeholder='Password' ref={this.refPass1} />
                    <p>Confirm password</p>
                    <input type="password" placeholder='Confirm password' ref={this.refPass2} />
                    <input type="submit" className='submit' />
                </form>
                {this.state.visible && <div>
                    <p>სახელი :{this.refName.current.value}</p>
                    <p>მეილი:  {this.refMail.current.value}</p>
                    <p>პაროლი: {this.refPass1.current.value}</p>
                </div>}
            </div>
        )
    }
}
