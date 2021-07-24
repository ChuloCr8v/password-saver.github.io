        const username = document.querySelector('#username')
        const email = document.querySelector('#email')
        const password = document.querySelector('#password')
        const confirmPassword = document.querySelector('#password-confirm')
        const saveUsername = document.querySelector('.username')
        const saveEmail = document.querySelector('.email')
        const savePassword = document.querySelector('.password')
        const save = document.querySelector('#save')
        const container = document.querySelector('.list-container')
        const platform = document.querySelector('#platform')
        const user = document.querySelector('.user')


        const yourName = prompt("Please Enter Your Name")
        const div = document.createElement('div')
            div.innerHTML = yourName
            user.appendChild(div)

        save.addEventListener('click', (e)=> {
            e.preventDefault();
            if (username.value === '' || password.value === '' || email.value === ''){
                alert ('fill in all values')
            } else {

                
                // CREATE GEN DIV
                const containAll = document.createElement('div')
                containAll.classList.add('contain-all')

                // CREATE LIST CONTAINER
                const listItems = document.createElement('div')
                listItems.classList.add('list-items')


                //TITLE
                const title = document.createElement('h1')
                title.innerHTML = platform.value
                title.classList.add('title')
                containAll.appendChild(title)

                //CLEAR TITLE
                platform.value = ''


                //SAVE USERNAME
                const usernameList = document.createElement('div')
                usernameList.innerHTML = 'USERNAME:' + ' ' + username.value

                //STYLE USERBNAME
                usernameList.classList.add('username-list')
                listItems.appendChild(usernameList)

                //CLEAR USERNAME ENTRY
                username.value = ''


                // SAVE EMAIL
                const emailList = document.createElement('div')
                emailList.innerHTML = 'EMAIL:' + ' ' + email.value

                //STYLE EMAIL
                emailList.classList.add('email-list')
                listItems.appendChild(emailList)

                //CLEAR EMAIL ENTRY
                email.value = ''

                // SAVE PASSWORD
                if (password.value !== confirmPassword.value){
                    alert("Error: Passwords Don't Match!")
                } else {
                const passwordList = document.createElement('div')
                passwordList.innerHTML = 'PASSWORD:' + ' ' + password.value

                //STYLE PASSWORD
                passwordList.classList.add('password-list')
                listItems.appendChild(passwordList)


                //CLEAR PASSWORD ENTRY
                password.value = ''
                confirmPassword.value = ''

                //APPEND TO GENERAL CONTAINER
                containAll.appendChild(listItems)

                container.appendChild(containAll)

            
            }
        }

                
            
        })



