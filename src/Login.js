import React,{Component} from 'react';
import fire from './config/Fire';

class Login extends Component{
    constructor(props){
        super(props);
        this.login = this.login.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.signup = this.signup.bind(this);
        this.state={
            email:'',
            password:''
        }
    }
    
    login(e){
        e.preventDefault();
        if(this.state.email === ''){
           alert("Please enter both the fields");
        }
        fire.auth().signInWithEmailAndPassword(this.state.email,this.state.password).then((u)=>{

        }).catch((error) => {
            console.log(error);
        });
    }

    signup(e){
        e.preventDefault();
        fire.auth().createUserWithEmailAndPassword(this.state.email,this.state.password)
        .catch((error) => {
            console.log(error);
        })
    }

    handleChange(e){
        this.setState({ [e.target.name] : e.target.value });
    }

    
    render(){
        return(
        <div className="col-md-6 col-xs-12" style={{marginTop:'8em',marginLeft:'40%'}}>
            <form style={{width:'70%'}}>
                <div className="form-group">
                <h2 style={{color:'white',marginBottom:'1.5em',fontFamily:'Major Mono Display, monospace'}}>
                    ABC Restaurant
                </h2>
                    <label for="exampleInputEmail" style={{color:'white',fontFamily:'Allen, cursive'}}>
                        Email address
                    </label>
                    <input value={this.state.email} onChange={this.handleChange} type="email" name="email" required placeholder="Enter email" className="form-control" style={{width:'18em'}} />
                    <small id="emailHelp" className="form-text text-muted" style={{color:'white'}}  >We'll never share your email with anyone else</small>
                </div>
                <div className="form-group">
                    <label for="exampleInputPassword1" style={{color:'white',fontFamily:'Allen, cursive'}}>Password</label>
                    <input value={this.state.password} onChange={this.handleChange} type="password" name="password" className="form-control" id="exampleInputPassword1" placeholder="Password" style={{width:'18em'}} />
                    <small id="passwordHelp" className="form-text text-muted" style={{color:'white'}}>Choose a password having >6 characters</small>
                    <br/>
                    <small id="passwordHelp2" className="form-text text-muted" style={{color:'white'}}>Use special symbols like '@' '$'</small>
                </div>
                <button type="submit" onClick={this.login} className="btn btn-primary">Login</button>
                <button onClick={this.signup} style={{marginLeft:'25px'}} className="btn btn-success">SignUp</button>
            </form>
        </div>
        );
    }
} 

export default Login;