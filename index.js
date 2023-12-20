function callSession(){
    let username = 'Tushar.Tyagi:';
    let password = 'Password215!';
    console.log('fdgds');
    let promise = new Promise((resolve , reject) => {
        let uri = 'https://exterprisellcdemo4.service-now.com/sn_devstudio_/v1/get_publish_info';
        

        let encoded = window.btoa(username+password);
        let auth = 'Basic ' + encoded;
        console.log(auth);
        let h = new Headers({
            'Accept':'application/json',
            'Authorization':`${auth}`,
            'Access-Control-Allow-Origin' : '122.176.112.146',
            'Content-Type':'application/json'
        });
        

        let req = new Request(uri, {
            method: 'GET',
            headers: h,
            credentials: 'same-origin'
        });

        
        fetch(req)
          .then((res) => {
            // successfully got data
            console.log(res.json());
            document.getElementById("session").innerHTML = 'response';
            resolve(res);
          })
          .catch((err) => {
            // an error occured
            reject(err);
          });          
      });

    //  console.log(promise);
}

// Get the modal
var modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}