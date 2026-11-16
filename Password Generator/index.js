const generate_btn = document.querySelector(".Generate-btn")
const chars = "abcdefghijklmnopqrstuvwxyz0123456789@#*&!ABCDEFGHIJKLMNOPQRSTUVWXYZ"

const copy = document.getElementById("copy")
const alerts = document.querySelector(".alert-message")

generate_btn.addEventListener("click", () => {
    const maxLength = 12
    let password = ""

    for (let i = 0; i < maxLength; i++) {
        const index = Math.floor(Math.random() * chars.length)
        password += chars.slice(index, index + 1)
    }

    const input = document.getElementById("inp1")
    input.value = password
})

copy.addEventListener("click", () => {
    const input = document.getElementById("inp1")
    if(input && input.value){
        navigator.clipboard.writeText(input.value).catch((rejected)=>{
            rejected("Unable to Copy")
        })
        alerts.classList.remove("active")
        setTimeout(() => {
            alerts.classList.add("active")
        }, 1000);
    }
    })