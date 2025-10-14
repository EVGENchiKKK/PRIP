const APIController = (function(){

    const client_id = '095d82f3539345b0b4831e4403ee13e8';
    const client_secret = 'a9025000417a4a258c47618123494497';

    const _getToken = async () => {
        const result = await fetch('https://accounts.spotify.com/api/token', {
            method: 'POST',
            headers: {
                'Content-Type' : 'application/x-www-form-urlencoded',
                'Authorization' : 'Basic ' + btoa(client_id + ':' + client_secret)
            },
            body: 'grant_type-client_credentials'
        });

        const data = await result.json();
        return data.access_token;
    }

})();

