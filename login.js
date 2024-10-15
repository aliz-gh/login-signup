
function login() {
    let phone = document.getElementById('phone').value
    let password = document.getElementById('password').value


    if (
        phone == "" ||
        password == "" ||
        phone.length < 11 ||
        phone.length > 11 ||
        password.length < 6
    ) {
        alert("please enter your number and password correctly mother fucker")
        return
    }







    //fetch(url,parametrs,setting)
    fetch("https://class.bluesrc.ir/api/user/login", {
        //post
        method: "post",
        body: JSON.stringify({
            phone: phone,
            password: password,
        }),
        headers: {
            'content-Type': 'application/json',
        },
    })


        .then((result) => result.json())
        .then((result) => {







            if (result.status == 'success') {
                let holder = document.getElementById('holder')
                let alert = document.createElement('div')
                alert.classList.add('alert')
                alert.classList.add('alert-success')
                alert.classList.add('mt-3')

                let text = document.createTextNode('logged in')

                alert.appendChild(text)
                holder.appendChild(alert)



                setTimeout(() => {
                    window.location.replace("f.html")

                }, 2000 )


            }

            console.log(result)

        })





}













function register() {
    let phone = document.getElementById("phone").value;
    let password = document.getElementById("password").value;
    let confirm = document.getElementById("cofirm-password").value;

    if (
        phone == "" ||
        password == "" ||
        phone.length < 11 ||
        phone.length > 11 ||
        password.length < 6 ||
        password != confirm
    ) {
        alert("Please enter your phone and password");
        return;
    }

    fetch("https://class.bluesrc.ir/api/user/create", {
        method: "post",
        body: JSON.stringify({
            phone: phone,
            password: password,
            password_confirmation: confirm,
        }),
        headers: {
            "Content-Type": "application/json",
        },
    })
        .then((result) => result.json())
        .then((result) => {
            console.log(result);
        });
}