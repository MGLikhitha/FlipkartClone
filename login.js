$(document).ready(function () {
$("#Login").click(function (e) {
        e.preventDefault()

        let user = $("#Username").val()
        let pass = $("#Password").val()


        let object = {

            "password": pass,
            "username": user

        }
        details = JSON.stringify(object)
        var xhr = new XMLHttpRequest();
        xhr.open('POST', "http://localhost:8080/auth/login")
        xhr.setRequestHeader('Content-type', 'application/json;charset=utf-8')
        xhr.send(details)
        xhr.onload = function () {
            if (xhr.status == 200) {
                alert("success")
                var result = JSON.parse(xhr.response)
                console.log(result)
                if (result.error == false) {
                    alert(result.token)
                    window.location.href = "landing.html";
                }
            }
            else if (xhr.status == 401) {
               
                var result = JSON.parse(xhr.response)
                if (result.error == true) {
                    alert(result.message)
                }


            }
        }
    })
})



