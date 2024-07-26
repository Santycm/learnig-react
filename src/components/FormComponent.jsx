import { useForm } from "../hooks/useForm"

export const FormComponent = () => {

    const initialForm = {
        userName: '',
        email: '',
        password: ''
    }

    const {formState, userName, email, password, onInputChange} = useForm(initialForm)

    const onSubmit = (e)=>{
        e.preventDefault();
        console.log(formState)
    }


  return (
    <section className="formContainer">
      <form onSubmit={onSubmit}>
        <h2>Sign Up</h2>
        <input
          type="text"
          placeholder="Username"
          name="userName"
          onChange={onInputChange}
          value={userName}
        />
        <input
          type="email"
          placeholder="Email"
          name="email"
          onChange={onInputChange}
          value={email}
        />
        <input
          type="password"
          placeholder="Password"
          name="password"
          onChange={onInputChange}
          value={password}
        />
        <input type="submit" value="REGISTRARSE" />
      </form>
    </section>
  );
}
