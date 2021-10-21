import React from "react";
import FormInput from "../form-input/form-input-component";
import CustomButton from "../custom-button/custom-buttom-component";
import { auth} from "../../firebase/firebase-utils";
import { SignInContainer,ButtomContainer,SignInTitle } from "./sign-in-style";
import { googleSignInStart } from "../../redux/user/user-actions";
import { connect } from "react-redux";


class SignIn extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            email:'',
            password:''
        };

    }


    handleSubmit = async event => {
        event.preventDefault();
        const {email,password} = this.state;

        try{
            await auth.signInWithEmailAndPassword(email,password);
            this.setState({email: '', password: ''});
        }catch(error){
            alert("Password or email don't match!");
        }
        
    };

    handleChange = event => {
        const {value, name} = event.target;
        this.setState({[name]: value});
    };

    render(){
        const { googleSignInStart } = this.props;
        return(
            <SignInContainer>
                <SignInTitle>I already have an account</SignInTitle>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput
                        name='email'
                        type='email'
                        handleChange={this.handleChange}
                        value={this.state.email}
                        label='email'
                        required
                    />
                    <FormInput
                        name='password'
                        type='password'
                        value={this.state.password}
                        handleChange={this.handleChange}
                        label='password'
                        required
                    />
                    
                    <ButtomContainer>
                        <CustomButton type='submit'> Sign in </CustomButton>
                        <CustomButton
                            type='button'
                            onClick={googleSignInStart}
                            isGoogleSignIn
                        >
                        Sign in with Google
                        </CustomButton>
                    </ButtomContainer>
                    
                </form>
            </SignInContainer>
        );
    }
}


const mapDispatchToProps = dispatch => ({
    googleSignInStart: () => dispatch(googleSignInStart())
});

export default connect(null,mapDispatchToProps)(SignIn);
