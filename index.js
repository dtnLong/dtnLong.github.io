window.onload = () => {
    const urlSearchParams = new URLSearchParams(window.location.search);
    window.location.replace("http://ecommerce-env.eba-in9ynkdf.ap-southeast-1.elasticbeanstalk.com/?" + urlSearchParams.toString());
}