<script>

    import axios from 'axios'  

    const url = 'http://localhost:8080'   

    const registerUrl = url + '/register'

    async function get() {

        let data = await axios.get(url)

        console.log(data.headers)
    
    } 

    async function post() {

        let data = await axios.post(registerUrl)

        console.log(data)

    }

    
</script>

<div >
    <button on:click={get}>test get</button> 
    <button on:click={post}>test post</button> 
</div>