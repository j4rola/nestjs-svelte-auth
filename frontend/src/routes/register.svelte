<script>

    import axios from 'axios'  

    const url = 'http://localhost:8080'   

    const registerUrl = url + '/register'

    async function get() {

        let data = await axios.get(url)

        console.log(data.headers)
    
    } 

    const user = {
        firstName: '',
        lastName: '',
        email: '',
        password: ''
    }

    async function post(e) {
        e.preventDefault()

        let data = await axios.post(registerUrl, user)

        console.log(data)   

    }

    

    
</script>

<div id='wrap'>
    <h2>
        Create an Account
    </h2>
    <div id='form-wrap'>

        <form on:submit={post}>
            <input bind:value = {user.firstName}  type="text" placeholder="first name">    
            <input bind:value = {user.lastName} type="text" placeholder="last name">    
            <input bind:value = {user.email} type="text" placeholder="email">    
            <input bind:value = {user.password} type="text" placeholder="password">    
            <button type="submit">Get Started</button>    
        </form>

    </div>
</div>

<style>

    #wrap {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        font-family: sans-serif;
        padding: 15px;
    }

    #form-wrap {
        width: 100vw;
        padding-top: 5vw;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    form {
        display: flex;
        width: 50vw;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    input {
        width: 35vw;
        border: 1px solid darkgrey;
        border-radius: 8px;
        padding: 10px;
        margin-top: 20px;
        
    }

    button {
        height: 40px;
        width: 100px;
        margin-top: 30px;
        border: none;
        border-radius: 14px;
        background-color: rgb(39, 121, 184);
        color: white; 
        border-style: outset;
    }

    button:hover {
        cursor: pointer; 
    }

</style>