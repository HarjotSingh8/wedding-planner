import React,{Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
class Login extends Component{
    render()
    {
        return (
            <div >
	<div class="row">
		 <h1><center> Login</center></h1>
       
        </div><br /><br />
         
        
                	<div class="input-group">
								<input type="text" name="" class="form-control" placeholder="username/email"/>
							</div><br />
         
                	<div class="input-group">
									<input type="Password" name="" class="form-control" placeholder="password"/>
							</div><br />
            <div class="checkbox">
              <label><input type="checkbox" value=""/> Remember me</label>
            </div><br />
              <button type="submit" class="btn btn-success"><span class="glyphicon glyphicon-off"></span> Login</button>
         
        <button type="submit" class="btn btn-danger m-2"><span class="glyphicon glyphicon-remove"></span>Login with Google </button><br />
               <br /> <center><div style={{border:'1px solid black',height:'1px',width:'150px'}}></div></center><br />
        <div class="footer">
                 
          <p>Forgot <a href="#">Password?</a></p>
        </div>
 
	</div>

        )
    }
}
export default Login;
