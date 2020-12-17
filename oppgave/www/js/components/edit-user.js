import { LitElement, html, css } from "../../node_modules/lit-element/lit-element.js";

class EditUser extends LitElement {
  static get properties() {
    return {
      user: { type: Object }
    };
  }

  //Renders a HTML site with input fields that gets automatically filled, and can be edited
 render() {
    return html`
      <head>
        <title>Edit a user</title>
      </head>
      <body>
        <h1 style="text-align: center;"> Edit a user </h1>
        <form action="submit" id="userForm" method="POST">
            <div style="text-align: center;">
                <label for="email">Email</label>
                <input type="email" id="uname" name="uname" value="${user.uname}">
                <br />
                <label for="firstName">First Name</label>
                <input type="text" id="firstName" name="firstName" value="${user.firstName}">
                <br />
                <label for="lastName">Last Name</label>
                <input type="text" id="lastName" name="lastName" value="${user.lastName}">
                <br />
                <label for="oldpwd">Old Password</label>
                <input type="password" id="oldpwd" name="oldpwd" type="text">
                <br />
                <label for="newpwd">New Password</label>
                <input type="password" id="pwd" name="pwd" type="text">
                <br /><br />
                <input type="submit" @click=${this.updateUser} id="submitForm" name="editUser" value="Update"></input>
            </div>
        </form>
      </body>
    `;
  }

  //Handling the update using data from the from above
  updateUser(e) {
    const dataForm = new FormData(e.target.form);
    fetch('api/updateUser.php', {
     method: 'POST',
     body: dataForm
    }).then(res=>res.json())
        if (data.status=='success') {
            console.log("User got updated!");
        } else {
            console.log("Oops! Something went wrong. Please try again.");
        }
      }
};
customElements.define('edit-user', EditUser);
