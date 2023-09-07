
$("#submit-form").submit((e)=>{
    e.preventDefault()
    $.ajax({
        url:"https://script.google.com/macros/s/AKfycbxT_43ZaEOyrvYH5Gu4-v-8F0IUtpJ1MPbm9CwOE4KjyUqPFqFthvihgVeTQUYl27JsXg/exec",
        data:$("#submit-form").serialize(),
        method:"post",
        success:function (response){
            alert("Form submitted successfully")
            window.location.reload()
            //window.location.href="https://google.com"
        },
        error:function (err){
            alert("Something Error")
    
        }
    })
})