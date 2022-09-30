import React, { Component } from "react";
import axios from "axios";

axios.defaults.baseURL = "http://localhost:3000"

const UserContext = React.createContext();


export default class UserProvider extends Component {
    state = {
        email: "abc",
        password: "",
        username: "",
        gender: "",
        isAdmin: false
    }


    componentDidMount() {
       
        // axios({
        //     method: 'post',
        //     url: '/login',
        //     data: {
        //         email: "admin@pavstel.com",
        //         password: "password"
        //     }
        // }).then((response) => {
        //     console.log("Hahahahah", response.data);
        // })
    }

    // handleChange = event => {
    //     const target = event.target;
    //     const email = target.email;
    //     const password = target.password;
    //     console.log("123132", email, password)

    //     const value = target.type === "checkbox" ? target.checked : target.value;
    //     const name = target.name;
    
    //     this.setState(
    //       {
    //         [name]: value
    //       }
    //     );
    // }

    login = (values,props) => {
        axios({
            method: 'post',
            url: '/login',
            data: {
                email: values.email,
                password: values.password
            }
        }).then((response) => {
            const user= response.data
            this.setState({
                username:user.name,
                isAdmin:user.isAdmin
            });
            localStorage.setItem("username", user.name);
            localStorage.setItem("isAdmin", user.isAdmin);
            window.location= '/'
        }).catch((err) => console.log("Error fetching user"));
        setTimeout(()=> {
            props.resetForm()
            props.setSubmitting(false)
           }, 1000);
   
    }


    signUp=()=>{

    }

    render() {
        console.log("let's see", this.state)
        return (
            <UserContext.Provider
                value={{
                    ...this.state,
                    handleChange: this.handleChange,
                    login: this.login
                }}
            >
                {this.props.children}
            </UserContext.Provider>
        );
    }
}
const UserConsumer = UserContext.Consumer;

export { UserProvider, UserConsumer, UserContext };

export function withUserConsumer(Component) {
    return function ConsumerWrapper(props) {
        return (
            <UserConsumer>
              {value => <Component {...props} context={value} />}
            </UserConsumer>
        );
    };
}