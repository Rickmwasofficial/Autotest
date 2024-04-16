let loginForm = document.querySelector(".logform")
let modalLabel = document.querySelector("#exampleModalLabel")

function toLoginForm() {
    modalLabel.innerHTML = "Welcome Back!"
    loginForm.innerHTML = `
    <p>Don't have an account? <button class="text-danger login22 border-0 bg-transparent" onclick="toCreateForm()">Create Account</button></p>
               
    <div class="form-floating mb-3">
      <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com" aria-describedby="descemail">
      <label for="floatingInput">Email address <span class="text-danger">*</span></label>
      <div id="descemail" class="form-text">
        example@gmail.com
      </div>
    </div>
    <div class="form-floating mb-3">
      <input type="password" class="form-control" id="floatingPassword" placeholder="Password" aria-describedby="desctext">
      <label for="floatingPassword">Password <span class="text-danger">*</span></label>
      <div id="desctext" class="form-text">
        <a href="#"><span style="color: red;">Forgot Password</span></a>
      </div>
    </div>
    <div class="modal-footer">
      <button type="button" class="btn btn-outline-danger" data-bs-dismiss="modal">Close</button>
      <button type="submit" class="btn text-light" style="background: red;" disabled="true">Login</button>
    </div>
    `
}

function toCreateForm() {
    modalLabel.innerHTML = `Welcome to <span class="text-danger">Roomify Kenya</span>`
    loginForm.innerHTML = `
    <p>Already have an account? <button class="text-danger login22 border-0 bg-transparent" onclick="toLoginForm()">Login</button></p>
               
    <div class="form-floating mb-3">
      <input type="text" class="form-control" id="floatingInput" placeholder="Enter Your Full names">
      <label for="floatingInput">Name <span class="text-danger">*</span></label>
    </div>
    <div class="form-floating mb-3">
      <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com" aria-describedby="descemail">
      <label for="floatingInput">Email address <span class="text-danger">*</span></label>
      <div id="descemail" class="form-text">
        example@gmail.com
      </div>
    </div>
    <div class="form-floating mb-3">
      <input type="password" class="form-control" id="floatingPassword" placeholder="Password" aria-describedby="desctext">
      <label for="floatingPassword">Password <span class="text-danger">*</span></label>
      <div id="desctext" class="form-text">
        Your password must be 8-20 characters long, contain letters and numbers, and must not contain spaces, special characters, or emoji.
      </div>
    </div>
    <div class="form-floating mb-3">
      <input type="password" class="form-control" id="floatingPassword2" placeholder="Password">
      <label for="floatingPassword2">Confirm Password <span class="text-danger">*</span></label>
    </div>
    <div class="modal-footer">
      <button type="button" class="btn btn-outline-danger" data-bs-dismiss="modal">Close</button>
      <button type="submit" class="btn text-light" style="background: red;" disabled="true">Create</button>
    </div>
    `
}